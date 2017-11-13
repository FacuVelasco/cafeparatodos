import React from 'react';

export default function Items(props) {
  const { name, contributor, deleteElem} = props
  return (
    <div className="item">
      <div className="itemName">{name}</div>
      <div className="itemContributor">{contributor}</div>
      <div className="deleteButton" onClick={() => deleteElem(elem.i)}>X</div>
    </div>
  )
}