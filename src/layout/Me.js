import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Me() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex w-full justify-between h-10'>
                <div className='flex items-center gap-3'>
                    <span className='h-10 w-10 overflow-hidden rounded-full bg-white'>
                        <img className="h-full w-full object-cover object-center" src={process.env.PUBLIC_URL + '/me.jpg'} alt="me" />
                    </span>
                    <span className='flex flex-col'>
                        <span className='text-base'>Sebastian Mastalerz</span>
                        <span className='text-sm text-gray-400'>WEB DEVELOPER</span>
                    </span>
                </div>
                <div className='flex items-center gap-2'>
                    <a href='https://github.com/Jacket235' title='GitHub' target='_blank' rel="noreferrer">
                        <GitHubIcon sx={{ fontSize: 32 }} />
                    </a>
                    <a href='CV Sebastian Mastalerz.pdf' title='CV' download>
                        <ContactPageIcon sx={{ fontSize: 32 }} />
                    </a>
                    <a href='https://instagram.com/masti_235' title='Instagram' target='_blank' rel="noreferrer">
                        <InstagramIcon sx={{ fontSize: 32 }} />
                    </a>
                </div>
            </div>
            <div>
                <span className='text-base text-gray-400'>
                    Web Developer z doświadczeniem komercyjnym w tworzeniu aplikacji internetowych, specjalizujący się w frontendzie oraz w backendzie.
                </span>
            </div>
        </div>
    );
}