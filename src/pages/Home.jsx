import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container'




export default function Home() {
  
  return (
    <Container>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Sr No</TableCell>
              <TableCell>Retailer Name</TableCell>
              <TableCell>PFN</TableCell>
              <TableCell>PHD</TableCell>
              <TableCell>PDD</TableCell>
              <TableCell>PHM</TableCell>
              <TableCell>SYS</TableCell>
              <TableCell>SYH</TableCell>
              <TableCell>SRB</TableCell>
              <TableCell>SAG</TableCell>
              <TableCell>SCG</TableCell>
              <TableCell>SHE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </Container>
  );
}