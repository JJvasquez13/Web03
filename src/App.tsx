import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PokemonPage from './components/PokemonPage';

const App: React.FC = () => {
  const [generation, setGeneration] = useState('offset=0&limit=151');

  const handleGenerationChange = (generation: string) => {
    setGeneration(generation);
  };

  return (
    <div className="container-fluid">
      <header className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </header>
      <main>
        <div className="row justify-content-center mt-4 mb-3">
          <div className="col-10">
            <PokemonPage generation={generation} onGenerationChange={handleGenerationChange} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
