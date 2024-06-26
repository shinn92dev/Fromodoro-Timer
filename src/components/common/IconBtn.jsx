const IconBtn = ({ width, height, Icon, onClick }) => {
    return (
        <button className={`w-${width} h-${height} mr-2`} onClick={onClick}>
            <Icon />
        </button>
    );
};

export default IconBtn;
