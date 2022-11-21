import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contents from './Contents';

const Main = () => {
    const navigate = useNavigate();
    const onClick = (url,num,id) => {
        const ids = id.trim();
        const chk = ids.split(',');

        if(!ids) {
            alert('入力してください');
            return;
        }
        if(chk.length > num) {
            alert(`${num}つまで出来ます`);
            return;
        }
        for(var i=0; i <= chk.length; i++) {
            if(chk[i] === '') {
                alert('空白があります');
                return;
            }
        }
        navigate(`/${url}?id=${ids}`);
    }
    return (
        <div className='main'>
            <Contents
                title={'STREAMS VIEW'}
                pre=
                {'id,id2,id3,id4のように入力してください\n4つまで出来ます'}
                url={'streams'}
                num={4}
                onClick={onClick}
            />
            <Contents
                title={'CHATS VIEW'}
                pre=
                {'id,id2,id3,id4,id5...のように入力してください\n10つまで出来ます'}
                url={'chats'}
                num={10}
                onClick={onClick}
            />
        </div>
    )
}

export default Main;