import { useState } from "react";

const words = [
  { word: "cat", hint: "A small domesticated animal" },
  { word: "apple", hint: "A fruit that keeps the doctor away" },
  { word: "book", hint: "You read it to gain knowledge" },
];

function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  const currentWord = words[currentIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === currentWord.word) {
      setScore(score + 1);
    }
    setInput("");
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Practice completed! Your score: ${score + 1}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Practice Spelling</h2>
      <p>Hint: {currentWord.hint}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type the word"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
        >
          Submit
        </button>
      </form>
      <p>Score: {score}</p>
    </div>
  );
}

export default Practice;
