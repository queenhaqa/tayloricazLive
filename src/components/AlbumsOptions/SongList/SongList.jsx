import { filter, flatMap, map } from "lodash/fp";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import songsInAlbums from "../../../songsInAlbums.json";
import { SongInAlbum } from "../SongInAlbum/SongInAlbum";

export const SongList = ({ album_id, numOfSongs }) => {
  const [isListOpen, setIsListOpen] = useState(!isMobile);

  return (
    <div key={album_id}>
      <div className="flex flex-col w-0.5/5 divide-y ">
        {isListOpen &&
          map(
            ({ album_id, song_id, title }) => (
              <SongInAlbum
                {...{ numOfSongs, album_id, song_id, title, key: song_id }}
              />
            ),
            filter(
              (song) => song.album_id === album_id,
              flatMap("songs", songsInAlbums)
            )
          )}
      </div>
    </div>
  );
};
