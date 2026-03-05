import { useState, useEffect } from "react";

export const Timer =({time, onTimeEnd})=>{

    const [secondsLeft, setSecondsLeft]= useState(time*60);

    useEffect(() =>{
    if(secondsLeft <=0){
        onTimeEnd();
        return;
    } 

    const interval = setInterval(()=>{
            setSecondsLeft((prev) =>prev -1);
        },1000);

        return () => clearInterval(interval);
    }, [secondsLeft,onTimeEnd]);
    const hours = Math.floor(secondsLeft / 3600);
    const minutes =Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft %60;
     const format = (num) => String(num).padStart(2, "0");
    return(
        <>
        <div>
            <p style={{boxShadow:'0 0 10px rgba(239, 17, 6, 0.7)',
                 borderRadius: '4px'
            }}>
                Czas jaki pozostał do zakończenia egzaminu → <span style={{color:'red',
                    
                }}>
                    {format(hours)}:{format(minutes)}:{format(seconds)}
                    </span> 
            </p>
        </div>
        </>
    );
};