import "./input.css";
import Header from "./components/Header";
import TopBtnBox from "./components/TopBtnBox";
import Timer from "./components/common/Timer";

const App = () => {
    return (
        <div className="App">
            <div className="">
                <Header />
                <main>
                    <TopBtnBox />
                    <Timer />
                </main>
            </div>
        </div>
    );
};

export default App;
