import speakNow from "../../assets/images/speakNow.webp";
import evermore from "../../assets/images/evermore.png";
import red from "../../assets/images/red.webp";
import midnights from "../../assets/images/midnights.png";
import reputation from "../../assets/images/reputation.png";
import lover from "../../assets/images/lover.png";
import eightyNine from "../../assets/images/1989tv.png";
import fearless from "../../assets/images/fearless.png";
import debut from "../../assets/images/debut.png";
import folklore from "../../assets/images/folklore.png";
import { alpha } from "@mui/material";

export const albumsArray = [
  {
    img: debut,
    albumNum: 2,
    color: alpha("#B6D06D", 0.75),
    textColor: "black",
  },
  {
    img: fearless,
    albumNum: 3,
    color: alpha("#E1CFB6", 0.85),
    textColor: "#000000",
  },
  {
    img: speakNow,
    albumNum: 4,
    color: alpha("#7C6089", 0.75),
    textColor: "#000000",
  },
  {
    img: red,
    albumNum: 5,
    color: alpha("#972B2D", 0.75),
    textColor: "#000000",
  },
  { img: eightyNine, albumNum: 1, color: "#d6e9ff", textColor: "#000000" },
  { img: reputation, albumNum: 6, color: "#727272", textColor: "#000000" },
  { img: lover, albumNum: 7, color: "#eaadd6", textColor: "#000000" },
  { img: folklore, albumNum: 8, color: "#bababa", textColor: "#000000" },
  {
    img: evermore,
    albumNum: 9,
    color: alpha("#cc621b", 0.7),
    textColor: "#000000",
  },
  {
    img: midnights,
    albumNum: 10,
    color: alpha("#53658F", 0.6),
    textColor: "#000000",
  },
];
