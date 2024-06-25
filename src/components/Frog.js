import AdditionIcon from "./icons/AdditionIcon";

const Frog = () => {
    return (
        <div>
            <h2 className="mx-5 pb-1 font-black text-xl ">FROG</h2>
            <div className="mx-5 mt-2 py-3 flex justify-center items-center border-2">
                <AdditionIcon />
                <span className="font-black text-xl text-center ml-2">
                    Add Frog
                </span>
            </div>
        </div>
    );
};

export default Frog;
