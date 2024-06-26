import { useEffect, useState } from "react";
import AdditionIcon from "./icons/AdditionIcon";
import CheckIcon from "./icons/CheckIcon";
import FrogDoneIcon from "./icons/FrogDoneIcon";
import FrogCancelIcon from "./icons/FrogCancelIcon";

const Frog = () => {
    const [isAddFrogClicked, setIsAddFrogClicked] = useState(false);
    const [inputFrog, setInputFrog] = useState("");
    const [isFrogExist, setIsFrogExist] = useState(false);
    const handleAddFrogClick = () => setIsAddFrogClicked(true);
    const handleInputFrogChange = (event) => {
        setInputFrog(event.target.value);
    };
    const retrieveSavedFrog = () => {
        const frog = window.localStorage.getItem("frog");
        if (frog) {
            setInputFrog(frog);
            setIsFrogExist(true);
        }
    };
    const handleInputFrogSubmit = (event) => {
        event.preventDefault();
        const date = new Date().toLocaleDateString();

        window.localStorage.setItem("frog", inputFrog);
        setIsAddFrogClicked(false);
        setIsFrogExist(true);
    };
    useEffect(() => {
        retrieveSavedFrog();
    }, []);
    return (
        <div className="flex flex-col items-center">
            <h2 className="mx-5 pb-1 font-black text-xl self-start">FROG</h2>
            <div
                className={`w-11/12 mx-5 mt-2 py-3 flex justify-center items-center border-2 cursor-pointer ${
                    isAddFrogClicked || isFrogExist ? "hidden" : ""
                }`}
                onClick={handleAddFrogClick}
            >
                <AdditionIcon />
                <span className="font-black text-xl text-center ml-2">
                    Add Frog
                </span>
            </div>
            <form
                className={`w-11/12 mx-5 mt-2 flex items-center border-2 bg-slate-200 ${
                    !isAddFrogClicked ? "hidden" : ""
                }`}
            >
                <input
                    type="text"
                    className="w-10/12 h-full bg-inherit px-2 py-3"
                    placeholder={`What do you want to focus on?`}
                    onChange={handleInputFrogChange}
                />

                <button
                    className="w-2/12 flex justify-center"
                    onClick={handleInputFrogSubmit}
                >
                    <CheckIcon />
                </button>
            </form>
            <div
                className={`w-11/12 mx-5 mt-2 px-2 flex items-center justify-between border-2 bg-slate-200 ${
                    !isAddFrogClicked && isFrogExist ? "" : "hidden"
                }`}
            >
                <span>{inputFrog}</span>
                <div className="flex items-center">
                    <button>
                        <FrogDoneIcon />
                    </button>
                    <button>
                        <FrogCancelIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Frog;
