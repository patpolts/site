import Image from 'next/image'
import profilePicture from '../../public/imgs/me.jpg'
import { IconGithub, IconInstagram, IconLinkedin } from './Icons'


export function Header() {
    return (
        <header >
            <div className='cotainer w-full '>
                <div className="grid grid-cols-3 grid-rows-1 gap-4 auto-cols-auto">
                    <div className='flex flex-row flex-nowrap ' style={{ alignContent: 'space-around', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <figure className='overflow-hidden w-20 h-20' tabIndex={1} title="Pati Poltts - Fullstack freelancer.">
                            <a href='https://github.com/patpolts/site' target='_blank'>
                                <Image className='rounded-full w-full h-full' src={profilePicture} alt="Foto Perfil" title="Clique para ver este projeto no github" />
                            </a>
                        </figure>
                        <hgroup tabIndex={2}>
                            <h1>Pati Poltts</h1>
                            <h2>Fullstack Developer</h2>
                        </hgroup>
                    </div>
                    <div className='col-span-2  icons'>
                        <div className='flex flex-row-reverse'>
                            <IconInstagram fill='rgba(199, 224, 196, 0.794)' />
                            <IconLinkedin fill='rgba(199, 224, 196, 0.794)' />
                            <IconGithub fill='rgba(199, 224, 196, 0.794)' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}