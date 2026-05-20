import Me from './layout/Me';
import Projects from './layout/Projects';
import School from './layout/School';
import Technologies from './layout/Technologies';
import Work from './layout/Work';
import './App.css';

function App() {
    return (
        <main className='min-h-screen flex flex-col items-center bg-slate-950 text-white'>
            <div className='flex flex-col gap-16 py-8 w-full px-4 max-w-[732px]'>
                <Me />
                <Work />
                <Technologies />
                <Projects />
                <School />
            </div>
        </main>
    );
}

export default App;
