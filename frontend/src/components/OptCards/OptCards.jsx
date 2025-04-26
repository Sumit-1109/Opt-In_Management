import React, { useState } from "react";
import "./OptCards.scss";
import optIn from "../../assets/opt.png";
import out from "../../assets/out.png";
import whatsapp from "../../assets/whatsapp.png";
import edit from "../../assets/edit.png";
import add from "../../assets/add.png";

function OptCards({ optCard }) {
  const [isToggled, setIsToggled] = useState(false);
  const [keywordInput, setKeywordInput] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim() !== "") {
      setKeywords((prev) => [...prev, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddKeyword();
    }
  };

  return (
    <div className="opt-card">
      <div className="heading">
        <div className="opt-img">
          <img src={optCard === "in" ? optIn : out} alt="opt" />
        </div>

        <div className="heading-text" onClick={handleToggle}>
          <p className="heading">Opt-{optCard}</p>
          <p className="sub-heading">{`A text that explains what opt-${optCard} is`}</p>
        </div>
      </div>

      <div className="section">
        <div className="left-section">
          <div className="response">
            <div className="text">
              <p className="reponse-text">{`Opt-${optCard} Response`}</p>
              <span className="response-subtext">{`Setup a response message for opt-${optCard} user keywords`}</span>
            </div>

            <div className="toggle">
              <div className={`slider ${isToggled ? "active" : ""}`}></div>
            </div>
          </div>

          <button className="configure"> <img src={edit} alt="" /> Configure</button>

          <div className="float">
            <img src={whatsapp} alt="whatsapp" className="whatsapp" />
            <p className="float-text">
                Hi! Thanks for connecting. Someone from our team will get in touch soon.
            </p>
          </div>
        </div>

        <div className="right-section">
          <p className="right-heading">{`Opt-${optCard} Keywords`}</p>
          <p className="sub-heading">
            {`The user will have to type exactly one of these messages
                on which they should be automatically opted-${optCard}`}
          </p>

          <div className="right-input">
                <img className="addImg" src={add} alt="" />
                <input
              className="right-input-box"
              type="text"
              placeholder="# Add keyword"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
            />
          </div>

          <div className="keyword-container">
            {keywords.map((keyword, index) => (
              <div className="keywordBox" key={index}>
                <p className="keyword">{keyword}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptCards;
