import { Badge } from 'keep-react'
import Arrow from './Arrow.jsx'

const Home = () => {

    return (
        <div className="flex justify-center flex-col items-center text-center m-auto" style={{ height: 'calc(100vh - 300px)' }}>
            <div>
                <Badge variant="border" color="primary" className='cursor-default'>Design UX/UI</Badge>
            </div>
            <div className='my-2'>
                <h1 className="font-extrabold text-5xl dark:text-white">Hi, we are <span className="text-gradient">minimalistUI</span></h1>
            </div>
            <div>
                <small className="font-semibold text-base dark:text-white">“ Elevate your UI with Effortless Simplicity ”</small>
            </div>
            <Arrow />
        </div>
    )
}

export default Home