import React from 'react'
import {Accordion,Container,Row,Col,Form,Button} from "react-bootstrap"
import {data} from "../data"

export default function QAList({questions,deleteQuestion}) {

    const localData = JSON.parse(localStorage.getItem("data"))
   const onDelete = (id) => {
    let index = data.findIndex((q) => q.id === id)
    data.splice(index,1)
    deleteQuestion(data)
   }

    return (
      <Row className='my-3'>
        {localStorage.getItem("data")?
        localData.map((question) => <Accordion key={question.id}>
        <Accordion.Item eventKey='0'>
            <Accordion.Header>
                <div className='mx-2'>{question.q}</div>
            </Accordion.Header>
            <Accordion.Body className='text-end justify-content-between d-flex align-items-center'>
                <div className='px-3 d-inline'>{question.a}</div>
                <button onClick={() => {onDelete(question.id)}} className='btn-color'>مسح</button>
                </Accordion.Body>
        </Accordion.Item>
      </Accordion>)
      : <h3 className='fs-4 text-center p-5'>لا يوجد أسئله</h3> }
      
    </Row>
  )
}
