import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Chats from './chats.js';

const Chat = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const ids = searchParams.get('id');
    const chk = ids.split(',');
    useEffect(()=>{
        if(chk.length > 10) {
            alert(`10つまで出来ます`);
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
    return(
        <div className='chatWrap'>
            <div className='chat'>
            {
                chk.map((data,i) => (
                    <div key={i} className='chatDiv'>
                        <div className='chatTop'>
                            <div className='chatName'>
                                {data}의 채팅방
                            </div>
                        </div>
                        <div className='chatView'>
                            <Chats streamer={data} />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default React.memo(Chat);