export default function School() {
    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Edukacja</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-col gap-4'>
                <div className='relative flex flex-col'>
                    <div className='flex justify-between gap-4 mb-2'>
                        <div className='flex flex-col'>
                            <span>Szkoła Główna Gospodarstwa Wiejskiego w Warszawie</span>
                            <span className='text-sm text-gray-400 uppercase'>Wykształcenie wyższe - inżynier informatyk</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-400'>paź. 2025 - obecnie</span>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col'>
                    <div className='flex justify-between gap-4 mb-2'>
                        <div className='flex flex-col'>
                            <span>Technikum w Grójcu</span>
                            <span className='text-sm text-gray-400 uppercase'>Wykształcenie średnie - technik programista</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-400'>wrz. 2020 - kwi. 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}