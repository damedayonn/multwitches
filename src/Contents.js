import React, { useState } from 'react';

const Contents = ({title,pre,url,num,onClick}) => {
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
    return(
    <div className='contents'>
        <div className='content_top'>
                <h1>{title}</h1>
                <p>{pre}</p>
        </div>
        <div className='content_article'>
                <textarea name={url} value={inputs[url]} onChange={onChange}/>
                <button onClick={()=>onClick(url,num,inputs[url])}>입력</button>
        </div>
    </div>
    )
}

export default Contents;