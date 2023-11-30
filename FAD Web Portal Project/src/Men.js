import './men.css';
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import Button from '@mui/material/Button';
import Summa from './images/main.jpg'
import Burger from './images/burgers.jpg'
import Pasta from './images/pasta.jpg'
import Pizza from './images/pizza.jpg'
import Chicken from './images/chicken.jpg'
import French from './images/frenchfries.jpg'
import Panneer from './images/paneer.jpg'
import offer from './images/offer.jpg'
import offer1 from './images/offer1.jpg'
import offer2 from './images/offer2.jpg'
import Burger1 from './images/burger1.avif'
import Burger2 from './images/burger2.avif'
import Burger3 from './images/burger3.avif'
import Burger4 from './images/burger4.avif'
import Pizza1 from './images/pizza1.avif'
import Pizza2 from './images/pizza2.avif'
import Pizza3 from './images/pizza3.avif'
import Pizza4 from './images/pizza4.avif'
import Pasta1 from './images/pasta2.avif'
import Pasta2 from './images/pasta3.avif'
import Pasta3 from './images/pasta4.jpg'
import Pasta4 from './images/pasta5.avif'
import Chicken1 from './images/chicken1.avif'
import Chicken2 from './images/chicken2.avif'
import Chicken3 from './images/chicken3.avif'
import Chicken4 from './images/chicken4.avif'
import Panner1 from './images/panner1.avif'
import Panner2 from './images/panner2.avif'
import Panner3 from './images/panner3.avif'
import Panner4 from './images/panner4.jpg'
import Potato1 from './images/potato1.avif'
import Potato2 from './images/potato2.avif'
import Potato3 from './images/potato3.avif'
import Potato4 from './images/potato4.avif'
function Men() {
    const [aa,setaa]=useState(0)
    const a=()=>{
      setaa(aa +1);
    }
    const z=()=>{
      setaa(aa -1);
    }
    const [bb,setbb]=useState(0)
    const b=()=>{
      setbb(bb +1);
    }
    const y=()=>{
      setbb(bb -1);
    }
    const [cc,setcc]=useState(0)
    const c=()=>{
      setcc(cc +1);
    }
    const x=()=>{
      setcc(cc -1);
    }
    const [dd,setdd]=useState(0)
    const d=()=>{
      setdd(dd +1);
    }
    const w=()=>{
      setdd(dd -1);
    }
    const [ee,setee]=useState(0)
    const e=()=>{
      setee(ee +1);
    }
    const v=()=>{
      setee(ee -1);
    }
    const [ff,setff]=useState(0)
    const f=()=>{
      setff(ff +1);
    }
    const u=()=>{
      setff(ff -1);
    }
    const [gg,setgg]=useState(0)
    const g=()=>{
      setgg(gg +1);
    }
    const t=()=>{
      setgg(gg -1);
    }
    const [hh,sethh]=useState(0)
    const h=()=>{
      sethh(hh +1);
    }
    const s=()=>{
      sethh(hh -1);
    }
    const [ii,setii]=useState(0)
    const i=()=>{
      setii(ii +1);
    }
    const r=()=>{
      setii(ii -1);
    }
    const [jj,setjj]=useState(0)
    const j=()=>{
      setjj(jj +1);
    }
    const q=()=>{
      setjj(jj -1);
    }
  return (

    <div className='container1'>
      <div className='sum' style={{width:"50vw"}}>
        <img src={Summa} alt="" style={{width:'96.5vw', height:'43vh',marginTop:"1cm" ,padding:"10px", borderRadius:'40px'}} />
      </div>
        <h1 style={{marginTop:"100px"}}>Offers for you...</h1>
        <div className='mar'>
          <Marquee pauseOnHover speed={100} gradient >
            <div className='off'>
            <img src={offer} alt="" height={300} width={500}/>
            </div>
            <div className='off'>
            <img src={offer1} alt="" height={300} width={500}/>
            </div>
            <div className='off'>
            <img src={offer2} alt="" height={300} width={500}/>
            </div>
          </Marquee>
        </div>
        <h1 style={{marginTop:"100px"}}>What is in your mind?</h1>

      <div className='she'>
          <div className='bur'>
          <img src={Burger} alt=""  width={150} style={{borderRadius:"100%"}} />
          </div>
          <div className='piz'>
          <img src={Pizza} alt="" width={150} style={{borderRadius:"100%"}}/><br/>
          </div>
          <div className='pas'>
          <img src={Pasta} alt="" width={150} style={{borderRadius:"100%"}}/>
          </div>
          <div className='chi'>
          <img src={Chicken} alt="" width={150} style={{borderRadius:"100%"}}/>
          </div>
          <div className='pan'>
          <img src={Panneer} alt="" width={150} style={{borderRadius:"100%"}}/>
          </div>
          <div className='fre'>
          <img src={French} alt="" width={150} style={{borderRadius:"100%"}}/>
          </div>
      </div>
      <div className='items' style={{marginTop:"100px"}}>
          <div className='bur1'>
                <img src={Burger1} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={z}>-</Button>
                <Button variant="contained" color="inherit">{aa}</Button>
                <Button variant="contained" onClick={a}>+</Button>
                </div>
          </div>
          <div className='bur1'>
                <img src={Burger2} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={y}>-</Button>
                <Button variant="contained" color="inherit">{bb}</Button>
                <Button variant="contained" onClick={b}>+</Button>
                </div>
          </div>
          <div className='bur1'>
                <img src={Burger3} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={x}>-</Button>
                <Button variant="contained" color="inherit">{cc}</Button>
                <Button variant="contained" onClick={c}>+</Button>
                </div>
          </div>
          <div className='bur1'>
                <img src={Burger4} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={w}>-</Button>
                <Button variant="contained" color="inherit">{dd}</Button>
                <Button variant="contained" onClick={d}>+</Button>
                </div>
          </div>
      </div>

      <div className='items1' style={{marginTop:"100px"}}>
          <div className='piz1'>
                <img src={Pizza1} alt="" width={300} height={200} style={{borderRadius:"20px"}} />
                <div className='but'>
                <Button variant="contained" onClick={v}>-</Button>
                <Button variant="contained" color="inherit">{ee}</Button>
                <Button variant="contained" onClick={e}>+</Button>
                </div>
          </div>
          <div className='piz1'>
                <img src={Pizza2} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={u}>-</Button>
                <Button variant="contained" color="inherit">{ff}</Button>
                <Button variant="contained" onClick={f}>+</Button>
                </div>
          </div>
          <div className='piz1'>
                <img src={Pizza3} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={t}>-</Button>
                <Button variant="contained" color="inherit">{gg}</Button>
                <Button variant="contained" onClick={g}>+</Button>
                </div>
          </div>
          <div className='piz1'>
                <img src={Pizza4} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={s}>-</Button>
                <Button variant="contained" color="inherit">{hh}</Button>
                <Button variant="contained" onClick={h}>+</Button>
                </div>
          </div>
      </div>

      <div className='items2' style={{marginTop:"100px"}}>
          <div className='pas1'>
                <img src={Pasta1} alt="" width={300} height={200} style={{borderRadius:"20px"}} />
                <div className='but'>
                <Button variant="contained" onClick={r}>-</Button>
                <Button variant="contained" color="inherit">{ii}</Button>
                <Button variant="contained" onClick={i}>+</Button>
                </div>
          </div>
          <div className='pas1'>
                <img src={Pasta2} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained" onClick={q}>-</Button>
                <Button variant="contained" color="inherit">{jj}</Button>
                <Button variant="contained" onClick={j}>+</Button>
                </div>
          </div>
          <div className='pas1'>
                <img src={Pasta3} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pas1'>
                <img src={Pasta4} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
      </div>

      <div className='items3' style={{marginTop:"100px"}}>
          <div className='chi1'>
                <img src={Chicken1} alt="" width={300} height={200} style={{borderRadius:"20px"}} />
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='chi1'>
                <img src={Chicken2} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='chi1'>
                <img src={Chicken3} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='chi1'>
                <img src={Chicken4} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
      </div>

      <div className='items4' style={{marginTop:"100px"}}>
          <div className='pan1'>
                <img src={Panner1} alt="" width={300} height={200} style={{borderRadius:"20px"}} />
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pan1'>
                <img src={Panner2} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pan1'>
                <img src={Panner3} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pan1'>
                <img src={Panner4} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
      </div>

      <div className='items5' style={{marginTop:"100px"}}>
          <div className='pot1'>
                <img src={Potato1} alt="" width={300} height={200} style={{borderRadius:"20px"}} />
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pot1'>
                <img src={Potato2} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pot1'>
                <img src={Potato3} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
          <div className='pot1'>
                <img src={Potato4} alt="" width={300} height={200} style={{borderRadius:"20px"}}/>
                <div className='but'>
                <Button variant="contained">-</Button>
                <Button variant="contained" color="inherit">0</Button>
                <Button variant="contained">+</Button>
                </div>
          </div>
      </div>
    </div>

  )
}
export default Men;