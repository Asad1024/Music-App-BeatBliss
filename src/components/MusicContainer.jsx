import { useState, useRef, useEffect } from "react";
import {
  TbPlayerSkipBackFilled,
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import musicGif from "../assets/playing.gif";
import {songs} from "../songs";

const MusicContainer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(<TbPlayerPlayFilled />);
  const [sliderValue, setSliderValue] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const musicElementRef = useRef(new Audio(songs[currentSongIndex].filePath));

  useEffect(() => {
    const musicElement = musicElementRef.current;

    const handleTimeUpdate = () => {
      setSliderValue((musicElement.currentTime / musicElement.duration) * 100);
    };

    const handleEnded = () => {
      playNextSong();
    };

    musicElement.addEventListener("timeupdate", handleTimeUpdate);
    musicElement.addEventListener("ended", handleEnded);

    // Return a cleanup function to remove the event listeners when the component unmounts or when the dependency array changes.
    return () => {
      musicElement.removeEventListener("timeupdate", handleTimeUpdate);
      musicElement.removeEventListener("ended", handleEnded);
    };
  });

  const togglePlayPause = () => {
    const musicElement = musicElementRef.current;

    if (isPlaying) {
      musicElement.pause();
      setIsPlaying(false);
      setButtonIcon(<TbPlayerPlayFilled />);
      setImageVisible(false);
    } else {
      musicElement.play();
      setIsPlaying(true);
      setButtonIcon(<TbPlayerPauseFilled />);
      setImageVisible(true);
    }
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    const isCurrentlyPlaying = isPlaying;
    musicElementRef.current.src = songs[nextIndex].filePath;
    if (isCurrentlyPlaying) {
      musicElementRef.current.play();
    }
    setButtonIcon(
      isCurrentlyPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />
    );
  };

  const playPreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
    const isCurrentlyPlaying = isPlaying;
    musicElementRef.current.src = songs[previousIndex].filePath;
    if (isCurrentlyPlaying) {
      musicElementRef.current.play();
    }
    setButtonIcon(
      isCurrentlyPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />
    );
  };

  const playSelectedSong = (index) => {
    if (index !== currentSongIndex) {
      setCurrentSongIndex(index);
      musicElementRef.current.src = songs[index].filePath;
      setIsPlaying(true);
      setButtonIcon(<TbPlayerPauseFilled />);
      setImageVisible(true);
      musicElementRef.current.play();
    } else {
      togglePlayPause();
    }
  };

  return (
    <div id="musicContainer">
      <h1 className="extra ">Recent Music</h1>
      <div className="box">
        <div className="musicContainer">
        <div className="bottomContainer">
        <div className="music-info">
          <span>{songs[currentSongIndex].songName}</span>
          <div className="music-slider">
            <input
              type="range"
              min={0}
              max={100}
              value={sliderValue}
              onChange={(e) => {
                const seekTime =
                  (e.target.value / 100) * musicElementRef.current.duration;
                musicElementRef.current.currentTime = seekTime;
                setSliderValue(e.target.value);
              }}
            />
          </div>
          <div className="music-icons">
            <span onClick={playPreviousSong}>
              <TbPlayerSkipBackFilled />
            </span>
            <span onClick={togglePlayPause}>{buttonIcon}</span>
            <span onClick={playNextSong}>
              <TbPlayerSkipForwardFilled />
            </span>
          </div>
        </div>
        <div className={`music-details ${imageVisible ? "img-visible" : ""}`}>
          <img src={musicGif} alt="" />
        </div>
      </div>
        </div>
        <div className="playlistContainer">
          <span id="copyright">Best of NCS - No CopyRight Sound</span>
          {songs.map((song, index) => (
            <div className="playlist" key={index}>
              <div className="songImg">
                <img src={song.coverPaths} alt="" />
              </div>
              <div className="songTitle">
                <span>{song.songName}</span>
              </div>
              <div>
                <span>{song.duration}</span>
                <span onClick={() => playSelectedSong(index)}>
                  {currentSongIndex === index && isPlaying ? (
                    <TbPlayerPauseFilled className="icons" />
                  ) : (
                    <TbPlayerPlayFilled className="icons" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default MusicContainer;
