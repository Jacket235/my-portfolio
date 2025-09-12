export default function Technologies() {
    const technos = [
        ["HTML", "html.png"], 
        ["CSS", "css.png"],
        ["Bootstrap", "bootstrap.png"],
        ["Tailwind", "tailwind.png"], 
        ["JavaScript", "javascript.png"],
        ["TypeScript", "typescript.png"],
        ["React", "react.png"],
        ["Node", "node.png"],
        ["Java", "java.png"],
        ["Lua", "lua.png"],
        ["SQL", "sql.png"],
        ["GitHub", "github.png"],
        ["Photoshop", "photoshop.png"],
    ];

    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Umiejętności</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-wrap gap-3'>
                {technos.map((techno, i) => (
                    <div key={i} className='flex items-center  rounded-full py-2 px-4 gap-2 border-2 border-zinc-900'>
                        <span className='flex items-center justify-center w-8 h-8'>
                            <img src={techno[1]}/>
                        </span>
                        {techno[0]}
                    </div>
                ))}
            </div>
        </div>
    );
}