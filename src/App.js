import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import striker from "./Components/Images/mp-striker.png";
import Track1 from "./Components/Media/Ozoyo - 333.mp3";
import Track2 from "./Components/Media/Ozoyo - Motel Lazy.mp3";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "./App.css";
import Clock from "./Components/Clocks/Clock.js";
import ClockData from "./Components/Clocks/ClockData.js";
//import { HoiAn, Austin, Belgrade, Kusadasi, Seattle } from ".Components/Clocks/Clock";

const MusicPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicPlayer = useRef();

  const togglePlayPause = () => {
    const prevToggle = isPlaying;
    setIsPlaying(!prevToggle);
    if (!prevToggle) {
      musicPlayer.current.play();
    } else {
      musicPlayer.current.pause();
    }
  };

  /* For Practice Button */

  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);

    if (clicked ? <div className='mp-hello'>Hello</div> : null);
  };

  return (
    <div className='mp-container'>
      <nav className='mp-nav'>
        <img src={striker} className='mp-logo'></img>
        <ul>
          <li>
            <a href='/MusicPage'>Home</a>
          </li>
          <li>
            <a href='/MusicPage'>Country</a>
          </li>
          <li>
            <a href='/MusicPage'>Folk</a>
          </li>
          <li>
            <a href='/MusicPage'>Jazz</a>
          </li>
          <li>
            <a className='mp-nav-cp' href='/MusicPage'>
              Complaints
            </a>
          </li>
        </ul>
      </nav>
      <nav className='mp-clock-wrapper'>
        <Clock data={ClockData} />
      </nav>
      <div className='mp-content'>
        <div className='mp-left-col'>
          <h1 className='mp-msg'>
            Relax
            <br />
            And
            <br />
            Code
          </h1>
        </div>
        <div className='mp-right-col'>
          <p>Press Here To Begin</p>
          <button onClick={togglePlayPause} className='mp-button'>
            {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
          </button>
          <audio ref={musicPlayer} src={Track2} autoplay preload />
          <Marquee className='mp-marquee'>Ozoyo - Motel Lazy.mp3</Marquee>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;

//        <Belgrade /> <HoiAn /> <Austin /> <Kusadasi /> <Seattle />
