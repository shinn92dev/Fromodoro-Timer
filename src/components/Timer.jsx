import { useEffect, useRef, useState } from "react";

const Timer = ({ totalMinute }) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const totalTime = totalMinute * 60;
    const [elapsed, setElapsed] = useState(0);
    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);
    useEffect(() => {
        setTimeLeft(totalMinute * 60);
        setElapsed(0);
    }, [totalMinute]);
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas.getContext("2d");
        const size = container.offsetWidth;
        canvas.width = size;
        canvas.height = size;
        const radius = size / 2;

        const drawCircle = (color, ratio) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(radius, radius);
            ctx.arc(
                radius,
                radius,
                radius,
                -0.5 * Math.PI,
                2 * Math.PI * ratio - 0.5 * Math.PI,
                false
            );
            ctx.lineTo(radius, radius);
            ctx.fillStyle = color;
            ctx.fill();
        };

        drawCircle("#388E3C", elapsed / totalTime);

        if (isRunning) {
            timerRef.current = setInterval(() => {
                setElapsed((prevElapsed) => {
                    const newElapsed = prevElapsed + 1;
                    setTimeLeft(totalTime - newElapsed);
                    drawCircle("red", newElapsed / totalTime);
                    if (newElapsed >= totalTime) {
                        clearInterval(timerRef.current);
                        setIsRunning(false);
                    }
                    return newElapsed;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning, elapsed, totalTime]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    const handleStartPause = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div
                ref={containerRef}
                className="relative bg-gray-500 rounded-full w-9/12 aspect-square flex justify-center items-center shadow-2xl"
            >
                <canvas ref={canvasRef} className="absolute" />
                <span className="font-black text-7xl z-10">
                    {formatTime(timeLeft)}
                </span>
            </div>
            <button
                onClick={handleStartPause}
                className="w-5/12 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-xl font-black px-5 py-2.5 text-center my-7"
            >
                {isRunning ? "PAUSE" : "START"}
            </button>
        </div>
    );
};

export default Timer;
