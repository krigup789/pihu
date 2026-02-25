"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageCircle, X, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
  
    const userMessage: Message = {
      role: "user",
      content: input,
    };
  
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
  
    try {
      const response = await axios.post(
        "https://pihu-backend.onrender.com/chat",
        null,
        {
          params: { message: input },
          timeout: 60000, // 🔥 important for Render cold start
        }
      );
  
      console.log("Backend Response:", response);
  
      const reply = response?.data?.reply;
  
      if (!reply) {
        throw new Error("Empty reply from backend");
      }
  
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (error: any) {
      console.error("Chat Error:", error);
  
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Server is waking up... Please try again in a few seconds.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="text-white" size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[95vw] h-[550px] max-h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" />
              <div>
                <h2 className="font-semibold text-white text-sm">
                  Krish AI Assistant
                </h2>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/10 p-1 rounded-lg transition"
            >
              <X className="text-white" size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center text-gray-300 mt-16 space-y-2">
                <p className="text-sm font-medium">
                  Ask about my experience, skills or projects
                </p>
                <p className="text-xs opacity-70">
                  Example: &quot;What technologies do you specialize in?&quot;
                </p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div
                    className="prose prose-invert prose-sm max-w-none 
                                  prose-headings:text-white 
                                  prose-li:marker:text-blue-400 
                                  prose-strong:text-white"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p>{msg.content}</p>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="bg-gray-800 text-gray-300 p-3 rounded-2xl w-fit flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/20 flex gap-2">
            <input
              className="flex-1 bg-black/40 text-white p-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my resume..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 px-4 rounded-xl text-white hover:bg-blue-700 transition disabled:opacity-50 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
