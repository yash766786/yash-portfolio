"use client";
import ChatModal from "./ChatModal";
import { useModal } from "./ui/animated-modal";
import { MdClose } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const ChatBot = () => {
  const { open, setOpen } = useModal();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {open ? (
        <button
          onClick={() => setOpen(false)}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
          aria-label="Open ChatBot"
        >
          <MdClose className="w-6 h-6 text-gray-100 cursor-pointer" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
          aria-label="Open ChatBot"
        >
          <FaRobot className="w-8 h-8 text-cyan-500" />
        </button>
      )}

      {/* Chat modal placeholder */}
      {open && <ChatModal />}
    </div>
  );
};

export default ChatBot;
