import "./input.css";
import Header from "./components/Header";
import TopBtnBox from "./components/TopBtnBox";

const App = () => {
    return (
        <div className="App">
            <div className="mx-2">
                <Header />
                <main>
                    <TopBtnBox />
                </main>
            </div>
        </div>
    );
};

export default App;
