import('./comp.css')
import hover from '../../assets/hover (2).png'
import casecart from '../../assets/case-card.png'
import casecar2 from '../../assets/hover (3).png'
import { Button } from '../header/header'
export function Circles(props) {
    return <div className='circles'>
        <img src={props.src} alt="" />
        <p>{props.text}</p>
    </div>
}



export function ClientCase() {
    return <div className='client-div'>
        <div className='header-div-cl'>
            <h2>Read our clients' case studies</h2>
            <img src={hover} alt="" />
        </div>
        <div className='img-div'>
            <img src={casecart} alt="" />
            <img src={casecar2} alt="" />
            <img src={casecart} alt="" />
        </div>
        <div className='last-div-cl'>
            <h2>Explore more case studies</h2>
            <Button text="View all case studies" />
        </div>
    </div>
}


export function PricingCart(props) {
    return <div className='Carts' style={props.style}>
        <b>{props.header}</b>
        <p className='price'><span>{props.price}</span>/mon</p>
        <div className='p-text'>
            <p>Advanced Analytics <br /></p>
            <p>Change Management <br /></p>
            <p>Corporate Finance <br /></p>
            <p>One Way Link Building <br /></p>
            <p>Social Media Marketing <br /></p>
            <p>Strategy & Marketing <br /></p>
            <p>Information Technology <br /></p>
        </div>
        <div>
            <button>Choose plan</button>
        </div>
    </div>
}