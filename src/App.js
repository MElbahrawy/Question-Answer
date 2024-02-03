import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {React, useState} from "react";
import {Container,Row,Col} from "react-bootstrap"
import Header from "./components/header";
import FormInput from "./components/formInput";
import QAList from "./components/QAList";
import {data} from "./data"
import "./App.css"
  
export default function App() {
    const [questions,setQuestions] = useState(data)
    const localData = JSON.parse(localStorage.getItem("data"))

    const addQuestion = () => {
        localStorage.setItem("data",JSON.stringify([...data]))
        setQuestions([...data])
        notify("تم الاضافه بنجاح", "success")
    }

    const clearQuestions = () => {
        localStorage.removeItem("data")
        data.splice(0,data.length)
        setQuestions([])
        notify("تم محو البيانات بنجاح", "success")
    }

    const deleteQuestion = (question) => {
        localStorage.setItem("data",JSON.stringify([...question]))
        setQuestions([...question])
        if (question.length === 0) clearQuestions()
        notify("تم إزالة السؤال بنجاح", "success")
    }

    const notify = (message,type) => {if (type === "error") {
        toast.error(message);
    } else {
        toast.success(message);
    }}

    return <div className="font text-center color-body">
        <Container className="p-5">
            <Row className="justify-content-center">
                <Col sm="4">
                    <Header/>
                </Col>
                <Col sm="8">
                    <FormInput onAdd={addQuestion} notify={notify} />
                    <QAList questions={questions} deleteQuestion={deleteQuestion} />
                    {localStorage.getItem("data")? <button className="btn-color w-100" onClick={clearQuestions}>مسح الكل</button> : null}
                </Col>
            </Row>
        </Container>
        <ToastContainer rtl autoClose={2000}/>
    </div>;
}
