import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBarComponent/SearchBar";
import QuotesGrid from "./Components/QuotesGridComponent/QuotesGrid";
import { IUserInput } from "./Common/Interfaces";

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Lao Tzu",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
    console.log("Got new keyword");
  }

  return (
    <div className="App">
      <h1 className="title">Quotes</h1>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
      <QuotesGrid SearchQuery={UserInput.SearchQuery} />
    </div>
  );
}

export default App;
