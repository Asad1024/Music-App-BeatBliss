import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { trendSongs1 } from "../songs";

const SongCard = () => {
  const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/");

  const playVideo = (link) => {
    setCurrentVideo(link);
  };

  return (
      <div className="trendingSongs">
        <div className="list1">
          {trendSongs1.map((song, index) => (
            <div className="list" key={index}>
              <div className="listImg">
                <img src={song.coverPaths} alt="" />
              </div>
              <div className="listTitle">
                <span>{song.songName}</span>
              </div>
              <div className="listLink">
              <span href={song.link} onClick={() => playVideo(song.link)}>
                  <BsPlayCircleFill className="youIcon" />
                </span>
              </div>
            </div>
          ))}
        </div>
        {currentVideo && (
          <div className="video-player">
            <iframe
              src={currentVideo}
              className="res-iframe"
              width={400}
              height={300}
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        )}
      </div>
  );
};

export default SongCard;
