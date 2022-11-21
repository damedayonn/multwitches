import React, { useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TopMov from './TopMov';

const Navbar = ({onDark,setOnDark}) => {
    const location = useLocation().pathname.replace('/','');
    const navigate = useNavigate();
    const modeDark = () => {
        if(onDark) {
            setOnDark(false);
            window.localStorage.setItem('mode','light-mode');
        } else {
            setOnDark(true);
            window.localStorage.setItem('mode','dark-mode');
        }
    }
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
    useEffect(()=>{
        const getMode = localStorage.getItem('mode');
        if(getMode && getMode === 'dark-mode') {
            setOnDark(true);
        } else if(getMode && getMode === 'light-mode') {
            setOnDark(false);
        }
    },[setOnDark])

    return (
        <div className='navTop'>
            <div className='topTitle'>
                <Link to='/'>
                    <p>
                        <i className='icon-twitch twitch'></i>
                        TWITCH MULTI
                    </p>
                </Link>
            </div>
            {
                location === '' ?
                <></>
                :
                location === 'chats' ?
                    <TopMov
                        url={'chats'}
                        num={10}
                        onClick={onClick}
                    />
                :
                    <TopMov
                        url={'streams'}
                        num={4}
                        onClick={onClick}
                    />
            }
            <div className={onDark ? 'toggle light' : 'toggle'}>
                <div className='moon-sun' onClick={modeDark}>
                    <i className='icon-sun-inv sun'></i>
                    <i className='icon-moon-inv moon'></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;