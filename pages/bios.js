import Image from 'next/image'

export default function BioPage() {
    return (
    <>
     <div id="heading">
      <h3>Meet the Men behind the work</h3>
        <p>These guys are the real deal. Hard working, generous, charitable guys getting it done.</p>
    </div>
      <main className="content">
        <div className="card text-white bg-primary mb-3">
            <div className="card-header">Woodsmith</div>
            <div className="card-body">
              <h5 className="card-title">Kevin Manning</h5>
              <Image src="/images/ronHowhard.jpeg"
                alt="player1"
                height={300}
                width={300}
              />
              <p className="card-text">Hes the man that can get it done. You name it, he builds it</p>
            </div>
        </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Turner</div>
            <div className="card-body">
              <h5 className="card-title">Paul Ellis</h5>
              <Image
                alt="player2"
                src="/images/working2.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">If it spins, this is your man. making smooth curvy things since 1956</p>
            </div>
          </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Cutter</div>
            <div className="card-body">
              <h5 className="card-title">Syd Ness</h5>
              <Image
                alt="player3"
                src="/images/borisTheBlade.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">He slices, he dices, he can cut anything you think you want made shorter</p>
            </div>
          </div>
      </main>
    </>
    )
  }
  