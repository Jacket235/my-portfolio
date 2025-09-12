import './App.css';
import Me from './layout/Me';
import Projects from './layout/Projects';
import School from './layout/School';
import Technologies from './layout/Technologies';
import Work from './layout/Work';

function App() {
    return (
        <main className='min-h-screen flex flex-col items-center bg-slate-950 text-white'>
            <div className='flex flex-col gap-16 py-8 w-full max-w-[732px]'>
                <Me />
                <Technologies />
                <Projects />
                <Work />
                <School />
            </div>
        </main>
    );
}

export default App;
