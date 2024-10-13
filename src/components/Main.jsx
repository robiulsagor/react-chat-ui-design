import MsgInput from "./MsgInput"
import MsgList from "./MsgList"
import Navbar from "./Navbar"

const Main = () => {
    return (
        <div className="w-full relative ">
            <Navbar />
            <MsgList />
            <MsgInput />
        </div>
    )
}

export default Main