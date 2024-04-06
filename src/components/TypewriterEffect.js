import React, {useState,useEffect,useRef} from 'react';

function TypewriterEffect({text,speed,delay}) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    let speedOut = useRef(speed)



    useEffect(() => {
        const intervalId = setInterval(() => {

            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(intervalId);
            }

            speedOut.current = speed
            console.log(currentIndex)
            if (currentIndex === 0) {
                speedOut.current = delay
            }

            if (text[currentIndex] === " ")
            {
                speedOut.current = 0;
            }



        }, Number(speedOut.current));

        return () => clearInterval(intervalId);
    }, [currentIndex, text, speed, delay]);

    return ( 
        <div className = "typeWriterDiv" >
        <h1 className = {displayText.split("")[0]}> 
            {displayText} 
        </h1> 
        </div>
    );
}

export default TypewriterEffect;