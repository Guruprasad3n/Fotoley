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
                    fontSize: "4rem",
                    textAlign: "center",
                  }}
                />
              ) : (
                <PlayArrowIcon
                  className="buttonText"
                  style={{
                    // width: "35px", height: "40px"
                    fontSize: "4rem",
                    textAlign: "center",
                  }}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------Old Code-------------------------------- */}
      {/* <Box
        className="respon"
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          className="imageText"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            width: "50%",
            // border:"1px solid red",
            py: "50px",
          }}
        >
          <img
            className="mainImage"
            style={{
              objectFit: "cover",
              height: "30rem",
              width: "100%",
              borderRadius: "50px",
            }}
            src={imageData[current].image}
            alt={imageData[current].name}
          />
          <Box
            className="bottomImages"
            sx={{
              display: "flex",
              gap: "0px",
              // px: "10px",
              alignItems: "center",
              // border: "1px solid red",
              width: "100%",
            }}
          >
            <ArrowLeftIcon
              onClick={handleLeft}
              style={{ fontSize: "5rem", cursor: "pointer" }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: "100%",
                // border: "1px solid black",
              }}
            >
              {imageData &&
                imageData.map((e, i) => (
                  <div
                    key={e.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "120px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      className={current === i ? "normal" : "black"}
                      onClick={() => handleClickImage(i)}
                      style={{
                        width: "100%",
                        height: "90%",
                        borderRadius: "25px",
                      }}
                      src={e.image}
                      alt={e.name}
                    />
                  </div>
                ))}
            </Box>

            <ArrowRightIcon
              onClick={handleRight}
              style={{ fontSize: "5rem", cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Box
          className="rightSideText"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            // border:"1px solid red",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box className="texthead">
            <Typography variant="h3">{imageData[current].name}</Typography>
            <Typography id="myParagraph" sx={{ width: "400px", mt: "30px" }}>
              {imageData[current].info}
            </Typography>
          </Box>

          <Box>
            <Button
              variant="#25BEDA"
              onClick={() => handlePalyPause()}
              style={{
                color: "#ffffff",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                background: "#25BEDA",
                fontSize: "2rem",
              }}
            >
              {" "}
              {playPause ? (
                <PauseIcon
                  sx={{ fontSize: "2rem" }}
                  style={{ width: "35px", height: "40px" }}
                />
              ) : (
                <PlayArrowIcon
                  sx={{ fontSize: "2rem" }}
                  style={{ width: "35px", height: "40px" }}
                />
              )}{" "}
            </Button>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}
export default Body;
