import { IoIosArrowDown } from "react-icons/io"
import { IoShareSocialOutline } from "react-icons/io5"
import { MdOutlineCloudUpload } from "react-icons/md"

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 w-[100%] h-[75px]">
            <div className="flex items-center justify-between py-4 px-4 text-gray-600">
                <h2 className="font-bold ">Chat: Staff &amp; AI Assistant </h2>
                <div className="text-sm font-semibold flex">
                    <button className="shadow-md mr-3 py-2 px-3 rounded-md border border-slate-100 flex gap-2 items-center hover:bg-slate-100">
                        <MdOutlineCloudUpload />
                        <span>
                            Save
                        </span>
                    </button>
                    <button className="shadow-md mr-3 py-2 px-3 rounded-md border border-slate-100 flex gap-2 items-center hover:bg-slate-100">
                        <IoShareSocialOutline />
                        <span>Share</span>
                        <IoIosArrowDown />
                    </button>
                    <button className="text-slate-100 bg-blue-600 py-2 px-3 rounded-md hover:bg-transparent hover:text-gray-500 border hover:border-gray-200 transition">New Chat</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar