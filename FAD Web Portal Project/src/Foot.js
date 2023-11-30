import './foot.css';
import w from './images/WhatsApp_icon.png';
import t from './images/twitter-png.png';
import i from './images/instagram-png.png';
import f from './images/Facebook-png.png';
import l from './images/logo2.jpg';
const Foot=()=>{
    return(
        <div className='f1'>
        <span>Follow Us On</span>
        <div className='f2'>
            <img src={w} alt="" height={40} width={40}/>
            </div>
        <div className='f3'>
            <img src={i} alt="" height={40} width={40}/>
            </div>
        <div className='f4'>
            <img src={t} alt="" height={40} width={40}/>
            </div>
        <div className='f5'>
            <img src={f} alt="" height={40} width={40}/>
            </div>
        <div className='f6'>
            <img src={l} alt="" height={150} width={150}/>
      </div>
    </div>
    )
}
export default Foot;