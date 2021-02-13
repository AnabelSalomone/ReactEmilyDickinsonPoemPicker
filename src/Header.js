import React from 'react'
import Photo from "./thumbnail.jpg"

const Header = () => {
    return (
      <div className="header">
        <h1>Emily Dickinson Poetry</h1>
        <img src={Photo} alt=""/>
      </div>
    );
}

export default Header
