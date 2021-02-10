import React, { useState, useEffect } from "react";
import isEmpty from "lodash.isempty";
import { motion } from "framer-motion";

const Poem = ({ poem }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentLineNumber, setCurrentLineNumber] = useState(0);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    let interval = null;

    if (isEmpty(poem) === false && currentLineNumber <= poem[0].lines.length - 1) {
      interval = setInterval(() => {
        setIsVisible(true);
        setCurrentLineNumber((currentLineNumber) => currentLineNumber + 1);
        setCurrentLine(poem[0].lines[currentLineNumber]);
        setTimeout(() => setIsVisible(false), 2500);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentLineNumber, poem]);

  return (
    <div>
      <motion.p animate={{ opacity: isVisible ? 1 : 0 }}>
        {" "}
        {currentLine}
      </motion.p>
    </div>
  );
};

export default Poem;
