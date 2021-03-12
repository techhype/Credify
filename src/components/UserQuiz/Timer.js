import React,{useState,useEffect} from 'react'
const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  function secondsToMs(d) {
    d = Number(d);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    let minutes;
    let seconds;
    var mDisplay = m > 0 ? m : "00";
    var sDisplay = s > 0 ? s : "00";
    mDisplay.toString().length == 1 ? minutes=`0${mDisplay}` : minutes=mDisplay;
    sDisplay.toString().length == 1 ? seconds=`0${sDisplay}` : seconds=sDisplay;
    return `${minutes} : ${seconds}`;
  }
  return (
    <div>
      <h5>{secondsToMs(timeLeft)}</h5>
    </div>
  );
};
export default Timer;
