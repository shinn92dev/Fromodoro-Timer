const Header = () => {
    return (
        <header className="flex justify-between py-2 bg-green-300">
            <div className="title-box flex items-center">
                <div className="w-7 h-7 mx-2 bg-red-500" id="header-logo"></div>
                <div>
                    <h1 className="text-2xl font-black">Fromodoro</h1>
                </div>
            </div>
            <div className="icon-box flex items-center">
                <button className="block w-8 h-8 mr-2 bg-red-500"></button>
                <button className="block w-8 h-8 mr-2 bg-red-500"></button>
                <button className="block w-8 h-8 mr-2 bg-red-500"></button>
            </div>
        </header>
    );
};

export default Header;
