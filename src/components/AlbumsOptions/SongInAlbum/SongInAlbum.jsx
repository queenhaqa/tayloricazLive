import { useNavigate } from "react-router-dom";

export const SongInAlbum = ({ song_id, title, album_id, numOfSongs }) => {
  const navigate = useNavigate();

  return (
    <div
      key={song_id}
      onClick={() =>
        navigate(`songquiz`, {
          state: {
            songNum: song_id,
            albumNum: album_id,
            numOfSongs,
          },
        })
      }
      className="cursor-pointer text-center "
    >
      {title}
    </div>
  );
};
