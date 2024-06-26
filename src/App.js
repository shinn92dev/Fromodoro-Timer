import "./input.css";
import Header from "./components/Header";
import TopBtnBox from "./components/TopBtnBox";
import Timer from "./components/Timer";
import Frog from "./components/Frog";
import BottomArrowBox from "./components/BottomArrowBox";
import { useState } from "react";

const App = () => {
    const [totalTime, setTotalTime] = useState(25);
    const handleTopBtnClick = (event) => {
        const clickedValue = event.target.textContent;
        if (clickedValue.includes("Frog")) {
            setTotalTime(25);
        } else if (clickedValue.includes("Short")) {
            setTotalTime(5);
        } else if (clickedValue.includes("Long")) {
            setTotalTime(15);
        }
    };
    return (
        <div className="App">
            <div className="">
                <Header />
                <main>
                    <TopBtnBox onClick={handleTopBtnClick} />
                    <Timer totalMinute={totalTime} />
                    <Frog />
                    <BottomArrowBox />
                </main>
            </div>
        </div>
    );
};

export default App;
