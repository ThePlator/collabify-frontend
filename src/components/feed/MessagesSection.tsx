'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconCheck, IconClock, IconSend } from '@tabler/icons-react';

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
  };
  preview: string;
  timestamp: string;
  unread: boolean;
}

interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

export function MessagesSection() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messages: Message[] = [
    {
      id: '1',
      sender: {
        name: 'Sarah Chen',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200',
      },
      preview:
        'Hey, I checked out your portfolio and would love to discuss a potential collaboration!',
      timestamp: '2 min ago',
      unread: true,
    },
    {
      id: '2',
      sender: {
        name: 'David Kumar',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200',
      },
      preview:
        'The project proposal looks great! When can we schedule a call to discuss the details?',
      timestamp: '1 hour ago',
      unread: true,
    },
    {
      id: '3',
      sender: {
        name: 'Emily Rodriguez',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200',
      },
      preview:
        "Thanks for your feedback on the design. I've made the suggested changes.",
      timestamp: 'Yesterday',
      unread: false,
    },
  ];

  const chatMessages: Record<string, ChatMessage[]> = {
    '1': [
      {
        id: '1-1',
        senderId: '1',
        content:
          'Hey, I checked out your portfolio and would love to discuss a potential collaboration!',
        timestamp: '2 min ago',
        status: 'read',
      },
      {
        id: '1-2',
        senderId: 'me',
        content: "Thanks! I'd love to hear more about what you have in mind.",
        timestamp: '1 min ago',
        status: 'delivered',
      },
    ],
    '2': [
      {
        id: '2-1',
        senderId: '2',
        content:
          'The project proposal looks great! When can we schedule a call to discuss the details?',
        timestamp: '1 hour ago',
        status: 'read',
      },
    ],
    '3': [
      {
        id: '3-1',
        senderId: '3',
        content:
          "Thanks for your feedback on the design. I've made the suggested changes.",
        timestamp: 'Yesterday',
        status: 'read',
      },
    ],
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const newChatMessage: ChatMessage = {
      id: `${selectedChat}-${chatMessages[selectedChat].length + 1}`,
      senderId: 'me',
      content: newMessage,
      timestamp: 'Just now',
      status: 'sent',
    };

    chatMessages[selectedChat] = [
      ...chatMessages[selectedChat],
      newChatMessage,
    ];
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Messages
      </motion.h1>

      <div className="flex gap-6">
        {/* Messages List */}
        <div
          className={`space-y-4 ${
            selectedChat ? 'hidden md:block md:w-1/3' : 'w-full'
          }`}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedChat(message.id)}
              className={`rounded-xl border border-neutral-200/50 bg-gradient-to-br from-white to-neutral-50 p-4 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 dark:border-neutral-700/50 dark:from-neutral-800 dark:to-neutral-900 ${
                selectedChat === message.id
                  ? 'border-blue-500 dark:border-blue-500'
                  : ''
              }`}>
              <div className="flex items-start gap-4">
                <img
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  className="h-12 w-12 rounded-full ring-2 ring-offset-2 ring-indigo-500/20 dark:ring-indigo-400/20"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                      {message.sender.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      {message.unread ? (
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
                      ) : (
                        <IconCheck className="h-4 w-4 text-neutral-500" />
                      )}
                      <span className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                        <IconClock className="mr-1 h-3 w-3" />
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 truncate">
                    {message.preview}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chat View */}
        {selectedChat && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 w-full md:w-2/3">
            <div className="rounded-xl border border-neutral-200/50 bg-gradient-to-br from-white to-neutral-50 dark:border-neutral-700/50 dark:from-neutral-800 dark:to-neutral-900 h-[600px] flex flex-col shadow-lg">
              {/* Chat Header */}
              <div className="p-4 border-b border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedChat(null)}
                    className="md:hidden rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <img
                    src={
                      messages.find((m) => m.id === selectedChat)?.sender.avatar
                    }
                    alt={
                      messages.find((m) => m.id === selectedChat)?.sender.name
                    }
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold text-neutral-900 dark:text-white">
                      {messages.find((m) => m.id === selectedChat)?.sender.name}
                    </h2>
                    {isTyping && (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Typing...
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages[selectedChat].map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      msg.senderId === 'me' ? 'justify-end' : 'justify-start'
                    }`}>
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.senderId === 'me'
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm'
                          : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white'
                      }`}>
                      <p className="text-sm">{msg.content}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs opacity-70">
                          {msg.timestamp}
                        </span>
                        {msg.senderId === 'me' && (
                          <IconCheck className="h-3 w-3 opacity-70" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-2">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 resize-none rounded-lg border border-neutral-200 bg-white p-2 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
                    rows={1}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-2 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed">
                    <IconSend className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
