import * as React from 'react';

import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const CollapsedContentContainer = styled('div')`
  padding: 8px;
`;

const StyledTableContainer = styled(TableContainer)`
  border-width: 1px;
  border-style: solid;
  border-color: rgba(224, 224, 224, 1);
  border-radius: 4px;
`;

const ShortTableCell = styled(TableCell)`
  width: 0;
  padding-left: 4px;
  padding-right: 4px;
`;

function Row(row: CostItem) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <ShortTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </ShortTableCell>
        <TableCell component="th" scope="row">
          <Typography>{row.cost}</Typography>
        </TableCell>
        <TableCell align="right">{row.rate}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CollapsedContentContainer>
              <ul>
                {row.description.map((bulletPoint, index) => 
                  <Typography component='li' variant='body1' key={index}>{bulletPoint}</Typography>
                )}
              </ul>
            </CollapsedContentContainer>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

type CostItem = {
  cost: string;
  rate: string;
  amount: string;
  description: string[];
}

/*
Writing the app
- Writing functionality 

*/

const rows = [
  {
    cost: 'Writing the app',
    rate: '$20/hour',
    amount: '150 hours',
    description: [
      'Write an app that works on both Android and iOS',
      'Setting up a database to store user data and posts',
      'Setting up a content manager to store data about locations',
      'Create designs and theme for the app',
      'Writing documentation for any developer that may join this project at a later point',
      'Set up google cloud project for the maps feature which will use the Google Maps API'
    ],
  },
  {
    cost: 'Setting up cloud infrastructure on Amazon Web Services',
    rate: '$20/hour',
    amount: '15 hours',
    description: [
      'AWS is where images will be hosted for posts and profile pictures.'
    ],
  },
  {
    cost: 'Submission to the App Store',
    rate: '$20/hour',
    amount: '10 hours',
    description: [
      'This involves applying to be a developer for the App Store and filling out a long application and profile for the app.',
      'Before I submit it, I have to bundle the app and make sure that security issues are addressed'
    ]
  }
];

export const CostBreakdown = () => {
  return (
    <StyledTableContainer>
      <Table aria-label="collapsible table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Cost</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} {...row} />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};