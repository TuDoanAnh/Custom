import React, { useState, useEffect } from 'react';

const SweetQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  const quotes = [
    "Chào em Thố xink iu nhé",
    "Kỉ niệm 1 năm bị cho cook nè 🥰",
    "Hẹn em iu tối nay nhé 🌹",
  ];

  // Show first quote on mount
  useEffect(() => {
    setShowQuote(true);
    const timer = setInterval(() => {
      setShowQuote(true);
      setTimeout(() => {
        setShowQuote(false);
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 3000); // 2 second visible
    }, 3000); // every 3 second

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div
      className={`fixed top-8 left-8 z-50 transition-opacity duration-500 pointer-events-none ${
        showQuote ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bg-white/80 rounded-2xl px-6 py-3 shadow-xl flex items-center gap-2">
        <p className="text-pink-500 font-semibold text-base md:text-lg">{quotes[currentQuote]}</p>
        <span className="text-xl">💕</span>
      </div>
    </div>
  );
};

export default SweetQuotes;