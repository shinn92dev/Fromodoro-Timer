import "./input.css";
import Header from "./components/Header";
import TopBtnBox from "./components/TopBtnBox";
import Timer from "./components/Timer";
import Frog from "./components/Frog";

const App = () => {
    return (
        <div className="App">
            <div className="">
                <Header />
                <main>
                    <TopBtnBox />
                    <Timer />
                    <Frog />
                </main>
            </div>
        </div>
    );
};

export default App;
