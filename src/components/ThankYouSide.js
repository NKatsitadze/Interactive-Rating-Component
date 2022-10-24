import StarSvg from "../images/illustration-thank-you.svg";
import styled from "styled-components";

const ThankYouSide = function(props) {
    return (
        <Wrapper> 
             <img className="tySVG" src={StarSvg} alt="star icon"></img> 
             <span>You selected {props.number} out of 5</span>
             <h1>Thank you!</h1>  
             <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </Wrapper>
    )
}

export default ThankYouSide;


const Wrapper = styled.div`
    width: 41.2rem;
    height: 41.6rem;
    border-radius: 3rem;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    padding: 4.58rem 4rem 4.5rem 3.2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    & .tySVG {
        height: 10.2rem; 
        width: 15.8rem; 
    }

    & span {
        background : #262E38;
        color: #FC7614;
        font-size: 1.5rem;
        line-height: 2.4rem;
        font-weight: 400;
        width: 19.3rem;
        height: 3.2rem;
        border-radius: 22.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3.5rem;
        margin-bottom: 4rem;
    }

   & h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 3.545rem;
    margin-bottom: 1rem;
   }

   & p {
    font-size: 1.5rem;
    color: ##969FAD;
    line-height: 2.4rem;
    font-weight: 400;
   }

`