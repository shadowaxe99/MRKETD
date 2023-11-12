import React, { useState, useRef, useEffect } from 'react';

interface Nft {
  id: number;
  imageSrc: string;
  category: string;
  rarity: string;
  abilities: string[];
  origin: string;
  backgroundStory: string;
}

interface CategoryInfo {
  name: string;
  logo: string;
  description: string;
}

interface AgentModalProps {
  nft: Nft;
  categoryInfo: CategoryInfo;
  onClose: () => void;
}

function AgentModal({ nft, categoryInfo, onClose }: AgentModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div className={`modal-container ${isFlipped ? 'flipped' : ''}`} ref={modalRef}>
        {/* Front of the Card */}
        <div className="card-front">
          <img src={nft.imageSrc} alt={`Agent ${nft.id}`} className="card-image" />
          <div className="card-info">
            <h1 className="card-title">{`Agent #${nft.id}`}</h1>
            <h2 className="card-category">{nft.category}</h2>
            <p className="card-rarity">{nft.rarity}</p>
            <div className="card-abilities">
              {nft.abilities.map((ability, index) => (
                <span key={index} className="ability">{ability}</span>
              ))}
            </div>
            <p className="card-origin">{nft.origin}</p>
          </div>
          <button onClick={flipCard} className="flip-button">Flip Card</button>
        </div>
        {/* Back of the Card */}
        <div className="card-back">
          <div className="card-back-content">
            <p>{nft.backgroundStory}</p>
          </div>
          <button onClick={flipCard} className="flip-button">Flip Back</button>
        </div>
      </div>
    </div>
  );
}

export default AgentModal;
