"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageCircle, X, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "krish AI Bot";
  content: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // const sendMessage = async () => {
  //   if (!input.trim() || loading) return;

  //   const userMessage: Message = {
  //     role: "user",
  //     content: input,
  //   };

  //   setMessages((prev) => [...prev, userMessage]);
  //   setInput("");
  //   setLoading(true);

  //   try {
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/chat`,
  //       null,
  //       {
  //         params: { message: input },
  //       },
  //     );

  //     const aiMessage: Message = {
  //       role: "assistant",
  //       content: response.data.reply,
  //     };

  //     setMessages((prev) => [...prev, aiMessage]);
  //   } catch (error) {
  //     setMessages((prev) => [
  //       ...prev,
  //       {
  //         role: "assistant",
  //         content:
  //           "### Connection Error\n\nUnable to connect to backend server.\n\nPlease try again later.",
  //       },
  //     ]);
  //   }

  //   setLoading(false);
  // };
  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    let data;

    try {
      const text = await res.text(); // read raw response

      if (!text) {
        throw new Error("Empty response from server");
      }

      data = JSON.parse(text);
    } catch (err) {
      console.error("JSON Error:", err);

      setMessages((prev) => [
        ...prev,
        { role: "krish AI Bot", content: "Something went wrong 😢" },
      ]);

      setLoading(false);
      return;
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "krish AI Bot", content: data.reply },
    ]);

    setInput("");
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
        #7c3aed,
        #000,
        #000,
        #7c3aed,
        #000,
        #000,
        #000,
        #7c3aed
      );
      background-size: 300% 300%;
      animation: shine 6s ease-out infinite;
    }

    .glass {
      background: rgba(20, 15, 40, 0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(124, 58, 237, 0.2);
    }

    .glass-light {
      background: linear-gradient(
        120deg,
        rgba(255,255,255,0.15),
        rgba(255,255,255,0.02)
      );
      pointer-events: none;
    }
  `}</style>

      {/* Floating Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-[9999] group">
          <div className="absolute bottom-16 right-0 text-xs bg-[#1a1230] text-purple-200 border border-[#2a1f4a] px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
            Talk with me 💜
          </div>

          <div className="button-bg rounded-full p-[2px] shadow-[0_0_30px_rgba(124,58,237,0.7)] animate-[pulse_2.5s_infinite] hover:animate-none">
            <button
              onClick={() => setOpen(true)}
              className="glass rounded-full p-4 text-white"
            >
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[95vw] h-[550px] max-h-[85vh] rounded-2xl shadow-[0_0_60px_rgba(124,58,237,0.5)] flex flex-col overflow-hidden glass animate-fadeIn">
          {/* 🔥 Glass Reflection */}
          <div className="absolute inset-0 glass-light opacity-20" />

          {/* Header */}
          <div className="relative z-10 flex justify-between items-center p-4 border-b border-[#2a1f4a]">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-purple-300" />
              <div>
                <h2 className="font-semibold text-white text-sm">
                  Krish AI 💜
                </h2>
                <p className="text-xs text-purple-300">● Online</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:bg-[#1a1230] p-1 rounded-lg transition"
            >
              <X className="text-white" size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-16 space-y-2">
                <p className="text-sm font-medium">
                  Ask anything about Pihu 💖
                </p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-2xl text-sm backdrop-blur-md ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-purple-500/80 to-purple-600/80 text-white ml-auto shadow-[0_0_20px_rgba(124,58,237,0.6)]"
                    : "glass text-gray-200"
                }`}
              >
                {msg.role === "krish AI Bot" ? (
                  <div className="prose prose-invert prose-sm max-w-none prose-li:marker:text-purple-300">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p>{msg.content}</p>
                )}
              </div>
            ))}

            {/* Typing */}
            {loading && (
              <div className="glass text-gray-300 p-3 rounded-2xl w-fit flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="relative z-10 p-3 border-t border-[#2a1f4a] flex gap-2">
            <input
              className="flex-1 glass text-white p-2 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about us 💜"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-4 py-2 rounded-xl text-white text-sm 
          bg-gradient-to-r from-purple-500 to-purple-600
          shadow-[0_0_25px_rgba(124,58,237,0.7)]
          hover:shadow-[0_0_40px_rgba(124,58,237,1)]
          transition-all duration-300
          hover:scale-105 active:scale-95"
            >
              Send 💜
            </button>
          </div>
        </div>
      )}
    </>
  );
}
