import React, { useState } from "react";
import "./Clock.css";

 const Clock = () => {
    let time = new Date().toLocaleTimeString();

    const [Ctime, setCtime] = useState(time);
    const updateTime = ()=> {
         time = new Date().toLocaleTimeString();
        setCtime(time);

    }

    setInterval(updateTime, 1000);


    return(
        <> 
        <div className="clock">{time}</div>
        </>
    );
}

export default Clock;