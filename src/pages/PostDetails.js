import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-carousel-minimal';


const PostDetails = (props) => {
  const data = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx',
      caption: 'San Francisco',
    },
    {
      image:
        'https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg',
      caption: 'Darjeeling',
    },
  ]
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <Container fluid className="p-0">
      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '0 20px',
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: 'center',
                maxWidth: '850px',
                maxHeight: '500px',
                margin: '40px auto',
              }}
            />
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h2 className="text-dark" style={{ fontSize: '16px' }}>
          {' '}
          Post Label
        </h2>
        <span className="text-muted">Adresse</span>
        <Row className="mt-2">
          <Col xs="9">
            <span
              className="text-dark"
              style={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              12 000
            </span>
          </Col>
          <Col xs="3">
            <span className="muted" style={{ fontSize: '12px' }}>
              12h: 20
            </span>
          </Col>
        </Row>
        <div className='mt-3'>
            <p>
                description
            </p>
        </div>

        <div className='mt-3'>
            <p>
                <span>Publié par: </span>  <span>Ousmane seck</span>
            </p>
        </div>
        <div className='mt-3'>
           
        </div>
      </div>
    </Container>
  )
}

export default PostDetails
