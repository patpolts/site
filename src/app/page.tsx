import { Video } from '@/components/Video'


export default function Home() {
  return (
    <main>
      <Video />
      <p title="Site em desenvolvimento" className="maintenance-mode" tabIndex={3} >site em desenvolvimento</p>
    </main>
  )
}
