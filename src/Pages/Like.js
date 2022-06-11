import React, { useEffect, useState } from 'react';
import className from 'classnames';
export const INITIAL_VALUE=100;

function Like()
{
    const [active,setActive]=useState(false);
    const [like,setLike]=useState(INITIAL_VALUE);
    const updateState=()=>{
        setActive(!active);
        if(active)
            setLike(like+1);
        else
            setLike(INITIAL_VALUE);
        console.log(active);
    };
    useEffect(()=>{
        setActive(active)
    },[active]);
    return (
        <div>
            
            <button className={className('like-button',{'liked':!active,'unliked':active})} onClick={updateState}>Like | {like}</button>
        </div>
    );
}
export default Like;