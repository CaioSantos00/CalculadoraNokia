import React from 'react';
export default function Button({onClickEle ,valueBtn, textBtn}) {
    return (
      <button className='buttons' onClick={(e) => onClickEle(e)} value={valueBtn}>{textBtn}</button>
    )
  }
  
