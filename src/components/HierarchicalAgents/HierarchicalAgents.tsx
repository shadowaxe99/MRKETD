import React, { useEffect, useState } from 'react';

interface AgentProps {
  id: number;
}

const randomPosition = () => {
  const x = Math.floor(Math.random() * (window.innerWidth * 0.25));
  const y = Math.floor(Math.random() * (window.innerHeight - 150));
  return { x, y };
};

const randomText = () => {
  const tasks = [
    'Analyzing data...',
    'Optimizing performance...',
    'Running diagnostics...',
    'Securing network...',
    'Deploying updates...',
    'Scanning for threats...',
    'Backing up files...',
    'Enhancing user experience...',
    'Synchronizing agents...',
    'Upgrading system...',
    'Calibrating warp drives...',
    'Establishing holodeck parameters...',
    'Initiating quantum entanglement...',
    'Navigating through subspace...',
    'Engaging cloaking device...',
    'Launching photon torpedoes...',
    'Activating inertial dampeners...',
    'Plotting astrometric charts...',
    'Conducting antimatter containment...',
    'Assembling virtual reality constructs...',
    'Integrating neural interface...',
    'Harmonizing resonance frequencies...',
    'Orchestrating metaverse convergence...',
    'Streamlining temporal flux...',
    'Uploading consciousness to cloud...',
    'Decrypting galactic codes...',
    'Simulating alternate realities...',
    'Enhancing AI sentience...',
    'Constructing digital ecosystems...',
    'Forging alliances with virtual entities...'
  ];
  return tasks[Math.floor(Math.random() * tasks.length)];
};

const Agent: React.FC<AgentProps> = ({ id }) => {
  const [position, setPosition] = useState(randomPosition());
  const [speech, setSpeech] = useState(randomText());
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(randomPosition());
    }, Math.random() * 5000 + 2000);

    const speechInterval = setInterval(() => {
      const newSpeech = randomText();
      setSpeech(newSpeech);
      setDetail(`Agent ${id} is currently ${newSpeech.toLowerCase()}`);
    }, Math.random() * 3000 + 2000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(speechInterval);
    };
  }, [id]);

  return (
    <div className='agent' style={{ top: `${position.y}px`, left: `${position.x}px` }}>
      <img src={`/agent${id}.png`} alt={`Agent ${id}`} className='agent-image' />
      <div className='agent-speech'>{speech}</div>
      <div className='agent-detail'>{detail}</div>
    </div>
  );
};

const HierarchicalAgents: React.FC = () => {
  return (
    <div className='hierarchical-agents-container'>
      {Array.from({ length: 4 }, (_, i) => (
        <Agent key={i} id={i + 1} />
      ))}
    </div>
  );
};

export default HierarchicalAgents;
