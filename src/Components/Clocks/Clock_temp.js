import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Serbia from "../Images/Serbia.png";
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
    <div className='mp-clock-container'>
      <h3 className='location'>Location</h3>
      <p className='time'>{serbia}</p> <img src={Serbia} />
    </div>
  );
};

export default Clock;
