import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useEffect, useState } from "react";
import data from "../data.json";
import { Box, Button, Typography } from "@mui/material";

function Body() {
  const [current, setCurrent] = useState(0);
  const [playPause, setPlayPause] = useState(false);
  const [imageData, setImageData] = useState(data.data);

  useEffect(() => {
    let timestart;
    if (playPause) {
      timestart = setInterval(() => handleRight(), 3000);
    }
    return () => clearInterval(timestart);
  }, [playPause, current]);

  const handleClickImage = (i) => {
    setCurrent(i);
  };

  const handleRight = () => {
    setCurrent((current + 1) % imageData.length);
  };
  const handleLeft = () => {
    setCurrent((current - 1 + imageData.length) % imageData.length);
  };

  const handlePalyPause = () => {
    setPlayPause(!playPause);
  };
  // function minimizeParagraphLines(paragraphId, linesToShow) {
  //   const paragraph = document.getElementById(paragraphId);
  //   const lineHeight = parseInt(getComputedStyle(paragraph).lineHeight);
  //   const maxHeight = linesToShow * lineHeight;

  //   paragraph.style.maxHeight = maxHeight + "px";
  //   paragraph.style.overflow = "hidden";
  // }
  // minimizeParagraphLines("myParagraph", 3);
  return (
    <>
      <div className="parent">
        <div className="child1">
          <img src={imageData[current].image} alt={imageData[current].name} />
          <div className="bottomImagesFlex">
            <ArrowLeftIcon
              className="leftArror"
              onClick={handleLeft}
              style={{ fontSize: "5rem", cursor: "pointer" }}
            />
            {imageData &&
              imageData.map((e, i) => (
                <div key={e.id}>
                  <img
                    className={current === i ? "normal" : "black"}
                    onClick={() => handleClickImage(i)}
                    src={e.image}
                    alt={e.name}
                  />
                </div>
              ))}
            <ArrowRightIcon
              className="rightArror"
              onClick={handleRight}
              style={{ fontSize: "5rem", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="child2">
          <div>
            <h3>{imageData[current].name}</h3>
            <p>{imageData[current].info}</p>
          </div>

          <div>
            <button className="playButton" onClick={() => handlePalyPause()}>
              {playPause ? (
                <PauseIcon
                  className="buttonText"
                  style={{
                    // width: "35px", height: "40px"
                    fontSize: "3rem",
                  }}
                />
              ) : (
                <PlayArrowIcon
                  className="buttonText"
                  style={{
                    // width: "35px", height: "40px"
                    display: "block",
                    margin: "auto",
                    fontSize: "3rem",
                  }}
                />
              )}
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
}
export default Body;
