import  './shead.css';
import l from './images/logo2.jpg';
import FastfoodSharpIcon from '@mui/icons-material/FastfoodSharp';
import {Link} from 'react-router-dom';
const Headi = () =>{
    return(
        <>
        
        <div className='sh'>

            <div className='lo'>
                <img src={l} alt="" width={60} height={60}/>
            </div>

        <ul className='m'>
            <Link to="/Hom"><li>Home</li></Link>
            <li>About Us</li>
            <Link to="/Men"><li>Menu</li></Link>
        </ul>
        
        <div className='si'>
            <div className='c'>
                 <FastfoodSharpIcon fontSize='medium'/>
            </div>
        </div>

        </div>

        </>
    )
}
export default Headi;