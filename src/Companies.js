import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  CircularProgress,
} from "@material-ui/core";
import { getCompanies } from "./api/Api";

function Users(props) {
  const [companiesState, setCompaniesState] = useState(null);
  const [unauthorizedState, setUnauthorizedState] = useState(false);

  useEffect(() => {
    getCompanies()
      .then((response) => {
        if (response.status === 401) {
          setUnauthorizedState(true);
        }
        setCompaniesState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (unauthorizedState) {
    return <h2>You are unauthorized to view this!</h2>;
  }

  return (
    <div>
      <h2>Company List</h2>

      {!companiesState && <CircularProgress variant="indeterminate" />}

      {companiesState && companiesState.length > 0 && (
        <TableContainer component={Paper} elevation={2}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>

                <TableCell>Company Name</TableCell>
                <TableCell>Company Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companiesState.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Users;
