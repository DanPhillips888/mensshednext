import Image from 'next/image'

export default function Sponsors() {
    return (
    <>
    <h1 id="title">Sponsors of the Shed</h1>
        <div className="center">
          <Image
            src="/images/mensShedSponsors-1.jpg"
            alt="sponsor1"
            height={400}
            width={600}
          />
        </div>
    </>)
  }
  