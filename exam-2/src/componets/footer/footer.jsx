import('./footer.css')
import logo from '../../assets/logo.png'
import socials from '../../assets/socials.png'
import Cluth from '../../assets/award (4).png'
import GoodFirms from '../../assets/award (3).png'
import Partner from '../../assets/award (2).png'
import Hubspot from '../../assets/award.png'
import UpBtn from '../../assets/up-btn.png'
import copyR from '../../assets/copyright.png'
export default function Footer() {
    return <>
        <div className='footer-div'>
            <div className='divs-in-futer'>
                <div className='div-1'>
                    <img src={logo} alt="" />
                    <p>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
                    <img src={socials} alt="" />
                </div>
                <div>
                    <b>COMPANY</b>
                    <p>
                        About Us <br />
                        Case Studies <br />
                        Blog <br />
                        Careers <br />
                        Contacts
                    </p>
                </div>
                <div>
                    <b>SERVICES</b>
                    <p>
                        Social Media<br />
                        SEO <br />
                        Research <br />
                        Content & PR <br />
                        Payed Traffic
                    </p>
                </div>
                <div>
                    <b>CONTACT US</b>
                    <p>
                        (405) 555-0128 <br />
                        hello@createx.com
                    </p>
                </div>
                <div>
                    <b>SIGN UP TO OUR NEWSLETTER</b>
                    <input type="search" />
                    <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                </div>
            </div>


            <div className='div-images'>
                <div>
                    <img src={Cluth} alt="" />
                    <img src={GoodFirms} alt="" />
                    <img src={Partner} alt="" />
                    <img src={Hubspot} alt="" />
                </div>
                <div>
                    <b>GO TO TOP</b>
                    <img src={UpBtn} alt="" />
                </div>
            </div>

            <div className='last-div'>
                <img src={copyR} alt="" />
            </div>
        </div>
    </>
}