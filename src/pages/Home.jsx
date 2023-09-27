import { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { LoginData } from "../context/LoginContext";

export default function Home() {
  const { loginData } = useContext(LoginData);

  return (
    <Container>
      <Paper
        sx={{
          width: "100%",
          marginY: "20px",
          padding: "10px",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontFamily: 700,
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Sapat International - Daily Sales Report
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontWeight: 600, display: "flex", gap: "5px" }}>
            EmpId : <Typography> {loginData?.data.empId}</Typography>
          </Typography>
          <Typography sx={{ fontWeight: 600, display: "flex", gap: "5px" }}>
            Name : <Typography> {loginData?.data.name}</Typography>
          </Typography>
          <Typography sx={{ fontWeight: 600, display: "flex", gap: "5px" }}>
            Designation : <Typography> {loginData?.data.desig}</Typography>
          </Typography>
          <Typography sx={{ fontWeight: 600, display: "flex", gap: "5px" }}>
            HQ : <Typography> {loginData?.data.hq}</Typography>
          </Typography>
          <Typography sx={{ fontWeight: 600, display: "flex", gap: "5px" }}>
            Level : <Typography> {loginData?.data.empGroup}</Typography>
          </Typography>
        </Box>
        <Button variant="contained" color="secondary">
          Export
        </Button>
        <Button
          variant="contained"
          sx={{ position: "absolute", right: "10px", top: "10px" }}
        >
          Logout
        </Button>
      </Paper>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
