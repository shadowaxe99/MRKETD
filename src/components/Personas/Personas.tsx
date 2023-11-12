import React, { useState } from 'react';
import styles from './personas.module.css';
import PersonasModal from './PersonasModal';
import personasData from './personasData';

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

const Personas = () => {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const handleCardClick = (persona: any) => {
    setSelectedPersona(persona);
  };

  const handleCloseModal = () => {
    setSelectedPersona(null);
  };

  return (
    <div className={styles.personasContainer}>
      {personasData.map((persona: any) => (
        <div key={persona.id} className={styles.card} onClick={() => handleCardClick(persona)}>
          <img src={persona.image} alt={persona.name} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{persona.name}</h3>
          <p className={styles.cardDescription}>{persona.description}</p>
        </div>
      ))}
      {selectedPersona && <PersonasModal persona={selectedPersona} onClose={handleCloseModal} />}
    </div>
  );
};

export default Personas;
