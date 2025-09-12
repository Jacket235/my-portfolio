export default function Work() {
    return (
        <div className='flex flex-col'>
            <h2 className='text-lg'>Praca</h2>
            <hr className='my-3 border-0 h-px bg-[#26282a]'></hr>
            <div className='flex flex-col gap-4'>
                <div className='relative flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col mb-2'>
                            <span>LUA Developer</span>
                            <span className='text-sm text-gray-400'>Freelance</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-400'>paź. 2023 - gru. 2024</span>
                        </div>
                    </div>
                    <div className='w-full text-gray-400'>
                        Tworzyłem najróżniejszye skrypty na serwery dla zleceniodawców oraz na cele własnych projektów. Szczególny nacisk moja praca miała na interfejs i doświadczenie użytkownika.
                    </div>
                </div>
                <div className='relative flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col mb-2'>
                            <span>Faurecia Automotive Polska S.A</span>
                            <span className='text-sm text-gray-400'>Praktykant</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-400'>lis. 2022 - gru. 2022</span>
                        </div>
                    </div>
                    <div className='w-full text-gray-400'>
                        Uczyłem się konfiguracji i obsługi serwerów, a równocześnie tworzyłem aplikacje desktopowe, które przyśpieszały wykonywanie zadań pracowników.
                    </div>
                </div>
            </div>
        </div>
    );
}