import { equals, find, map, pipe, prop } from "lodash/fp";
import { useNavigate } from "react-router-dom";
import { getRandomInt } from "../../functions";
import songsInAlbums from "../../songsInAlbums.json";
import { SongList } from "./SongList/SongList";
import { albumsArray } from "./constants";

export const AlbumsOptions = ({ numOfSongs }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-4xl lg:text-2xl">choose a song or an album</div>
      <div className="flex sm:flex-col lg:flex-row max-w-full items-baseline gap-5 justify-items-center	">
        {map(
          ({ img, albumNum }) => (
            <div key={albumNum} className="flex flex-col max-w-[30rem]">
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
              <SongList album_id={albumNum} numOfSongs={numOfSongs} />
            </div>
          ),
          albumsArray
        )}
      </div>
    </div>
  );
};
