import { Video } from '../components/Video'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Video />
      <p title="Site em desenvolvimento" className="maintenance-mode" tabIndex={3} >site em desenvolvimento</p>
    </main>
  )
}
