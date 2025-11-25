import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Protocol initialized. I am Abraham\'s digital twin. Ask me about relocating to Dubai, AI investments, or our agency work.', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(inputValue);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] transition-all duration-300 animate-float">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
            <div className="flex items-center space-x-3">
              <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0 border border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-800 to-black flex items-center justify-center border border-white/10">
                    <Icons.BrainCircuit size={18} className="text-white" />
                  </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">Abraham AI</h3>
                <span className="text-xs text-gray-500 font-mono uppercase">Online • v2.5</span>
              </div>
            </div>
            <button onClick={toggleChat} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
              <Icons.X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                      : 'bg-white/5 text-gray-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-black/40 border-t border-white/5">
            <div className="relative flex items-center">
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 hover:bg-white/10 transition-colors text-white text-sm rounded-full pl-6 pr-12 py-4 focus:outline-none focus:ring-1 focus:ring-primary/50 border border-white/5 placeholder-gray-600"
                />
                <button 
                type="submit" 
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 p-2 bg-white text-black rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                >
                <Icons.Send size={16} />
                </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`group relative flex items-center justify-center w-16 h-16 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 ${isOpen ? 'bg-gray-800' : 'bg-primary hover:scale-110'}`}
      >
        {isOpen ? <Icons.X className="text-white" /> : <Icons.Sparkles className="text-white animate-pulse" />}
      </button>
    </div>
  );
};

export default ChatWidget;