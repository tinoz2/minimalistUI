const Input2 = ({ id }) => {
    return (
        <div id={id}>
            <label className="text-white text-sm font-medium">Enter name</label>
            <input placeholder="Enter text here" className="mt-1 p-2 border border-gray-300 rounded-md text-sm text-black focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 transition" type="text" />
        </div>
    )
}

export default Input2