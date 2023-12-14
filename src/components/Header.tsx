import Image from 'next/image'

export function Header() {
    return (
        <header tabIndex={0} className='z-1'>
            <div className='cotainer w-full'>
                <div className="grid grid-cols-5 grid-rows-1 gap-4 auto-cols-auto">
                    <div className='flex flex-row flex-nowrap'>
                        <figure className='overflow-hidden w-16 h-16 ' tabIndex={1} title="Patricia Poltts - Fullstack freelancer.">
                            <Image className='rounded-full w-full h-full' src="/imgs/me.jpg" width={100} height={100} priority alt="Foto Perfil" title="Foto de Perfil" />
                        </figure>
                        <hgroup tabIndex={2}>
                            <h1>Pati Poltts</h1>
                            <h2>Fullstack Developer</h2>
                        </hgroup>
                    </div>
                    <div className='col-span-4'>
                        nav
                    </div>

                </div>
            </div>
        </header>
    )
}