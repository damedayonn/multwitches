import React,{useState,useEffect,useRef} from 'react';
import tmi from 'tmi.js';
import {getDays} from './Hooks.js';

const Chat = ({streamer}) => {
   const [msg,setMsg] = useState([{
        name: '',
        nameColor:'',
        message: '',
        dot:'',
        time:''
   }]);
   const colors = [
    "#228B22","#00A5FF","#CD1039","#B90000","#800080",
    "#8B4F1D","	#0A8A8A","#FF1493","#828282","#FF7493"
   ];
   const scrollRef = useRef();
//    useEffect(()=>{
//     scrollRef.current.scrollIntoView({behavior:'smooth',block:'end',inline:'nearest'});
// });
   useEffect(()=>{
    const client = new tmi.Client({
        channels: [streamer]
    });
        client.connect();
        client.on('message',(channel,tags,message,self)=>{
            let names = tags['display-name'];
            let nameColor = tags['color'];
            if(nameColor === null) {
                const random = Math.floor(Math.random() * colors.length);
                nameColor = colors[random];
            }
            let msgs = message;
            let time = getDays(new Date());
            setMsg(msg => [...msg,{
                name: names,
                nameColor: nameColor,
                message: msgs,
                dot: ':',
                time: time,
            }]);
        });
        return () => {
            client.disconnect();
        }
   },[streamer])
if(msg.length >= 500) {
    msg.shift();
}
    return (
    <>
        <div className="realChat" ref={scrollRef}>
            <div>
                {
                    msg.map((data,i)=>(
                        <div key={i} className='chatMsg'>
                            <p className='cTime'>{data.time}</p>
                            <p className='cName' style={{color:data.nameColor}}>{data.name}</p>
                            <p className='cDot'>{data.dot}</p>
                            <p className='cMsg'>{data.message}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
    );
}



export default React.memo(Chat);