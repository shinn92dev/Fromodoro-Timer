const Setting = ({ offSetting }) => {
    return (
        <div className=" overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center shadow-xl">
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                <div className="bg-white rounded-lg shadow relative">
                    <div className="flex items-start justify-between px-5 py-3 border-b rounded-t">
                        <h3 className="text-gray-900 text-xl lg:text-2xl font-bold">
                            ⚙ Setting
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="default-modal"
                            onClick={offSetting}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className="px-3 py-5">
                        {/* Timer Setting */}
                        <div>
                            <h2 className="text-lg font-bold">🐸Timer</h2>
                            <div className="flex pt-3 pb-7">
                                <div className="w-1/3 flex flex-col items-center">
                                    <p className="font-bold mb-1">Frog</p>
                                    <input
                                        type="number"
                                        className="w-12 rounded-md text-center"
                                        defaultValue={25}
                                    />
                                </div>
                                <div className="w-1/3 flex flex-col items-center">
                                    <p className="font-bold mb-1">Short</p>
                                    <input
                                        type="number"
                                        className="w-12 rounded-md text-center"
                                        defaultValue={5}
                                    />
                                </div>
                                <div className="w-1/3 flex flex-col items-center">
                                    <p className="font-bold mb-1">Long</p>
                                    <input
                                        type="number"
                                        className="w-12 rounded-md text-center"
                                        defaultValue={15}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Sound Setting */}
                        <div>
                            <h2 className="text-lg font-bold">🔊Sound</h2>
                            <div className="pt-3 pb-7">
                                <div className="mb-3">
                                    <div className="flex justify-between mb-2 mx-3">
                                        <h3 className="font-bold">
                                            Ticking Sound
                                        </h3>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                defaultValue=""
                                                className="sr-only peer"
                                            />
                                            <div className="relative w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between mx-3">
                                        <form className="w-2/5">
                                            <select
                                                id="countries"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option defaultValue="sound1">
                                                    Sound 1
                                                </option>
                                                <option defaultValue="sound2">
                                                    Sound 2
                                                </option>
                                                <option defaultValue="sound3">
                                                    Sound 3
                                                </option>
                                            </select>
                                        </form>
                                        <input type="range" className="w-2/5" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2 mx-3">
                                        <h3 className="font-bold">
                                            Alarm Sound
                                        </h3>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                defaultValue=""
                                                className="sr-only peer"
                                            />
                                            <div className="relative w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between mx-3">
                                        <form className="w-2/5">
                                            <select
                                                id="countries"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option defaultValue="sound1">
                                                    Sound 1
                                                </option>
                                                <option defaultValue="sound2">
                                                    Sound 2
                                                </option>
                                                <option defaultValue="sound3">
                                                    Sound 3
                                                </option>
                                            </select>
                                        </form>
                                        <input type="range" className="w-2/5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Theme Setting */}
                        <div>
                            <h2 className="text-lg font-bold">🌗Theme</h2>
                            <div className="pt-3 pb-7">
                                <div className="mx-3 flex justify-between items-center">
                                    <h3 className="font-bold">Dark Mode</h3>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultValue=""
                                            className="sr-only peer"
                                        />
                                        <div className="relative w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-2 items-center p-6 border-t rounded-b justify-end">
                        <button
                            data-modal-toggle="default-modal"
                            type="button"
                            className="bg-light-green font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
