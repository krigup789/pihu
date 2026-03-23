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
        `${process.env.NEXT_PUBLIC_API_URL}/chat`,
        null,
        {
          params: { message: input },
        },
      );

      const aiMessage: Message = {
        role: "assistant",
        content: response.data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "### Connection Error\n\nUnable to connect to backend server.\n\nPlease try again later.",
        },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .button-bg {
          background: conic-gradient(
            from 0deg,
            #ff4d8d,
            #000,
            #000,
            #ff4d8d,
            #000,
            #000,
            #000,
            #ff4d8d
          );
          background-size: 300% 300%;
          animation: shine 6s ease-out infinite;
        }
      `}</style>

      {/* Floating Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-[9999] group ">
          {/* 💬 Tooltip */}
          <div className="absolute bottom-16 right-0 text-xs bg-black/70 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
            Chat with me 😄
          </div>

          {/* 🔥 Animated Border */}
          <div className="button-bg rounded-full p-[2px] shadow-[0_0_20px_rgba(255,77,141,0.5)] animate-[pulse_2.5s_infinite] hover:animate-none transition">
            {/* Button */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center bg-black/80 backdrop-blur-md text-white rounded-full p-4"
            >
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
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
              className="px-4 py-2 rounded-xl text-white text-sm 
                        from-pink-500 to-pink-600
                        hover:from-pink-600 hover:to-pink-700
                        shadow-[0_0_15px_rgba(255,105,180,0.4)]
                        hover:shadow-[0_0_25px_rgba(255,105,180,0.7)]
                        transition-all duration-300
                        hover:scale-105 active:scale-95
                        disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send 💌
            </button>
          </div>
        </div>
      )}
    </>
  );
}
