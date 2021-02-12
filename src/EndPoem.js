import React, { useState } from "react";
import { TwitterShareButton } from "react-twitter-embed";
import isEmpty from "lodash.isempty";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const EndPoem = ({ poem }) => {
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  if (isEmpty(poem) === false) {
    return (
      <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
        It was "{poem[0].lines[0]}" by Emily Dickinson"
        <div className="options-container">
          <TwitterShareButton
            options={{
              url: "",
              text: `${poem[0].lines}`,
              via: "mmanzanna",
              screenName: null,
            }}
          />
          <button className="go-back-button" onClick={handleClick}>
            {" "}
            Go back to list
          </button>
        </div>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default EndPoem;
