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

function Home({ history, userContext }) {
  const [companiesState, setCompaniesState] = useState(null);

  if (!userContext || !userContext.isLoggedIn) {
    history.push("/login");
  }

  useEffect(() => {
    getCompanies()
      .then((response) => {
        setCompaniesState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!companiesState && <CircularProgress variant="indeterminate" />}

      {companiesState && companiesState.length > 0 && (
        <>
          <h3>
            Below is a table of data that can only by retrieved with a valid JWT
            present in the request headers.
          </h3>
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
        </>
      )}
    </div>
  );
}

export default Home;
