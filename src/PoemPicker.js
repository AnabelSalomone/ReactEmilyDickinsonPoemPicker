import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";

const PoemPicker = ({ titles, setTitleHandler, setPoemHandler }) => {
  const history = useHistory();

  const [filteredTitles, setFilteredTitles] = useState(titles);

  function handleClick(title) {
    console.log(title)
    setTitleHandler(title);
    setPoemHandler();
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
    <div className="flex">
      <SearchBar filterTitles={filterTitles} />
      <div>
        {filteredTitles.map((title) => (
          <p className="poem-title" onClick={() => handleClick(title.title)}>
            {title.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PoemPicker;
