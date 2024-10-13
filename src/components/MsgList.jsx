const MsgList = () => {
    return (
        <div className="border absolute top-[75px] h-[calc(100vh-185px)] left-0 right-0 w-full overflow-y-scroll">
            <div className="flex flex-col gap-5 py-6 px-4">

                <div className="flex items-center justify-center "><p className="text-xs px-2 py-1.5 bg-[#bfc2c8] text-slate-100 font-semibold rounded-md">Your AI Assistant may not always produce the correct information. Your conversations are not saved in the cloud.</p></div>

                <div className="msg-container sent">
                    <div className="mb-2 text-center flex flex-col gap-[2px]">
                        <h2 className="font-bold text-sm">Michel Johnson</h2>
                        <span className="text-xs text-slate-700">Today, 11:10</span>
                    </div>
                    <p className="text-sm text-justify font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores labore perferendis amet porro quod nesciunt, assumenda debitis earum laudantium?</p>
                </div>

                <div className="msg-container received">
                    <div className="mb-2 text-center flex flex-col gap-[2px]">
                        <h2 className="font-bold text-sm text-gray-600">AI Assistant</h2>
                        <span className="text-xs text-slate-700">Today, 11:12</span>
                    </div>
                    <p className="text-sm text-justify font-semibold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores labore perferendis amet porro quod nesciunt, assumenda debitis earum laudantium? <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iusto itaque! Consequatur esse, natus eaque minus et, provident, blanditiis doloremque expedita voluptates totam vitae reprehenderit quis! Incidunt!</p>
                </div>

                <div className="msg-container sent">
                    <div className="mb-2 text-center flex flex-col gap-[2px]">
                        <h2 className="font-bold text-sm">Michel Johnson</h2>
                        <span className="text-xs text-slate-700">Today, 11:10</span>
                    </div>
                    <p className="text-sm text-justify font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores labore perferendis amet porro quod nesciunt, assumenda debitis earum laudantium?</p>
                </div>

                <div className="msg-container received">
                    <div className="mb-2 text-center flex flex-col gap-[2px]">
                        <h2 className="font-bold text-sm text-gray-600">AI Assistant</h2>
                        <span className="text-xs text-slate-700">Today, 11:12</span>
                    </div>
                    <p className="text-sm text-justify font-semibold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores labore perferendis amet porro quod nesciunt, assumenda debitis earum laudantium? <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iusto itaque! Consequatur esse, natus eaque minus et, provident, blanditiis doloremque expedita voluptates totam vitae reprehenderit quis! Incidunt!</p>
                </div>

                <div className="msg-container sent">
                    <div className="mb-2 text-center flex flex-col gap-[2px]">
                        <h2 className="font-bold text-sm">Michel Johnson</h2>
                        <span className="text-xs text-slate-700">Today, 11:10</span>
                    </div>
                    <p className="text-sm text-justify font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores labore perferendis amet porro quod nesciunt, assumenda debitis earum laudantium?</p>
                </div>

                <div className="msg-container received">
                    <div className="mb-2 text-center flex flex-col gap-[2px]">
                        <h2 className="font-bold text-sm text-gray-600">AI Assistant</h2>
                        <span className="text-xs text-slate-700">Today, 11:12</span>
                    </div>
                    <p className="text-sm text-justify font-semibold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores labore perferendis amet porro quod nesciunt, assumenda debitis earum laudantium? <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iusto itaque! Consequatur esse, natus eaque minus et, provident, blanditiis doloremque expedita voluptates totam vitae reprehenderit quis! Incidunt!</p>
                </div>
            </div>
        </div>
    )
}

export default MsgList

