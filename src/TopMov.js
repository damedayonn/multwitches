import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TopMov = ({url,num,onClick}) => {
    const place = useLocation().search.replace('?id=','');
    const [inputs,setInputs] = useState({
        [url]:''
    })
    const onChange = (e) => {
        const {target: {name,value}} = e;
        setInputs({
            ...inputs,
            [name]:value
        })

    }
    return (
        <div className='topMov'>
            <input name={url} value={inputs[url]} placeholder={place} onChange={onChange}/>
            <p onClick={()=>onClick(url,num,inputs[url])}> {'>'} </p>
        </div>
    )
}

export default TopMov;