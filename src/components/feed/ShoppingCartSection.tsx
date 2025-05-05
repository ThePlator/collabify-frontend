'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export function ShoppingCartSection() {
  // Dummy data for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      title: 'Advanced Web Development',
      description: 'Master modern web technologies and frameworks',
      price: 99.99,
      image:
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=300&h=200&fit=crop',
      quantity: 1,
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn essential design principles and tools',
      price: 79.99,
      image:
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300&h=200&fit=crop',
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">
        Shopping Cart
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-neutral-600 dark:text-neutral-400">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex gap-4 p-4 rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700">
                          <IconMinus className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                        </button>
                        <span className="w-8 text-center text-neutral-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700">
                          <IconPlus className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                        </button>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, -item.quantity)
                          }
                          className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 ml-2">
                          <IconTrash className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-80">
          <div className="sticky top-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
              Cart Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Tax</span>
                <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="pt-2 mt-2 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex justify-between text-lg font-semibold text-neutral-900 dark:text-white">
                  <span>Total</span>
                  <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 py-2 px-4 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
