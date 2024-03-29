import { useState } from "react";

function Counter() {
  const [day, setDay] = useState("00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const deadline = new Date("May 18, 2024 9:00:00").getTime();

  const checkTime = (e) => {
    if (e < 10) {
      e = "0" + e;
    }
    return e;
  };

  const getTime = () => {};
  setInterval(() => {
    let currentTime = new Date().getTime();
    let distanceTime = deadline - currentTime;
    let day = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
    let hour = Math.floor(
      (distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceTime % (1000 * 60)) / 1000);

    // Check Time
    hour = checkTime(hour);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    // Display Timer
    setDay(day);
    setHour(hour);
    setMinute(minutes);
    setSeconds(seconds);
  }, 1000);

  getTime();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="border p-[50px] grid place-content-center text-center">
        <b
          className="counter_b font-beau font-bold tracking-[3px] text-[35px]"
          id="day"
        >
          {day}
        </b>
        <p id="label">Days</p>
      </div>
      <div className="border p-[50px] grid place-content-center text-center">
        <b
          className="counter_b font-beau font-bold tracking-[3px] text-[35px]"
          id="hour"
        >
          {hour}
        </b>
        <p id="hours">Hours</p>
      </div>
      <div className="border p-[50px] grid place-content-center text-center">
        <b
          className="counter_b font-beau font-bold tracking-[3px] text-[35px]"
          id="minute"
        >
          {minute}
        </b>
        <p id="label">Minutes</p>
      </div>
      <div className="border p-[50px] grid place-content-center text-center">
        <b
          className="counter_b font-beau font-bold tracking-[3px] text-[35px]"
          id="second"
        >
          {seconds}
        </b>
        <p id="label">Seconds</p>
      </div>
    </div>
  );
}
export default Counter;
