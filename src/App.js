import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PoemPicker from "./PoemPicker";
import Poem from "./Poem";
import Header from './Header'

function App() {
  const [titles, setTitles] = useState([{}]);
  const [title, setTitle] = useState("");
  const [poem, setPoem] = useState({});

  const getTitles = async () => {
    const url = "https://poetrydb.org/author/Emily%20Dickinson/title";
    const data = await fetch(url);
    const json = await data.clone().json();

    setTitles(json);
  };

  const setPoemHandler = async () => {
    if (title.length > 0) {
      const url = `https://poetrydb.org/author,title/Emily%20Dickinson;${title}`;
      const data = await fetch(url);
      const json = await data.clone().json();

      setPoem(json);
    }
  };

  useEffect(() => {
    getTitles("titles");
  }, []);

  useEffect(() => {
    setPoemHandler();
  }, [title]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" strict exact>
          <PoemPicker
            titles={titles}
            setTitleHandler={setTitle}
            setPoemHandler={setPoemHandler}
          />
        </Route>
        <Route path="/poem">
          <Poem poem={poem} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
