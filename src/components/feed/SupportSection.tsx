'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  IconSend,
  IconRobot,
  IconMessage,
  IconBrandWechat,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export function SupportSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    // Update message status to sent after a brief delay
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
        )
      );
    }, 500);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          'Thank you for reaching out! I understand you need assistance. Could you please provide more details about your question or concern?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col h-[calc(100vh-12rem)] bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              Customer Support
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              How can we help you today?
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IconBrandWechat className="h-6 w-6 text-blue-500" />
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Online Support
            </span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-4 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-500 dark:text-neutral-400">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative">
                <div className="absolute -inset-4 rounded-full bg-blue-500/10 animate-pulse" />
                <IconRobot className="w-16 h-16 text-blue-500" />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mt-6">
                <p className="text-lg font-medium mb-2">
                  Welcome to Support Chat
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Our AI assistant is here to help you with any questions
                </p>
              </motion.div>
            </div>
          ) : (
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={cn(
                    'flex w-full max-w-xl',
                    message.sender === 'user'
                      ? 'ml-auto justify-end'
                      : 'mr-auto justify-start'
                  )}>
                  <div
                    className={cn(
                      'rounded-2xl px-4 py-2 max-w-sm shadow-sm',
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white'
                        : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200/50 dark:border-neutral-700/50'
                    )}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                      {message.sender === 'user' && (
                        <span className="text-xs">
                          {message.status === 'sending' && '•••'}
                          {message.status === 'sent' && '✓'}
                          {message.status === 'error' && '!'}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-2 bg-white/80 dark:bg-neutral-800/80 border border-neutral-200/50 dark:border-neutral-700/50 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex-1 relative">
            <IconMessage className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border-0 focus:ring-2 focus:ring-blue-500/50 text-neutral-900 dark:text-white placeholder-neutral-500 text-sm transition-all duration-300"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="p-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-lg">
            <IconSend className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
