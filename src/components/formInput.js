import React ,{useState} from 'react'
import {Row,Col,Form} from "react-bootstrap"
import {data} from "../data"


export default function FormInput({onAdd,notify}) {
    const [q, setQ] = useState("") 
    const [a, setA] = useState("")

    const addNewQuestion = () => {
        if (q==="" || a==="") {
            notify("يرجي ادخال السؤال و الاجابة","error")
        }else {
            data.push({id:Math.random(),q:q,a:a})
        setQ("")
        setA("")
        onAdd()
        }
        
    }
  return (
    <Row>
        <Col sm="5">
      <Form.Control value={q} onChange={(e)=>setQ(e.target.value)} type='text' placeholder='ادخل السؤال' /></Col>
        <Col sm="5">
      <Form.Control value={a} onChange={(e)=>setA(e.target.value)} type='text' placeholder='ادخل الاجابة' /></Col>
      <Col sm="2">
      <button onClick={addNewQuestion} className="btn-color w-100" type='submit'>أضافه</button></Col>
    </Row>
  )
}
