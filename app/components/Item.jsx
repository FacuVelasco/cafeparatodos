import React from 'react';
import s from './Item.ncss';
import Trash from 'react-icons/lib/fa/trash';

export default function Items(props) {
  const { name, contributor, deleteElem} = props
  console.log('ITEM PROPS', props)
  return (
    <div className={s.item}>
      <div className={s.itemName}>{name}</div>
      <div className={s.itemContributor}>{contributor}</div>
      <div className={s.deleteButton} onClick={() => deleteElem(elem.i)}>
        <Trash />
      </div>
    </div>
  )
}