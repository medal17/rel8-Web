import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { Close, DeleteForeverRounded } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, post, email, phone, course,period, action) {
  return { name, post, email, phone, course, period, action };
}

const rows = [
    createData('Biola Johnson', 'Chairman', 'biola2gmail.com', '09034394343', 'IT tech', '2021 - 2022', <IconButton><DeleteForeverRounded sx={{color:'red'}}/></IconButton>),
    createData('Biola Johnson', 'Chairman', 'biola2gmail.com', '09034394343', 'IT tech', '2021 - 2022', <IconButton><DeleteForeverRounded sx={{color:'red'}}/></IconButton>),
    createData('Biola Johnson', 'Chairman', 'biola2gmail.com', '09034394343', 'IT tech', '2021 - 2022', <IconButton><DeleteForeverRounded sx={{color:'red'}}/></IconButton>),
    createData('Biola Johnson', 'Chairman', 'biola2gmail.com', '09034394343', 'IT tech', '2021 - 2022', <IconButton><DeleteForeverRounded sx={{color:'red'}}/></IconButton>),
    createData('Biola Johnson', 'Chairman', 'biola2gmail.com', '09034394343', 'IT tech', '2021 - 2022', <IconButton><DeleteForeverRounded sx={{color:'red'}}/></IconButton>),
    createData('Biola Johnson', 'Chairman', 'biola2gmail.com', '09034394343', 'IT tech', '2021 - 2022', <IconButton><DeleteForeverRounded sx={{color:'red'}}/></IconButton>),
];

export function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* {props.tableHead ? props.tableHead.map((e)=><StyledTableCell>{e}</StyledTableCell>):''} */}
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell align="right">Portfolio</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Phone&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Course of study&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Period of study&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text'>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className='light-text' component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell className='light-text' align="right">{row.post}</StyledTableCell>
              <StyledTableCell className='light-text' align="right">{row.email}</StyledTableCell>
              <StyledTableCell className='light-text' align="right">{row.phone}</StyledTableCell>
              <StyledTableCell className='light-text' align="right">{row.course}</StyledTableCell>
              <StyledTableCell className='light-text' align="right">{row.period}</StyledTableCell>
              <StyledTableCell className='light-text' align="center">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export function MemberTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.tableHead ? props.tableHead.map((e)=><StyledTableCell>{e}</StyledTableCell>):''}
            {/* <StyledTableCell >Name</StyledTableCell> */}
            {/* <StyledTableCell align="right">Portfolio</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Phone&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Course of study&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Period of study&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody className='text'>
          {props.rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className='light-text' component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {/* <StyledTableCell className='light-text' >{row.post}</StyledTableCell> */}
              <StyledTableCell className='light-text' >{row.email}</StyledTableCell>
              <StyledTableCell className='light-text' >{row.phone}</StyledTableCell>
              <StyledTableCell className='light-text' >{row.address}</StyledTableCell>
              <StyledTableCell className='light-text' >{row.occupation}</StyledTableCell>
              <StyledTableCell className='light-text' >{row.course}</StyledTableCell>
              <StyledTableCell className='light-text' >{row.period}</StyledTableCell>
              <StyledTableCell className='light-text' >{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}