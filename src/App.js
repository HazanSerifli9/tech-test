import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setsearchResults] = useState();
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setsearchResults={setsearchResults} />
      <SearchResults />
    </div>
  );
}

export default App;
