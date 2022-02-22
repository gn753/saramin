import React, { useEffect, useState } from 'react'

export default function Nav() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let minute = date.getMinutes();
      if (minute < 10) minute = "0" + minute;
      setHour(date.getHours());
      setMinute(minute);
    }, 1000);
  }, []);
  return (
    <div className='nav-container'>
      <span className="time">
        {hour}:{minute}
      </span>
      <span className='status-icon'>
      <img className='icons' src="CombinedShape.png" alt="" />
      <img className='icons' src="Wi-Fi.png" alt="" />
      <img className='icons' src="Battery.png" alt="" />
      </span>
      

      <style jsx="true">{`
      .nav-container{
        height:44px;
      }
      .time{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        margin-left:20px;
      }
      .status-icon{
        position:absolute;
        right:20px;
      }
      .icons{
        margin-right:10px;
      }
      `}</style>
    </div>
  
  )
}
