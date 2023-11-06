import axios from "axios";

export default async function getSynonym(word) {
  const res = await axios.get(`https://api.datamuse.com/words?ml=${word}`);

  return res;
}