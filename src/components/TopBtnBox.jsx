import TopBtn from "./common/TopBtn";

const TopBtnBox = ({ onClick }) => {
    return (
        <div className="flex justify-around">
            <TopBtn text={"🐸 Frog"} onClick={onClick} />
            <TopBtn text={"☕ Short"} onClick={onClick} />
            <TopBtn text={"🧘 Long"} onClick={onClick} />
        </div>
    );
};

export default TopBtnBox;
