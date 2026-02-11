import { work } from "../constants/work.constants";

export default function Work() {
    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Doświadczenie</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-col gap-4'>
                {work.map((work, i) => (
                    <div key={i} className='relative flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col mb-2'>
                                <span>
                                    {work.title}
                                </span>
                                <span className='text-sm text-gray-400'>
                                    {work.subtitle}
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-gray-400'>
                                    {work.startDate} - {work.endDate}
                                </span>
                            </div>
                        </div>
                        <div className='w-full text-gray-400'>
                            {work.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}