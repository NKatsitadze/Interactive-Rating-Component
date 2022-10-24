import './App.css'
import styled from 'styled-components'
import SubmitSide from './components/SubmitSide'
import ThankYouSide from './components/ThankYouSide'
import { useState } from 'react'


export default function App() {
    const [number, setNumber] = useState(null);
    const [show, setShow] = useState(false);
    
    return (  <MotherBox > 
        {!show ? <SubmitSide setShow={setShow} number={number} setNumber={setNumber}/> : <ThankYouSide number={number} />}
        </MotherBox>
    )
}


const MotherBox = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


