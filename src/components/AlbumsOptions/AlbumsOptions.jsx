import { map } from "lodash/fp";
import { albumsArray } from "./constants";
import { AlbumAccordion } from "../AlbumAccordion/AlbumAccordion";

export const AlbumsOptions = ({ numOfSongs }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-4xl lg:text-2xl">choose a song or an album </div>
      <div className="flex sm:flex-col lg:flex-row max-w-full gap-5 lg:items-start flex-wrap justify-items-center">
        {map(
          ({ img, albumNum, color, textColor }) => (
            <div
              key={albumNum}
              className="flex flex-col max-w-[30rem] sm:items-center lg:justify-center flex-start"
            >
              <AlbumAccordion
                albumNum={albumNum}
                color={color}
                img={img}
                numOfSongs={numOfSongs}
                textColor={textColor}
              />
            </div>
          ),
          albumsArray
        )}
      </div>
    </div>
  );
};
