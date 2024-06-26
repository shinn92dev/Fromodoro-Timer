const TopBtn = ({ text, onClick }) => {
    return (
        <button
            className="py-1 px-3 mt-5 mb-7 font-black bg-green-200"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default TopBtn;
