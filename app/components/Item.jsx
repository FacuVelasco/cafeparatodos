import React from 'react';
import s from './Item.ncss';
import Trash from 'react-icons/lib/fa/trash';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default function Items(props) {
  const { info, deleteElem, i } = props
  console.log('ITEM info', info)
  console.log(props)
  return (
    <TableRow>
      <TableRowColumn>{info.name} </TableRowColumn>
      <TableRowColumn>{info.amount}</TableRowColumn>
      <TableRowColumn>{info.observation}</TableRowColumn>
      <TableRowColumn><Trash /></TableRowColumn>
    </TableRow>
  )
}