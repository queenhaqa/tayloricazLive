import { Link } from "react-router-dom";
import { SiteBanner } from "../../components/SiteBanner";
import classes from "./HomePage.module.css";
import { getRandomInt } from "../../functions";
import { AlbumsOptions } from "../../components/AlbumsOptions";
import allSongs from "../../allSongs.json";

export const HomePage = () => {
  return (
    <div className={classes.allErasImg}>
      <SiteBanner />
      <Link
        to={`/songquiz`}
        state={{
          songNum: getRandomInt(allSongs.length),
          numOfSongs: allSongs.length,
        }}
      >
        <button className="lg:px-8 pop-shadow lg:py-2 py-4 px-32 text-orange-100 whitespace-nowrap text-4xl lg:text-xl lg:font-mono rounded-full bg-violet-300 hover:bg-violet-400 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-100 ">
          take me to a random song quiz
        </button>
      </Link>
      <AlbumsOptions numOfSongs={allSongs.length}/>
    </div>
  );
};
