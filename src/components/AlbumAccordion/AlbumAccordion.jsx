import { equals, find, map, pipe, prop } from "lodash/fp";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getRandomInt } from "../../functions";
import songsInAlbums from "../../songsInAlbums";
import { SongList } from "../AlbumsOptions/SongList/SongList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { isMobile } from "react-device-detect";

export const AlbumAccordion = ({
  img,
  albumNum,
  color,
  numOfSongs,
  textColor,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const summaryRef = useRef();

  useEffect(() => { isExpanded && summaryRef?.current?.scrollIntoView({ behavior: "smooth" }) }, [isExpanded, summaryRef])
  console.log(albumNum, isExpanded);

  return (
    <Accordion
      className={`hover:${color}`}
      sx={{
        borderRadius: "25px !important",
        backgroundColor: color,
        color: textColor,
      }}
      {...(isMobile && {
        onMouseEnter: () => setIsExpanded(true),
        onMouseLeave: () => setIsExpanded(false)
      })}
      expanded={isExpanded}
    >
      <AccordionSummary ref={summaryRef} expandIcon={<ExpandMoreIcon onClick={(e) => {e.stopPropagation()
        setIsExpanded(prevState => !prevState)}} />}>
        <img
          className={
            "cursor-pointer hover:scale-105 lg:h-[2.5rem] lg:w-[18rem] h-[10rem] w-[19rem]"
          }
          src={img}
          key={albumNum}
          alt="speakNow"
          onClick={() => {
            const songsInAlbum = find(
              pipe(prop("album_id"), equals(albumNum)),
              songsInAlbums
            ).songs;
            navigate(`songquiz`, {
              state: {
                songNum:
                  songsInAlbum[getRandomInt(songsInAlbum.length)].song_id,
                numOfSongs,
                albumNum,
              },
            });
          }}
        />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          overflowY: isHovering || isMobile ? "scroll" : "hidden",
          height: isMobile ? "fit-content" : "18rem",
          flexShrink: 0,
          scrollbarGutter: "stable both-edges",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "white",
            borderRadius: "10px",
          },
        }}
        {...(isMobile && {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false)
        })}
      >
        <SongList album_id={albumNum} numOfSongs={numOfSongs} color={color} />
      </AccordionDetails>
    </Accordion>
  );
};
