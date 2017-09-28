import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default ({header},tableData) => 
  <Table>
    <TableHeader>
      <TableRow>
			{header.map((x,i)=>
				<TableHeaderColumn key={i}>{x.name} </TableHeaderColumn>)}
      </TableRow>
    </TableHeader>
    <TableBody>
    </TableBody>
  </Table>
