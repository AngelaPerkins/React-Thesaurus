import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import SearchBox from "./SearchBox";
import ShowResults from "./ShowResults";
import './SearchBox.css';
import './App.css';

const queryClient = new QueryClient();

function App() {

  const [word, setWord] = useState(""); 
  const [result, setResult] = useState([]); 

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="Results">
          <SearchBox word={word} wordSetter={setWord} resultSetter={setResult} />
          <div className="wordList"><ShowResults result={result} /></div>
        </div>

      </>
    </QueryClientProvider>
    
  );
 
}

export default App;
