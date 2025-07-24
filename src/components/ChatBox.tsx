import { useState } from "react";
import "./ChatBox.css";

interface ChatBoxProps {
  onSend: (text: string) => void;
}

const ChatBox = ({ onSend }: ChatBoxProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="chatbox-container">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="اكتب رسالتك هنا..."
        className="chatbox-input"
      />
      <button onClick={handleSend} className="chatbox-send">
        إرسال
      </button>
    </div>
  );
};

export default ChatBox;
