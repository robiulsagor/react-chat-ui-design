import { useState } from "react"

const Sidebar = () => {
    const [active, setActive] = useState(1)

    return (
        <div className="border-r border-gray-200 w-[380px] px-10 py-5">
            {/* top */}
            <div className="bg-[#ebf2fa] text-slate-600 flex justify-between gap-1 text-sm font-semibold rounded-lg overflow-hidden relative">
                <div className={`absolute bg-gray-800 transition-all duration-300 ease-in-out rounded-lg`}
                    style={{
                        left: active === 0 ? '0%' : '50%',
                        width: "50%",
                        height: "100%",
                        top: 0,

                    }}></div>

                <button className={`flex-1 z-10 py-1.5 rounded-lg transition duration-300 ${active === 0 ? ' text-slate-300' : 'hover:bg-gray-200'}`}
                    onClick={() => setActive(0)}>
                    Configurations
                </button>
                <button className={`flex-1 z-10 py-1.5  rounded-lg transition duration-300 ${active === 1 ? ' text-slate-300' : 'hover:bg-gray-200'}`}
                    onClick={() => setActive(1)}>
                    Saved Chats
                </button>

            </div>

            <div className="mt-8">

                <label htmlFor="model" className="block mb-2 text-gray-400 font-semibold">AI Model</label>
                <select id="model" name="model" className="border bg-[#ebf2fa] w-full p-2 pr-4 text-sm rounded-md text-gray-400 outline-none">
                    <option value="model1">Default</option>
                    <option value="model2">Model 2</option>
                </select>
            </div>
        </div>
    )
}

export default Sidebar