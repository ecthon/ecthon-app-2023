export function UIGuide() {
    return (
        <div className="flex w-3/5 h-auto mx-auto rounded-2xl mt-8">
            <div className="flex w-full mb:flex-col items-center justify-between gap-x-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col h-48 gap-8 p-8 rounded-xl">
                        <p className="font-bold text-gray-900 text-9xl md:text-8xl">Style Guide</p>
                        <div className="flex gap-4">
                            <span className="text-zinc-400 bg-slate-100 rounded-full px-4 py-1">#typhography</span>
                            <span className="text-zinc-400 bg-slate-100 rounded-full px-4 py-1">#colors</span>
                            <span className="text-zinc-400 bg-slate-100 rounded-full px-4 py-1">#icons</span>
                            <span className="text-zinc-400 bg-slate-100 rounded-full px-4 py-1">#...</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-50% bg-gray-300 p-8 rounded-xl divide-y divide-dashed">
                        <p className="flex text-gray-900 font-bold">Typograph</p>
                        <p className="flex text-gray-900 text-7xl font-bold">Aa</p>
                        <p className="flex text-lg text-zinc-400">Poppins</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 flex-1">
                    <div className="flex flex-col h-48 p-8 justify-center bg-violet-800 rounded-xl">
                        <p className="text-2xl font-medium text-white">Violet</p> 
                        <p className="text-violet-400">#5B21B6</p>
                    </div>
                    <div className="flex flex-col h-48 p-8 justify-center bg-emerald-500 rounded-xl">
                        <p className="text-2xl font-medium text-white">Emerald</p> 
                        <p className="text-emerald-200">#10B981</p>
                    </div>
                </div>
            </div>
        </div>
    )
}