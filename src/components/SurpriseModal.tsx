import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">My Dearest Love</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                Trêu Thố zay đủ r, xin lỗi Thố vì đã để em đợi ngày này quá lâu nha!
              </p>
              <p className="handwritten-line">
                Anh nghĩ là câu từ của anh lủng cùng, không được mượt lắm
              </p>
              <p className="handwritten-line">
                Lí do anh chọn ngày hôm nay là để đánh dấu một năm rất dài của anh, từ lúc anh nhận ra được là anh có tình cảm với em
              </p>
              <p className="handwritten-line">
                Lúc đầu nó chỉ những tình cảm mơ hồ mà anh cũng không chắc, khoảng thời gian đó anh đã gây cho em nhiều phiền phức. Mặc dù hành trình này 
                ban đầu chỉ là những cố gắng của anh để đưa mối quan hệ của hai đứa mình về bình thường
              </p>
              <p className="handwritten-line">
                Nhưng sau tất cả, anh vẫn rất biết ơn em vì đã kiên nhẫn với anh, đã cho anh cơ hội để được bên cạnh em
              </p>
              <div className="handwritten-signature">
                Vậy nên là em đồng ý làm bạn gái anh nha!
                <br />
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
