import React from 'react'

function Custom(isHeading,text,style){
    if(!isHeading){
        return <h1 className={style}>{text}</h1>
    }

    return <p className={style}>{text}</p>
}


export default Custom