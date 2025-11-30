import React, { useState, useEffect, useRef } from 'react';

const Digit = (props) => {
    return (
        <div id="contador" className="card m-2">
            {props.number}
        </div>
    )
};

const SecondsCounter = ({ initialSeconds, countUp }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(true);
    const [inputValue, setInputValue] = useState(initialSeconds);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (countUp) {
                        return prevSeconds + 1;
                    } else {
                        return prevSeconds > 0 ? prevSeconds - 1 : 0;
                    }
                });
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, countUp]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setSeconds(initialSeconds);
        setIsRunning(false);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^\d+$/.test(value)) {
            setInputValue(value);
        }
    };

    const handleSetValue = () => {
        const numValue = parseInt(inputValue) || 0;
        setSeconds(numValue);
        setIsRunning(false);
    };

    return (
        <div data-bs-theme="dark" className="row d-flex justify-content-center align-items-center text-center p-3">
            <div id="contador" className="card fs-1 m-2">
                <i className="fa-regular fa-clock m-auto"></i>
            </div>
            <Digit number={Math.floor((seconds) / 100000 % 10)} />
            <Digit number={Math.floor((seconds) / 10000 % 10)} />
            <Digit number={Math.floor((seconds) / 1000 % 10)} />
            <Digit number={Math.floor((seconds) / 100 % 10)} />
            <Digit number={Math.floor((seconds) / 10 % 10)} />
            <Digit number={Math.floor((seconds) / 1 % 10)} />
            
            {!countUp && (
                <div className="mt-3">
                    <input 
                        type="text" 
                        className="form-control d-inline-block w-auto mx-2" 
                        placeholder="Ingresa segundos"
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={isRunning}
                    />
                    <button 
                        type="button" 
                        className="btn btn-warning mx-2"
                        onClick={handleSetValue}
                        disabled={isRunning}
                    >
                        Establecer
                    </button>
                </div>
            )}
            
            <div>
                <button 
                    type="button" 
                    className="btn btn-success mt-2 mx-2"
                    onClick={handleStart}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger mt-2 mx-2"
                    onClick={handleStop}
                    disabled={!isRunning}
                >
                    Stop
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary mt-2 mx-2"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    )
};

export default SecondsCounter;