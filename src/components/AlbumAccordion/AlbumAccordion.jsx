import { equals, find, map, pipe, prop } from "lodash/fp";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getRandomInt } from "../../functions";
import songsInAlbums from "../../songsInAlbums";
import { SongList } from "../AlbumsOptions/SongList/SongList";

export const AlbumAccordion = ({ img, albumNum, color, numOfSongs }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Accordion
      className={`hover:${color}`}
      sx={{
        borderRadius: "25px !important",
        backgroundColor: color,
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      expanded={isExpanded}
    >
      <AccordionSummary>
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
          overflow: isHovering ? "auto" : "hidden",
          maxHeight: "18rem",
          scrollbarGutter: "stable both-edges",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "white",
            borderRadius: "10px",
          },
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <SongList album_id={albumNum} numOfSongs={numOfSongs} />
      </AccordionDetails>
    </Accordion>
  );
};
