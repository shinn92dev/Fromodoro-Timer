import TopBtn from "./common/TopBtn";

const TopBtnBox = () => {
    const onClick = () => {
        console.log("Top Btn Clicked");
    };
    return (
        <div className="flex justify-around">
            <TopBtn text={"🐸 Frog"} onClick={onClick} />
            <TopBtn text={"☕ Short"} onClick={onClick} />
            <TopBtn text={"🧘 Long"} onClick={onClick} />
        </div>
    );
};

export default TopBtnBox;
