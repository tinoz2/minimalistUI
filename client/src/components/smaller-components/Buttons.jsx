import Button1 from "../buttons/Button1"
import Button2 from "../buttons/Button2"
import Button3 from "../buttons/Button3"
import Button4 from "../buttons/Button4"
import Button5 from "../buttons/Button5"
import Button6 from "../buttons/Button6"
import Button7 from "../buttons/Button7"
import Button8 from "../buttons/Button8"
import { Tooltip } from 'keep-react'
import useClipboard from '../../hooks/useClipboard.jsx'

const Buttons = () => {

    const { copyToClipboard } = useClipboard()

    return (
        <div id="buttons">
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-3xl font-semibold dark:text-white">Buttons</h2>
                <hr className="w-1/2 mx-4 h-full border-gray-500 my-4" />
            </div>
            <div className="grid grid-cols-2 space-x-4 space-y-6 sm:grid-cols-4">
                <div className="p-24 bg-main flex justify-center items-center rounded-sm ml-4 mt-6 relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button1').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2 active:scale-110">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button1 id="button1" />
                </div>
                <div className="p-24 bg-main flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button2').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button2 id="button2" />
                </div>
                <div className="p-24 bg-main flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button3').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button3 id="button3" />
                </div>
                <div className="p-24 bg-main flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button4').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button4 id="button4" />
                </div>
                <div className="p-24 bg-main  flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button5').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button5 id="button5" />
                </div>
                <div className="p-24 bg-main  flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button6').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button6 id="button6" />
                </div>
                <div className="p-24 bg-main  flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button7').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button7 id="button7" />
                </div>
                <div className="p-24 bg-main  flex justify-center items-center rounded-sm relative">
                    <div onClick={() => copyToClipboard(document.getElementById('button8').outerHTML)}
                        className="absolute cursor-pointer top-1 right-1 p-2">
                        <Tooltip
                            content="Copied"
                            trigger="click"
                            placement="left"
                            animation="duration-300"
                            style="dark"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                        </Tooltip>
                    </div>
                    <Button8 id="button8" />
                </div>
            </div>
        </div>
    )
}

export default Buttons