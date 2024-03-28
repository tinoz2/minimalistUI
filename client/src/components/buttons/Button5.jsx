const Button5 = ({id}) => {
    return (
        <button id={id} className="group relative overflow-hidden overflow-x-hidden rounded-md bg-white px-14 py-2.5 text-black border-none text-sm font-medium">
            <span className="relative z-10 flex justify-center items-center">Hover</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-200 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
        </button>
    );
};

export default Button5;  