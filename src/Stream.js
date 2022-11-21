import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Stream = () => {
    const location = useLocation();
    const ppr = window.location.hostname;
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const ids = searchParams.get('id');
    const chk = ids.split(',');
    const onClick = (a,s) => {
        if(s === 'up') {
            let up = document.getElementById(`stream${a}`);
            up.classList.remove('multi');
            up.classList.add('only');
            up.style.position = 'absolute';
            up.style.width = '100%';
            up.style.height = '100%';
            let down = document.querySelectorAll('.multi');
            down.forEach(o=>o.style.display='none');
        } else {
            let down = document.getElementById(`stream${a}`);
            down.classList.remove('only');
            down.classList.add('multi');
            down.style.position = 'relative';
            down.style.width = 'calc(50% - 4px)';
            down.style.height = 'calc(50% - 4px)';
            let back = document.querySelectorAll('.multi');
            back.forEach(o=>o.style.display='block');
        }
    }
    useEffect(()=>{
        if(chk.length > 4) {
            alert(`4つまで出来ます`);
            navigate('/');
            return;
        }
        for(var i=0; i <= chk.length; i++) {
            if(chk[i] === '') {
                alert('空白があります');
                navigate('/');
                return;
            }
        }
    },[])
    return (
    <>
        <div className='streamWrap'>
            {chk.length === 1 ?
                <div className='stream' style={{width:'100%',height:'100%'}}>
                    <iframe src={`https://player.twitch.tv/?channel=${test}&parent=${ppr}`} height="100%" width="100%" muted={true} allowfullscreen />
                </div>
            :
            chk.map((data,i)=>(
                <div id={`stream${i}`} key={i} className='stream multi'
                     style={{width:'calc(50% - 4px)',height:'calc(50% - 4px)'}}>
                        <iframe src={`https://player.twitch.tv/?channel=${data}&parent=${ppr}`} height="100%" width="100%" muted={true} allowfullscreen />
                        <div className='updown up'><button onClick={()=>onClick(i,'up')}>UP</button></div>
                        <div className='updown down'><button onClick={()=>onClick(i,'down')}>DOWN</button></div>
                </div>
            ))
            }
        </div>
    </>
    )
}

export default React.memo(Stream);