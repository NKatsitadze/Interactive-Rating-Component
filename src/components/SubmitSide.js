import StarSvg from "../images/icon-star.svg";
import styled from "styled-components";

const SubmitSide = function(props) {

    const clickHandler = function(e) {
       const arr =  document.querySelectorAll('button');
       arr.forEach(eachMemb => eachMemb.classList.remove('active'));
        e.target.className = 'rate active';
        props.setNumber(Number(e.target.value))
    }

    const sbmHandler = function() {
        if (!props.number) {return} else {props.setShow(true);}
    }
    
    return (
        <Wrapper> 
             <div className="svgDiv">
             <img className="star" src={StarSvg} alt="star icon"></img> 
             </div>
             <h1>How did we do?</h1>  
             <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
             <div className="btnBox">
                <button value='1' onClick={clickHandler} className="rate">1</button>
                <button value='2' onClick={clickHandler} className="rate">2</button>
                <button value='3' onClick={clickHandler} className="rate">3</button>
                <button value='4' onClick={clickHandler} className="rate">4</button>
                <button value='5' onClick={clickHandler} className="rate">5</button>
             </div>
            <button onClick={sbmHandler} className="sbmBtn">Submit</button>
        </Wrapper>
    )
}

export default SubmitSide;


const Wrapper = styled.div`
    width: 41.2rem;
    height: 41.6rem;
    border-radius: 3rem;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    padding: 3.2rem 3.9rem 3.2rem 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .star {
        height: 16.75px;
        width: 16px;
    }

   & .svgDiv {
    height: 4.8rem;
    width: 4.8rem;
    background: #262E38;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   & h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 3.545rem;
   }

   & p {
    font-size: 1.5rem;
    color: ##969FAD;
    line-height: 2.4rem;
    font-weight: 400;
   }

   & .btnBox {
    display: flex;
    gap: 2.1rem;
   }

   & .rate {
    width: 5.1rem;
    height: 5.1rem;
    border-radius: 50%;
    background: #262E38;
    border:none;
    cursor:pointer;
    color: #7C8798;
    font-size: 1.6rem;
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
        background: #FC7614;
        color: #FFFFFF;
    }
   }

   & .sbmBtn {
    width: 34.1rem;
    height: 4.5rem;
    border:none;
    border-radius: 22.5px;
    letter-spacing: 2px;
    color: #FFFFFF;
    background: #FC7614;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 19px;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
        cursor:pointer;
        background: #FFFFFF;
        color: #FC7614;
    }
   }

   & .active {
    background: #7C8798;
    color: #FFFFFF;
   }

`