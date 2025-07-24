import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SorianaComputer from "./components/SorianaComputer";
import ChatBox from "./components/ChatBox";

interface Message {
  sender: "user" | "soriana";
  text: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    if (text.trim() === "") return;

    const userMessage: Message = { sender: "user", text };
    const sorianaReply: Message = {
      sender: "soriana",
      text: "جارِ العمل على سوريانا... ستكون جاهزة قريباً 🚧",
    };

    setMessages((prev) => [...prev, userMessage, sorianaReply]);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center">
      <Header />
      <main className="w-full max-w-3xl px-4 flex flex-col items-center">
        <HeroSection />
        <SorianaComputer messages={messages} />
        <div className="h-6" />
        <ChatBox onSend={handleSend} />
      </main>
    </div>
  );
}

export default App;
