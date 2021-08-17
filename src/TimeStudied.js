import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
const TimeStudied = () => {
  const [time, setTime] = useState('');
  const submitHandler = (e) => {
    e.preventDefault(); 
    setTime(''); 
  };
  return (
    <Row>
      <Col md={6} className="m-5">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Add Todays Total Study Hour</Form.Label>
            <Form.Control
              type="number"
              placeholder="Example: 6.5h"
              value={time}
              onChange={(e)=> setTime(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default TimeStudied;
