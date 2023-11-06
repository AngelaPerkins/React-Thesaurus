import getSynonym from "./Api";

export default function SearchBox({ word, wordSetter, resultSetter }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await getSynonym(word);

    resultSetter(res.data);
  }

  return (
  
    <form class= "box" onSubmit={handleSubmit}>
      <input className="box1"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => {
          wordSetter(e.target.value);
        }}>
        </input>
      <button class= "button">Find the synonym</button>
    </form>
  
  );
}