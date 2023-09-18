import { trendSongs1, trendSongs2 } from "../songs";
import { BsYoutube } from "react-icons/bs";

const SongCard = () => {
  return (
    <div className="trendingSongs">
      <div className="list1">
        {trendSongs1.map((song) => (
          <>
            <div className="list" key={song}>
              <div className="listImg">
                <img src={song.coverPaths} alt="" />
              </div>
              <div className="listTitle">
                <span>{song.songName}</span>
              </div>
              <div className="listLink">
                <a href={song.link} target="_blank" rel="noopener noreferrer">
                  <BsYoutube className="youIcon" />
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="list2">
        {trendSongs2.map((song) => (
          <>
            <div className="list">
              <div className="listImg">
                <img src={song.coverPaths} alt="" />
              </div>
              <div className="listTitle">
                <span>{song.songName}</span>
              </div>
              <div className="listLink">
                <a href={song.link}  target="_blank" rel="noopener noreferrer">
                  <BsYoutube className="youIcon" />
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SongCard;
