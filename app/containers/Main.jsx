import React from 'react';
import s from './Main.ncss';

export default function Main(props) {
  return (
    <div className={s.container}>
      <h3>Main</h3>
      {React.cloneElement(props.children)}
    </div>
  )
}