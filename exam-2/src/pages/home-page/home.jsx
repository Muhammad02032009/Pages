import('./home.css')
import videa from '../../assets/play-video.png'
import imagebn1 from '../../assets/illustration.png'
import features from '../../assets/features.png'
import awards from '../../assets/awards.png'
import clients from '../../assets/Clients.png'
import agencyimg from '../../assets/image (33).png'
import { Button } from '../../componets/header/header'
import { Circles, ClientCase, PricingCart } from '../../componets/small-components/comp'
import circl1 from '../../assets/circle-progress.png'
import circl2 from '../../assets/circle-progress (1).png'
import circl3 from '../../assets/circle-progress (2).png'
import circl4 from '../../assets/circle-progress (3).png'
import ill1 from '../../assets/illustration (1).png'
import ill2 from '../../assets/illustration (2).png'
import ill3 from '../../assets/illustration (3).png'
import ill4 from '../../assets/illustration (4).png'
import card2 from '../../assets/card (2).png'
import card3 from '../../assets/card (3).png'
import card4 from '../../assets/card (4).png'
import card5 from '../../assets/card (5).png'
import card6 from '../../assets/card (6).png'
export default function Home() {
    return <>
        <div className="firs-banner">
            <div className='bn-flex'>
                <div className='text-bn1'>
                    <h1>Best <span>SEO & Marketing </span> Solutions for You</h1>
                    <div className='btn-bn1'>
                        <button>Get a free analysis</button>
                        <img src={videa} alt="" />
                    </div>
                </div>
                <img className='img-bn1' src={imagebn1} alt="" />
            </div>
            <div className='features'>
                <img src={features} alt="" />
            </div>
        </div>


        <div className='awards-div'>
            <b>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</b>
            <img src={awards} alt="" />
        </div>

        <div className='clients-img'>
            <img src={clients} alt="" />
        </div>




        <div className='agency-div'>
            <div>
                <h1>Createx Agency </h1>
                <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
                <Button text="More about us" />
            </div>
            <img src={agencyimg} alt="" />
        </div>

        <div className='circl-div'>
            <Circles src={circl1} text='Years of experience' />
            <Circles src={circl2} text='Awards' />
            <Circles src={circl3} text='Projects' />
            <Circles src={circl4} text='Happy clients' />
        </div>



        <div className='services-div'>
            <h1>Our services</h1>
            <div className='btns-service'>
                <button className='v-buuton'>Social Media</button>
                <button>SEO</button>
                <button>Research</button>
                <button>Content & PR</button>
                <button>Payed Traffic</button>
            </div>
            <div className='service-flex'>
                <div className='service-text'>
                    <h2>Complete Worflow For Any SEO Professional</h2>
                    <p>Aenean enim tellus morbi nisl vulputate dictumst.   <br />
                        Nibh sapien volutpat lacus augue. <br />
                        Vel in amet, placerat adipiscing est pharetra. <br />
                        Gravida ornare sit in et ut sit sem id. <br />
                        Ultrices pellentesque dictum enim egestas ac diam. <br />
                        Sit semper enim senectus integer ut turpis et.</p>
                    <div className='buttons'>
                        <div className='btn1'><Button text='Learn more' /></div>
                        <Button text='Try SEO toolkit' />
                    </div>
                </div>
                <img src={ill1} alt="" />
            </div>
        </div>




        <div className='banner2-div'>
            <img src={ill2} alt="" />
            <div className='inp-bn2'>
                <h2>Get a Free SEO Analysis!</h2>
                <div className='inps'>
                    <input type="text" />
                    <input type="text" />
                    <input className='inp3' type="text" />
                </div>
                <div className='check-div'>
                    <p>I agree to receive communications from Createx SEO Agency</p>
                    <Button text="Get a free analysis" />
                </div>
            </div>
        </div>

        <div className='questions-div'>
            <h2>Freequently Ask Questions</h2>
            <div className='image-text'>
                <div>
                    <b>Aliquet lectus urna viverra in odio?</b>
                    <p>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                    <b>Orci commodo, viverra orci mollis ut euismod?</b>
                    <b>Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</b>
                    <b>In id dolor quis nunc, urna hendrerit pharetra?</b>
                    <Button text="Discover more -->" />
                </div>
                <img src={ill3} alt="" />
            </div>

        </div>

        <ClientCase />

        <div className='benifits'>
            <h1>Our benefits</h1>
            <div className='ben-img'>
                <div>
                    <img src={card2} alt="" />
                    <img src={card6} alt="" />
                    <img src={card4} alt="" />
                </div>
                <img src={ill4} alt="" />
                <div>
                    <img src={card3} alt="" />
                    <img src={card5} alt="" />
                    <img src={card4} alt="" />
                </div>
            </div>
        </div>


        <div className='pricing-div'>
            <h1>Flexible pricing plans</h1>
                <Button text="Monthly" />
            <div className='price-div'>
                <PricingCart price='$24' header='Basic' />
                <PricingCart price='$64' header='Optimal' />
                <PricingCart price='$98' header='Premium' />
            </div>
        </div>
    </>
}