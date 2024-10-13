import { MdAttachFile } from "react-icons/md"

const MsgInput = () => {
    return (
        <div className="absolute bottom-0 right-0 w-full h-[110px] border-t border-gray-200 px-4 py-2" >
            <div className="flex gap-4 items-center justify-between">
                <input type="text" className="shadow-md rounded-md w-[85%] py-3 px-4 text-sm outline-none border border-gray-50 focus:border-gray-200 placeholder:text-slate-300"
                    placeholder="Type your text here..." />
                <input type="file" name="file" id="file" hidden />
                <label htmlFor="file" className="border block h-full cursor-pointer px-2 rounded-md hover:bg-slate-100">
                    <MdAttachFile size={22} className="h-full py-3" />
                </label>
                <button className="border bg-[#cbd5e0] font-semibold text-gray-600 py-3 px-8 rounded-md hover:bg-gray-200">Send</button>
            </div>

            <div className="flex gap-4 items-center justify-between mt-4 text-slate-400 font-semibold ">
                <span className="text-sm">0/8000</span>
                <p className="text-xs">Your AI Assistant may not always produce the correct information. Your conversations are not saved in the cloud.</p>
            </div>
        </div>
    )
}

export default MsgInput