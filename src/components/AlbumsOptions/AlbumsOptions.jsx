import { equals, find, map, pipe, prop } from "lodash/fp";
import { albumsArray } from "./constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AlbumAccordion } from "../AlbumAccordion/AlbumAccordion";

export const AlbumsOptions = ({ numOfSongs }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-4xl lg:text-2xl">choose a song or an album</div>
      <div className="flex sm:flex-col lg:flex-row max-w-full gap-5 justify-items-center	">
        {map(
          ({ img, albumNum, color }) => (
            <div
              key={albumNum}
              className="flex flex-col max-w-[30rem] align-items: flex-start"
            >
              <AlbumAccordion
                albumNum={albumNum}
                color={color}
                img={img}
                numOfSongs={numOfSongs}
              />
            </div>
          ),
          albumsArray
        )}
      </div>
    </div>
  );
};
