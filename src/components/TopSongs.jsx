import SongCard from "../cards/SongCard";

const TopSongs = () => {
  return (
    <div className="topContainer" id="topSongs">
      <h1 className="shadow">Trending Songs</h1>
      <SongCard />
    </div>
  );
};

export default TopSongs;
