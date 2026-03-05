import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Search from "./components/Search";
import emojiList from "./assets/emoji-list.json";
import Line from "./components/Line";

function App() {
  const [search, setSearch] = useState("");

  const createLine = (item, index) => {
    return (
      <Line
        key={`${index} ${item.title}`}
        emoji={item.symbol}
        name={item.title}
      />
    );
  };

  const firstPopulate = emojiList.map((item, index) => {
    if (index > 21) return;

    return createLine(item, index);
  });

  const [results, setResults] = useState(firstPopulate);

  return (
    <>
      <Header text="😎 Emoji Search 😎" className="container" />
      <main>
        <Search
          search={search}
          setSearch={setSearch}
          setResults={setResults}
          data={emojiList}
          createLine={createLine}
        />
        <div className="results">{results}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
