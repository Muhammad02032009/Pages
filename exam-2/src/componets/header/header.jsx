import logo from '../../assets/logo.png'
import('./header.css')
export default function Header() {
    return <div className='header-div'>
        <div >
            <img src={logo} alt="" />
            <div>
                <select name="" id="">
                    <option value="">Services</option>
                    <option value="">Service</option>
                </select>
                <select name="" id="">
                    <option>Case Studies</option>
                    <option>Case Study</option>
                </select>
                <select name="" id="">
                    <option>About Us</option>
                    <option>Careers</option>
                </select>
                <select name="" id="">
                    <option>Blog</option>
                    <option>Single post</option>
                </select>
                <p>Contacts</p>
            </div>
        </div>
        <Button text="Talk to a human"/>
    </div>
}


export function Button(props) {
    return <button className='viyoletBtn'>{props.text}</button>
}