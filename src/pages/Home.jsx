import Main from "../components/main"
import Sidebar from "../components/Sidebar"

const Home = () => {
    return (
        <div className="flex w-full h-screen">
            <Sidebar />
            <Main />
        </div>
    )
}

export default Home