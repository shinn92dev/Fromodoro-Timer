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
    const deleteCurrentFrog = () => {
        window.localStorage.removeItem("frog");
        setIsFrogExist(false);
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
        <div className="flex flex-col items-center ">
            <h2 className="mx-5 pb-1 font-black text-xl self-start">FROG</h2>
            <div
                className={`w-11/12 mx-5 mt-2 py-3 flex justify-center bg-light-green rounded-lg items-center cursor-pointer shadow-lg ${
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
                className={`w-11/12 mx-5 mt-2 flex items-center bg-light-green rounded-md shadow-lg ${
                    !isAddFrogClicked ? "hidden" : ""
                }`}
            >
                <input
                    type="text"
                    className="w-10/12 h-full px-2 py-3 rounded-md bg-light-green"
                    placeholder={`What do you want to focus on?`}
                    onChange={handleInputFrogChange}
                />

                <button
                    className="w-2/12 flex justify-center py-3 "
                    onClick={handleInputFrogSubmit}
                >
                    <CheckIcon />
                </button>
            </form>
            <div
                className={`w-11/12 mx-5 mt-2 px-2 py-3 flex items-center justify-between bg-light-green text-lg rounded-md shadow-xl ${
                    !isAddFrogClicked && isFrogExist ? "" : "hidden"
                }`}
            >
                <span>{inputFrog}</span>
                <div className="flex items-center">
                    <button className="mr-1">
                        <FrogDoneIcon />
                    </button>
                    <button onClick={deleteCurrentFrog}>
                        <FrogCancelIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Frog;
