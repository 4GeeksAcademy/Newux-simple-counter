import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % 10000000);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    // Calculate individual digit values
    const sevenDigit = Math.floor((count / 1000000) % 10);
    const sixDigit = Math.floor((count / 100000) % 10);
    const fiveDigit = Math.floor((count / 10000) % 10);
    const fourDigit = Math.floor((count / 1000) % 10);
    const threeDigit = Math.floor((count / 100) % 10);
    const twoDigit = Math.floor((count / 10) % 10);
    const oneDigit = Math.floor(count % 10);
  
    return (
      <div className="big-counter justify-content-center mt-5 mb-2">
        <h1 className="heading">Simple Counter</h1>
        <div className="card-1 d-flex justify-content-center">
            <div className="card clock">
                <h5 className="counter-number mt-4">
                    RUN
                </h5>
            </div>
          <div className="card" id="seven-digit">
            <h5 className="counter-number mt-4">{sevenDigit}</h5>
          </div>
          <div className="card" id="six-digit">
            <h5 className="counter-number mt-4">{sixDigit}</h5>
          </div>
          <div className="card" id="five-digit">
            <h5 className="counter-number mt-4">{fiveDigit}</h5>
          </div>
          <div className="card" id="four-digit">
            <h5 className="counter-number mt-4">{fourDigit}</h5>
          </div>
          <div className="card" id="three-digit">
            <h5 className="counter-number mt-4">{threeDigit}</h5>
          </div>
          <div className="card" id="two-digit">
            <h5 className="counter-number mt-4">{twoDigit}</h5>
          </div>
          <div className="card" id="one-digit">
            <h5 className="counter-number mt-4">{oneDigit}</h5>
          </div>
        </div>
      </div>
    );
  };

export default SecondsCounter;