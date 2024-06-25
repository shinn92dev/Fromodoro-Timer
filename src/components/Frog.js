import { useState } from "react";
import AdditionIcon from "./icons/AdditionIcon";
import CheckIcon from "./icons/CheckIcon";

const Frog = () => {
    const [isAddFrogClicked, setIsAddFrogClicked] = useState(false);
    const handleAddFrogClick = () => setIsAddFrogClicked(true);

    return (
        <div className="flex flex-col items-center">
            <h2 className="mx-5 pb-1 font-black text-xl self-start">FROG</h2>
            <div
                className={`w-11/12 mx-5 mt-2 py-3 flex justify-center items-center border-2 cursor-pointer ${
                    isAddFrogClicked ? "hidden" : ""
                }`}
                onClick={handleAddFrogClick}
            >
                <AdditionIcon />
                <span className="font-black text-xl text-center ml-2">
                    Add Frog
                </span>
            </div>
            <div
                className={`w-11/12 mx-5 mt-2 flex items-center border-2 bg-slate-200 ${
                    !isAddFrogClicked ? "hidden" : ""
                }`}
            >
                <input
                    type="text"
                    className="w-10/12 h-full bg-inherit px-2 py-3"
                    placeholder={`What do you want to focus on?`}
                />

                <button className="w-2/12 flex justify-center">
                    <CheckIcon />
                </button>
            </div>
        </div>
    );
};

export default Frog;
