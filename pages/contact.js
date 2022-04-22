import Image from 'next/image'

export default function Contact() {
    return (
        <>
          <div className='container'>
            <h1 id="title">Contacts Page</h1>
            <div className="center">
              <h5>Email and Phone Info for ordering and participation</h5><br/>
              <Image 
                  className = "logo"
                  src="/images/shedLogo.jpeg"
                  height={120}
                  width={344}
                  alt="Logo"          
                />
              <h3 className="email">mandurahmshed@gmail.com</h3>
              <h2>Located at John Tonkin College</h2>
              <h3>35 Gibla street, Mandurah</h3>
              <h3 id="alert">Attendance by appointment only</h3>
              <h3>Shed hours: 9:30am to 1 pm Tues, Wed, Thurs</h3>
              <h3>Shed Phone: 0493 147 329</h3>
              <h5>Alan Lewis - Chariman: 0411 036 922</h5>
              <h5>Kevin Atkins - Treasurer: 0411 330 421</h5>
              <h5>Trevor Howard - Secretary: 0412 797 281</h5>
              <h3>Facebook: Mandurah Mens Shed</h3>
              <h3>Mail: PO Box 4104 North Mandurah 6210</h3>
              <h4>ABN: 51 259 851 181</h4>
            </div>
          </div>
      </>
    )
  }