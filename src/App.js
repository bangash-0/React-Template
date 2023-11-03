import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {data} from './const/data';

function App() {
    const list = data;
  return(
      <div className='row'>
          {
              list.map((item) => (
                  <Card style={{ width: '18rem' }} className="m-2">
                      <Card.Img variant="top" src="https://picsum.photos/200" />
                      <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                              {item.description}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                  </Card>
              ))
          }
      </div>

  );

}

export default App;
