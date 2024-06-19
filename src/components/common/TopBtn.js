const TopBtn = ({ text, onClick }) => {
    return (
        <button
            className="py-1 px-3 my-5 font-black bg-green-200"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default TopBtn;
