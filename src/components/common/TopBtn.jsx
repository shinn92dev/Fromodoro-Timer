const TopBtn = ({ text, onClick }) => {
    return (
        <button
            className="py-1 px-3 my-5 font-bold bg-btn-green rounded-lg text-white text-lg w-28 text-center"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default TopBtn;
