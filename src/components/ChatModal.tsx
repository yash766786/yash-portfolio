"use client";

import React, { useState } from "react";
import { ModalBody, ModalContent } from "./ui/animated-modal";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const messageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const inputVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
};

export default function ChatModal() {
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([{ from: "bot", text: "Hi! I'm YashBot. Ask me anything about Yash!" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error contacting YashBot." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalBody>
      <ModalContent>
        <motion.h4
          className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Chat Bot 🧰
        </motion.h4>

        <motion.div
          className="h-80 md:max-w-[40vw] overflow-y-auto px-1 py-1 space-y-1 border rounded-md bg-white dark:bg-zinc-900 text-sm"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
                variants={messageVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <motion.div
                  className={`px-4 py-1 rounded-lg max-w-xs text-sm  ${
                    msg.from === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-zinc-800 text-black dark:text-white"
                  }`}
                >
                  {msg.text}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              className="text-sm text-gray-400 text-center py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              YashBot is typing<span className="animate-pulse">...</span>
            </motion.div>
          )}
        </motion.div>

        <motion.form
          onSubmit={handleSend}
          className="flex items-center gap-2 mt-4 px-2"
          variants={inputVariant}
          initial="hidden"
          animate="visible"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
            disabled={loading}
          >
            Send
          </button>
        </motion.form>
      </ModalContent>
    </ModalBody>
  );
}
