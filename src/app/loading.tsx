import Image from 'next/image'

export default function Loading() {
    return (
    //   <div>
        <Image
            src="/imgs/loading.gif"
            width={300}
            height={300}
            className='object-center'
            alt="Imagem carregando conteudo"
            />
    //   </div>
    )
  }
  