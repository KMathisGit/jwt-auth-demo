import React, { useState, useEffect, useContext } from "react";
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
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

function Users(props) {
  const [companiesState, setCompaniesState] = useState(null);
  const { userContext, setUserContext } = useContext(UserContext);
  const history = useHistory();

  if (!userContext || !userContext.isLoggedIn) {
    history.push("/login");
  }

  useEffect(() => {
    debugger;
    getCompanies()
      .then((response) => {
        debugger;
        setCompaniesState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <pre>
        Below is a table of data that can only by retrieved with a valid JWT
        present in the request headers.
      </pre>
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
