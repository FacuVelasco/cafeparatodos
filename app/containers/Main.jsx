import React from 'react';

export default function Main(props) {
  return (
    <div>
      <h3>Main</h3>
      {React.cloneElement(props.children)}
    </div>
  )
}