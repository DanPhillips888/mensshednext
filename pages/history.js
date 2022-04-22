import Image from 'next/image'

export default function History() {
    return (
    <>
      <h1>History of the Shed</h1>

      <h1>Coming Soon...</h1>

      <div className="center">
        <Image
          src="/images/shedLogo.jpeg"
          // layout="fill"
          height={120}
          width={344}
          alt="Logo"          
        />
      </div>
    </>
    )
  }
  