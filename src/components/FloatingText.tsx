import React, { useEffect, useState } from "react";
import "./FloatingText.css";

const FloatingText = () => {
  const messages = [
    "Thiệp mời gửi Thố iu 🥰",
    "Nhạc hay không em 😊",
    "Nhớ đọc hết đấy nhé 😘",
  ];

  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const showTimer = setTimeout(() => {
      setShow(false);
    }, 4000); // Show message for 4 seconds

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    }, 6000); // Change message every 6 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(showTimer);
    };
  }, [messages.length]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="floating-text-container w-full h-screen flex items-center justify-center relative" style={{ overflow: "visible" }}>
      {show && (
        <span
          className="floating-message text-white text-2xl md:text-4xl font-bold shadow-lg px-6 py-2 rounded-lg backdrop-blur-sm whitespace-nowrap"
          style={{
            animation: "float 4s ease-in-out",
            position: "relative",
          }}
        >
          {messages[current]}
        </span>
      )}
    </div>
  );
};

export default FloatingText;
