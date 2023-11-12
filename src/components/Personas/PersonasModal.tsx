import React, { FC } from 'react';
import styles from './personas.module.css';

interface Persona {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  attributes: string[];
  price: string;
  availability: boolean;
}

interface PersonasModalProps {
  persona: Persona | null;
  onClose: () => void;
}

const PersonasModal: FC<PersonasModalProps> = ({ persona, onClose }) => {
  if (!persona) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={persona.image} alt={persona.name} className={styles.modalImage} />
        <h3 className={styles.modalTitle}>{persona.name}</h3>
        <p className={styles.modalDescription}>{persona.description}</p>
        <button className={styles.buyButton}>Buy</button>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PersonasModal;
