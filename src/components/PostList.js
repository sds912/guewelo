import {Container, Row, Col} from 'react-bootstrap';
import PostCard from './PostCard';


const PostList = () => {

    const posts = [
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '12'
        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '13'

        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '14'

        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '15'

        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '16'

        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '17'

        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '18'

        },
        {
            label: 'Apartement 2 chambre salon',
            price: '120 000',
            address: 'Dakar pikine',
            uid: '19'

        },
    ];

    return <Container fluid={true} className="px-0 mb-2 mt-4">
            <Row>
                {posts.map(p => 
                <Col xs="6" className="mt-3" key={p.uid}>
                <PostCard post={p} />
                </Col>)}
            </Row>
           </Container>
}

export default PostList;