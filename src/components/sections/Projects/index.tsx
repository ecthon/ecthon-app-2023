import Image from "next/image";

export function Projects() {
    return (
        <section className="flex flex-col gap-y-8 w-3/5 max-sm:w-4/5 mx-auto">
            <div className="flex flex-wrap w-full h-auto gap-8">    
                <div className="button border-effect flex w-96 max-sm:w-100% h-96 bg-slate-400 rounded-2xl overflow-hidden">
                    <Image width={700} height={700} src="/todo-capa-png.png" alt="Capa do projeto todo list" />
                </div>
                <div className="flex flex-1 min-w-96 h-96 bg-slate-700 rounded-2xl"></div>
            </div>
            <div className="flex w-full h-96 rounded-2xl bg-purple-600"></div>
        </section>
    )
}