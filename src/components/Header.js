import IconBtn from "./common/IconBtn";
import HamburgerIcon from "./icons/HamburgerIcon";
import Setting from "./icons/SettingIcon";
import UserIcon from "./icons/UserIcon";

const Header = () => {
    const onClick = () => {
        console.log("Clicked");
        return;
    };
    return (
        <header className="flex justify-between py-2 bg-green-300">
            <div className="title-box flex items-center">
                <div className="w-7 h-7 mx-2 bg-red-500" id="header-logo"></div>
                <div>
                    <h1 className="text-2xl font-black">Fromodoro</h1>
                </div>
            </div>
            <div className="icon-box flex items-center">
                <IconBtn
                    width={7}
                    height={7}
                    Icon={Setting}
                    onClick={onClick}
                />
                <IconBtn
                    width={7}
                    height={7}
                    Icon={UserIcon}
                    onClick={onClick}
                />
                <IconBtn
                    width={7}
                    height={7}
                    Icon={HamburgerIcon}
                    onClick={onClick}
                />
            </div>
        </header>
    );
};

export default Header;
