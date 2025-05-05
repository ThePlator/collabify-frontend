'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconSend, IconRobot } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
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
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          'Thank you for your message. I am here to help you with any questions or concerns you may have.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col h-[calc(100vh-12rem)]">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
          Customer Support
        </h1>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-500 dark:text-neutral-400">
              <IconRobot className="w-16 h-16 mb-4" />
              <p className="text-lg">How can I assist you today?</p>
            </div>
          ) : (
            messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  'flex w-full max-w-xl',
                  message.sender === 'user'
                    ? 'ml-auto justify-end'
                    : 'mr-auto justify-start'
                )}>
                <div
                  className={cn(
                    'rounded-lg px-4 py-2 max-w-sm',
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                  )}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-0 focus:ring-0 text-neutral-900 dark:text-white placeholder-neutral-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="p-2 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <IconSend className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
