"use client";
import { Bot, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chat, setChat] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const scrollRef: any = useRef(null);
  const quickReplies = [
    "Pricing Plans 💰",
    "Tech Stack 💻",
    "Internship Info 🎓",
    "Talk to Human 👤",
  ];
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleQuickReply = (reply: any) => {
    const userMsg = { id: Date.now(), text: reply, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: `You clicked "${reply}". This shows how I handle pre-defined inputs!`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };
  return (
    <div className="min-h-screen bg-slate-800 font-sans text-white">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <Sparkles size={20} />
          </div>
          <span>NexusAI</span>
        </div>
        <button
          onClick={() => setIsChatOpen(true)}
          className="text-sm cursor-pointer font-medium hover:text-indigo-600 transition-colors"
        >
          Talk to chat-bot
        </button>
      </nav>
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Interactive Assignment
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Build smarter <span className="text-indigo-600">interactions.</span>
          </h1>
          <p className="text-lg text-amber-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the power of pre-defined options. Select an area of
            interest below to see how our adaptive UI responds to your needs.
          </p>
        </div>
        <div className="item-center justify-center flex">
          {" "}
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-indigo-600 px-12 py-4 flex gap-5 text-white hover:bg-indigo-900 transition-all cursor-pointer rounded-4xl"
          >
            <Bot /> Chatbot
          </button>
        </div>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          {isOpen && (
            <div className="mb-4 w-87.5 md:w-100 h-125 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
              <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Bot size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Nexus Support</p>
                    <p className="text-[10px] text-indigo-100 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>{" "}
                      Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1 rounded"
                >
                  <X size={20} />
                </button>
              </div>
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                        msg.sender === "user"
                          ? "bg-indigo-600 text-white rounded-tr-none"
                          : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-white border-t border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold ml-1 mb-2">
                  Quick Actions
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 text-indigo-500 hover:text-indigo-600 hover:border-indigo-200 border border-transparent rounded-full text-xs font-medium transition-all active:scale-95"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform active:scale-90 ${
              isOpen
                ? "bg-slate-800 rotate-90"
                : "bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1"
            } text-white`}
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          </button>
        </div>
      </main>

      <footer className="fixed bottom-8 w-full text-center text-slate-400 text-sm">
        Built for the Intern Assignment • 2026
      </footer>
    </div>
  );
}
