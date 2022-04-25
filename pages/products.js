import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
    return (
    <>
     <div id="heading">
       <h2> Welcome to the Toy Shop </h2>
     <h3>Wooden Toys Available for purchase</h3>
        <p>The potential is limitless... But heres a taste of what we have at the moment.</p>
    </div>
      <main className="content">
        <div className="card text-white bg-primary mb-3">
            <div className="card-header">Toy Cars</div>
            <div className="card-body">
              <h5 className="card-title">Classic Wooden Toys</h5>
              <Image src="/images/car1.jpeg"
                alt="item1"
                height={300}
                width={300}
              />
              <p className="card-text">Check out our range of beautiful classic cars made from recycled wood</p>
              <Link href="/cars" className="btn btn-primary"><a>Shop for Toy Cars</a></Link>
            </div>
        </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Rockers</div>
            <div className="card-body">
              <h5 className="card-title">Classic Rocking Ride On Toys</h5>
              <Image 
                src="/images/rockingRoo.jpeg"
                alt="item2"
                height={300}
                width={300}
              />
              <p className="card-text">Unique Rocking Roo made with love and recycled timber</p>
              <Link href="/rockers" className="btn btn-primary"><a>Shop Rocking toys</a></Link>
            </div>
          </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Doll Houses</div>
            <div className="card-body">
              <h5 className="card-title">Classic Doll House</h5>
              <Image 
                src="/images/dollhouse.jpeg"
                alt="item3"
                height={300}
                width={300}
              />
              <p className="card-text">The most magnificent miniature doll houses will stand the test of time</p>
              <Link href="#" className="btn btn-primary"><a>Shop Doll Houses</a></Link>
            </div>
            </div>
            <div className="card text-white bg-primary mb-3">
            <div className="card-header">Puzzles</div>
            <div className="card-body">
              <h5 className="card-title">Block-Shift and Jigsaw Puzzles</h5>
              <Image 
                src="/images/blockPuzzle.jpeg"
                alt="item4"
                height={300}
                width={300}
              />
              <p className="card-text">The most challenging puzzles that are timeless and much better than playing on your phone...</p>
              <Link href="#" className="btn btn-primary"><a>Shop Puzzles</a></Link>
            </div>
          </div>
            <div className="card text-white bg-primary mb-3">
            <div className="card-header">Furniture</div>
            <div className="card-body">
              <h5 className="card-title">A variety of different quality, handmade pieces for any home</h5>
              <Image 
                src="/images/furniture.jpeg"
                alt="item5"
                height={300}
                width={300}
              />
              <p className="card-text">Check out all the beautiful, clean, green wooden furniture these guys are making</p>
                <Link href="#" className="btn btn-primary"><a>Shop Furniture</a></Link>
            </div>
          </div>
      </main>
    </>
    )
  }
  