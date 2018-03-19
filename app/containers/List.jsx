import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Trash from 'react-icons/lib/fa/trash';

import Item from '../components/Item.jsx';
import s from './List.ncss';

const style = {
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
  },
  right: {
    textAlign: "right",
  }
}

export default function List ({ items }) {
  if (!items) {
    return (<p>No items found :(</p>);
  }
  else {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ITEM</TableHeaderColumn>
              <TableHeaderColumn>AMOUNT</TableHeaderColumn>
              <TableHeaderColumn>OBSERVATION</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={true}
            showRowHover={true}
          >
            {items.map((elem, i) => (
              <TableRow key={elem._id}>
                <TableRowColumn>{elem.name}</TableRowColumn>
                <TableRowColumn>{elem.amount}</TableRowColumn>
                <TableRowColumn>{elem.observation}</TableRowColumn>
                <TableRowColumn style={style.right}><Trash /></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <FloatingActionButton style={style.add}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}