import "./input.css";
import Header from "./components/Header";
import TopBtnBox from "./components/TopBtnBox";
import Timer from "./components/Timer";
import Frog from "./components/Frog";
import BottomArrowBox from "./components/BottomArrowBox";
import { useEffect, useState } from "react";
import Setting from "./components/Setting";

const App = () => {
    const [totalTime, setTotalTime] = useState(25);
    const [isSettingOn, setIsSettingOn] = useState(false);
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

    const toggleSetting = () => {
        setIsSettingOn((prev) => !prev);
    };

    return (
        <div className="App">
            <div className="">
                <Header toggleSetting={toggleSetting} />
                <main>
                    {isSettingOn && <Setting offSetting={toggleSetting} />}
                    <TopBtnBox onClick={handleTopBtnClick} />
                    <Timer totalMinute={totalTime} />
                    <Frog />
                    <BottomArrowBox />
                </main>
                g
            </div>
        </div>
    );
};

export default App;
