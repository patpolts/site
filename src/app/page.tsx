import { Video } from '@/components/Video'
import { Suspense } from 'react'
import Loading from './loading'


export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Video />
      </Suspense>
      <p title="Site em desenvolvimento" className="maintenance-mode" tabIndex={6} >site em desenvolvimento</p>
    </main>
  )
}
