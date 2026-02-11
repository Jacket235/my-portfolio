import { technologies } from "../constants/technologies.constants";

export default function Technologies() {
    const URL = process.env.PUBLIC_URL

    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Umiejętności</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-wrap gap-3'>
                {technologies.map((tech, i) => (
                    <div key={i} className='flex items-center  rounded-full py-2 px-4 gap-2 border-2 border-zinc-900'>
                        <span className='flex items-center justify-center w-8 h-8'>
                            <img src={URL + tech[1]} alt=''/>
                        </span>
                        {tech[0]}
                    </div>
                ))}
            </div>
        </div>
    );
}