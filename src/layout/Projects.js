import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function Projects() {
    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Projekty</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-col'>
                <div className='relative flex flex-col group'>
                    <div className='w-full mb-2'>
                        Klon Reddita
                    </div>
                    <div className='w-full text-gray-400'>
                        Rekreacja popularnej strony Reddit.
                    </div>
                    <div className='flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                        <a href='https://github.com/Jacket235/reddit' target='_blank'>
                            <GitHubIcon />
                        </a>
                        <a href='https://jacket235.github.io/reddit/' target='_blank'>
                            <LanguageIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}