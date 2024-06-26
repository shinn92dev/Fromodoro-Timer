const TopBtn = ({ text, onClick }) => {
    return (
        <button
            className="py-2 px-4 my-5 font-bold bg-btn-green rounded-lg text-white text-lg"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default TopBtn;
