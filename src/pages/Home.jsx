import Main from "../components/Main"
import Sidebar from "../components/Sidebar"

const Home = () => {
    return (
        <div className="flex w-full h-screen bg-[#f7fafc]">
            <Sidebar />
            <Main />
        </div>
    )
}

export default Home