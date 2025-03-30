import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchWord = async () => {
    if (!word.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`
      );

      if (!response.ok) {
        throw new Error("Word not found");
      }

      const data = await response.json();
      setResults(data[0]);
    } catch (err) {
      setError(err.message);
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWord();
  };

  return (
    <div className="dictionary-container">
      <h1 className="dictionary-title">Dictionary App</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {isLoading && <p className="loading-text">Looking up the word...</p>}

      {error && <p className="error-message">Error: {error}</p>}

      {results && (
        <div className="results-container">
          <h2 className="word-heading">{results.word}</h2>

          {results.phonetics && results.phonetics.some((p) => p.audio) && (
            <div className="audio-container">
              <audio
                controls
                src={results.phonetics.find((p) => p.audio).audio}
                className="audio-player"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {results.meanings &&
            results.meanings.map((meaning, index) => (
              <div key={index} className="meaning-container">
                <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>

                {meaning.definitions && (
                  <div className="definitions-list">
                    {meaning.definitions.slice(0, 3).map((def, idx) => (
                      <div key={idx} className="definition-item">
                        <p className="definition-text">{def.definition}</p>
                        {def.example && (
                          <p className="example-text">
                            Example: "{def.example}"
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {meaning.synonyms && meaning.synonyms.length > 0 && (
                  <div className="synonyms-container">
                    <h4 className="synonyms-heading">Synonyms:</h4>
                    <p className="synonyms-text">
                      {meaning.synonyms.slice(0, 5).join(", ")}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dictionary;
