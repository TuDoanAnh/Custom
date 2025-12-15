
import React, { useState } from 'react';

interface SurpriseButtonProps {
  onReveal: () => void;
}

const SECRET_CODE = '060724';

const SurpriseButton: React.FC<SurpriseButtonProps> = ({ onReveal }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const unlock = () => {
    if (isRevealed) return;

    if (code.trim().toLowerCase() === SECRET_CODE) {
      setIsRevealed(true);
      setError('');
      onReveal();
    } else {
      setError('Mã chưa đúng, thử lại nhé.');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    unlock();
  };

  return (
    <div className="surprise-button-container">
      <form className="surprise-code-form" onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Nhập mã bí mật"
          value={code}
          disabled={isRevealed}
          className="surprise-code-input"
          onChange={(event) => {
            setCode(event.target.value);
            if (error) setError('');
          }}
        />
        <button
          type="submit"
          className={`surprise-button ${isRevealed ? 'revealed' : ''}`}
          disabled={isRevealed}
        >
          {isRevealed ? (
            <span className="button-text">Surprise Revealed! 💕</span>
          ) : (
            <>
              <span className="button-text">Tap to See a Surprise</span>
              <div className="button-glow"></div>
            </>
          )}
        </button>
        {error && <p className="code-error">{error}</p>}
      </form>
    </div>
  );
};

export default SurpriseButton;
