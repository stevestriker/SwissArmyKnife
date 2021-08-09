import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Serbia from "../Images/Serbia.png";
import Vietnam from "../Images/Vietnam.jpg";
import Seattle from "../Images/Seattle.png";
import Austin from "../Images/Austin.png";
import Turkey from "../Images/Turkey.jpg";
import "../../App.css";
import ClockData from "./ClockData.js";

const Clock = (ClockData) => {
  /* useState variables for each city */
  const [clock, setClock] = useState();
  const [serbia, setSerbia] = useState();
  const [hoian, setHoian] = useState();
  const [seattle, setSeattle] = useState();
  const [austin, setAustin] = useState();
  const [kusadasi, setKusadasi] = useState();
  const [location, setLocation] = useState(ClockData);

  useEffect(() => {
    setInterval(() => {
      /* Grabbing the current time with Luxon in the time zone  */
      const serbiaDate = DateTime.now().setZone("Europe/Belgrade");
      setSerbia(serbiaDate.toLocaleString(DateTime.TIME_SIMPLE));

      const hoianDate = DateTime.now().setZone("Asia/Ho_Chi_Minh");
      setHoian(hoianDate.toLocaleString(DateTime.TIME_SIMPLE));

      const seattleDate = DateTime.now().setZone("America/Tijuana");
      setSeattle(seattleDate.toLocaleString(DateTime.TIME_SIMPLE));

      const austinDate = DateTime.now().setZone("America/Chicago");
      setAustin(austinDate.toLocaleString(DateTime.TIME_SIMPLE));

      const kusadasiDate = DateTime.now().setZone("Asia/Istanbul");
      setKusadasi(kusadasiDate.toLocaleString(DateTime.TIME_SIMPLE));
    }, 5000);
  }, []);

  return (
    <div className='mp-clock-panel'>
      <div className='mp-clock-container'>
        <h3 className='location'>Belgrade</h3>
        <p className='time'>{serbia}</p> <img src={Serbia} />
      </div>
      <div className='mp-clock-container'>
        <h3 className='location'>Hoi An</h3>
        <p className='time'> {hoian}</p> <img src={Vietnam} />
      </div>
      <div className='mp-clock-container'>
        <h3 className='location'>Austin</h3>
        <p className='time'> {austin}</p> <img src={Austin} />
      </div>
      <div className='mp-clock-container'>
        <h3 className='location'>Kusadasi</h3>
        <p className='time'> {kusadasi}</p> <img src={Turkey} />
      </div>
      <div className='mp-clock-container'>
        <h3 className='location'>Seattle</h3>
        <p className='time'> {seattle}</p> <img src={Seattle} />
      </div>
    </div>
  );
};

export default Clock;
