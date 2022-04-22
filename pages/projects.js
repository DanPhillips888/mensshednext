import Image from 'next/image'

export default function Projects() {
    return (
        <>
      <h1>Projects Page</h1>
      <h5>Showcasing available tools and activities</h5>
      <h2>Coming Soon...</h2>
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
  