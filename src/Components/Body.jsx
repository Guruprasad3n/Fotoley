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
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh", border: "1px solid red" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            py: "50px",
          }}
        >
          <img
            style={{ objectFit:"cover",  height:"400px", width: "700px", borderRadius: "50px" }}
            src={imageData[current].image}
            alt={imageData[current].name}
          />
          <Box
            sx={{
              display: "flex",
              gap: "0px",
              // px: "10px",
              alignItems: "center",
              border: "1px solid red",
              width: "80%",
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
                width: "120%",
                border: "1px solid black",
              }}
            >
              {imageData &&
                imageData.map((e, i) => (
                  <div className={(current[i])?"normal":"black"}
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
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="h3">{imageData[current].name}</Typography>
            <Typography sx={{ width: "400px", mt: "30px" }}>
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
      </Box>
    </>
  );
}
export default Body;
