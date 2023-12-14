import { Video } from '@/components/Video'
import Image from 'next/image'


export default function Home() {
  return (
    <main tabIndex={3}>
      <Video tabIndex={4} />
      <p title="maintenance mode" className="maintenance-mode">site em desenvolvimento</p>
    </main>
  )
}
