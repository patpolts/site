import Image from 'next/image'
import profilePicture from '../../public/imgs/me.jpg'

export function Header() {
    return (
        <header tabIndex={0} className='z-1'>
            <div className='cotainer w-full '>
                <div className="grid grid-cols-1 grid-rows-1 gap-4 auto-cols-auto">
                    <div className='flex flex-row flex-nowrap col-span-2' style={{ alignContent: 'space-around', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <figure className='overflow-hidden w-20 h-20' tabIndex={1} title="Pati Poltts - Fullstack freelancer.">
                            <a href='https://github.com/patpolts' target='_blank'>
                                <Image className='rounded-full w-full h-full' src={profilePicture} alt="Foto Perfil" title="Clique para acessar meu github" />
                            </a>
                        </figure>
                        <hgroup tabIndex={2}>
                            <h1>Pati Poltts</h1>
                            <h2>Fullstack Developer</h2>
                        </hgroup>
                    </div>

                </div>
            </div>
        </header>
    )
}