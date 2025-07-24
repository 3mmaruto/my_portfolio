import { useRef, useEffect } from "react";
import "./SorianaComputer.css";

interface Message {
  sender: "user" | "soriana";
  text: string;
}

interface SorianaComputerProps {
  messages: Message[];
}

const SorianaComputer = ({ messages }: SorianaComputerProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="soriana-computer-wrapper">
      <div className="soriana-screen">
        <h2>👩‍💻 سوريانا كومبيوتر</h2>

        <div className="chatbox-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chatbox-message ${
                msg.sender === "user" ? "text-end" : "text-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default SorianaComputer;
