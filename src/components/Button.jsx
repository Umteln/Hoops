const Button = ({ type, title, Icon, variant, full, handleClick }) => {
    return (
        <button
            className={`flexCenter gap-3 rounded-full border ${variant} ${
                full && 'w-full'
            }`}
            type={type}
            onClick={handleClick}
        >
            {Icon && (
                <Icon
                    width={24}
                    height={24}
                />
            )}
            <label className='bold-16 whitespace-nowrap cursor-pointer'>
                {title}
            </label>
        </button>
    );
};

export default Button;
