import {Card, CardImg, Row, Col} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const PostCard = (props) => {
       const post = props.post;
       let nav = useNavigate()
       
      const  navigate= (slug) =>{
         nav(`/post/${slug}`)
       }
       
    return <Card onClick={() => navigate(post.uid)}>
             <CardImg src='https://th.bing.com/th/id/OIP.J3nkfm9Ux8Mf0LsRxuiuoQHaE8?pid=ImgDet&rs=1' />
             <div className='p-3'>
             <h2 className='text-dark' style={{fontSize: '16px'}}  >{post.label} </h2>
             <span className='text-muted'>{post.address}</span>
             <Row className='mt-2'>
                <Col>
                    <span className='text-dark' style={{fontSize: '12px', fontWeight: 'bold'}} >{post.price}</span>
                </Col>
                <Col>
                   <span className='muted' style={{fontSize:'12px'}}>12h: 20</span>
                </Col>

             </Row>
             </div>
           </Card>
}

export default PostCard;