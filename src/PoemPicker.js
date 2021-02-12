import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";

const PoemPicker = ({ titles, setTitleHandler, setPoemHandler }) => {
  const history = useHistory();

  const [filteredTitles, setFilteredTitles] = useState(titles);

  const setDataHandler = (title) => {
    setTitleHandler(title);
    setPoemHandler();
  };

  function handleClick() {
    history.push("/poem");
  }

  function filterTitles(keyword) {
    let regex = new RegExp(keyword, "i");
    let arr = [];
    arr = titles.filter((title) => {
      return regex.test(title.title);
    });

    setFilteredTitles(arr);
  }

  useEffect(() => {
    setFilteredTitles(titles);
  }, [titles]);

  return (
    <div>
      <SearchBar filterTitles={filterTitles} />
      {filteredTitles.map((title) => (
        <div
          className="titles-conteiner"
          onClick={() => setDataHandler(title.title)}
        >
          <p className="poem-title" onClick={handleClick}>
            {title.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PoemPicker;
