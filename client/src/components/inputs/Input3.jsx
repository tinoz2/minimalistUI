const Input3 = ({ id }) => {
    return (
        <div id={id} >
            <label className="text-white text-sm font-medium">Enter email</label>
            <div className="relative mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5 absolute left-2 top-2 text-gray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input id={id} placeholder="Enter text here" className="p-2 pl-10 border border-gray-300 rounded-md text-sm text-black focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 transition" type="text" />
            </div>
        </div>
    )
}

export default Input3