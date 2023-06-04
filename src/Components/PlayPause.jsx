import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";
import { Button } from "@mui/material";

function PlayPause() {
  const [playPause, setPlayPause] = useState(false);

  const handlePalyPause = () => {
    setPlayPause(!playPause);
  };
  return (
    <>
      <div>
        <Button
          variant="#25BEDA"
          onClick={handlePalyPause}
          style={{
            border: "1px solid red",
            borderRadius: "50%",
            width: "99px",
            height: "99px",
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
      </div>
    </>
  );
}
export default PlayPause;
