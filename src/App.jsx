import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Search from "./components/Search";
import emojiList from "./assets/emoji-list.json";
import Line from "./components/Line";

function App() {
  const [search, setSearch] = useState("");
  const [currentHover, setCurrentHover] = useState(null);

  const createLine = (item, index) => {
    return (
      <Line
        key={`${index} ${item.title}`}
        emoji={item.symbol}
        name={item.title}
        setCurrentHover={setCurrentHover}
        currentHover={currentHover}
        index={index}
      />
    );
  };

  return (
    <>
      <Header text="😎 Emoji Search 😎" className="container" />
      <main>
        <Search search={search} setSearch={setSearch} data={emojiList} />
        <div className="results">
          {emojiList
            .filter((element) => element.keywords.includes(search))
            .slice(0, 21)
            .map((item, index) => {
              return createLine(item, index);
            })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
