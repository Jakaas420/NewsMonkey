import React  from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const  NewsItem = (props) => {



    let {Title,Description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
       <Card style={{ width: "" }}>
       <span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger' style={{left:"50%",zIndex:"1"}}>{source}</span>
      <Card.Img variant="top" src={!imageUrl?"https://static.toiimg.com/thumb/msid-110463471,width-1070,height-580,imgsize-17496,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl}/>
      <Card.Body>
        <Card.Title>{Title} </Card.Title>
        <Card.Text> {Description}</Card.Text>
        <Card.Text>By {!author?"Unknown":author} On {new Date(date).toGMTString()}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href={newsUrl} target='_blank' variant="primary" >Read More</Button>
      </Card.Body>
    </Card>
      </div>
    )
  
}

export default NewsItem



