
const Button2 = ({ id }) => {
    return (
        <button id={id} className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white px-14 py-2.5 text-sm font-medium"><span>Hover</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-black/20"></div></div></button>
    )
}

export default Button2