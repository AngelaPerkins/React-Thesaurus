export default function ResultsDisplay({ result }) {
    return (
      <div>
        {result.map((word) => (
          <p>{word.word}</p>
        ))}
      </div>
    );
  }