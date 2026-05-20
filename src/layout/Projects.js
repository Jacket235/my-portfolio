import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { projects } from '../constants/projects.constants';

export default function Projects() {
    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Projekty</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-col'>
                {projects.map((project, i) => (
                    <div key={i} className='relative flex flex-col group'>
                        <div className='w-full'>
                            <a href={project.web} rel="noreferrer" target='_blank' className='hover:underline'>
                                {project.name}
                            </a>
                        </div>
                        <div className='w-full my-2 text-gray-400'>
                            {project.subtitle}
                        </div>
                        <div className='flex justify-end gap-2 opacity-[0.5] group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                            {project.github && (
                                <a href={project.github} rel="noreferrer" target='_blank'>
                                    <GitHubIcon />
                                </a>
                            )}
                            <a href={project.web} rel="noreferrer" target='_blank'>
                                <LanguageIcon />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}