import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "#b0e0e6",
  },
  downloadBtn: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
  addButton: {
    backgroundColor: "#00a86b",
    marginRight: theme.spacing(1),
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "&:hover": {
      backgroundColor: "#3f704d",
    },
  },
  minusButton: {
    backgroundColor: "#dc004e",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "&:hover": {
      backgroundColor: "#656a6f",
    },
  },
}));

export default function Row() {
  const classes = useStyles();
  var [fieldNumber, setFieldNumber] = React.useState(1);
  const [ipAddress, setIpAdrress] = React.useState();
  return (
    <TableRow>
      <TableCell>
        <Grid container spacing={3} direction="column">
          <form noValidate autoComplete="off" style={{ margin: "10px" }}>
            <TextField
              id="ip-address"
              label="Choose"
              onChange={(e) => {
                setIpAdrress(e.target.value);
                console.log(ipAddress);
              }}
            ></TextField>
          </form>
          <Grid spacing={3}>
            <button
              className={classes.addButton}
              onClick={() => {
                setFieldNumber((fieldNumber += 1));
              }}
            >
              +
            </button>
            {fieldNumber > 1 ? (
              <button
                className={classes.minusButton}
                onClick={() => {
                  setFieldNumber((fieldNumber -= 1));
                }}
              >
                -
              </button>
            ) : null}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Col1 />
      </TableCell>
      <TableCell>
        <Col2 />
      </TableCell>
      <TableCell>
        <Col3 />
      </TableCell>
      <TableCell>
        <FormControlLabel
          value="edit"
          control={<Checkbox color="primary" />}
          label="Edit"
          labelPlacement="edit"
        />
        <FormControlLabel
          value="run"
          control={<Checkbox color="primary" />}
          label="Run"
          labelPlacement="run"
        />
      </TableCell>
      <TableCell>1.0.0</TableCell>
      <TableCell>
        <TextField id="choose-1" label="Choose" style={{ width: "70px" }} />
        <TextField id="choose-1" label="Choose" style={{ width: "70px" }} />
      </TableCell>
      <TableCell>
        <Typography>Some Japanes</Typography>
      </TableCell>
      <TableCell>
        <FormControlLabel
          value="del"
          control={<Checkbox color="primary" />}
          label=""
          labelPlacement="del"
        />
      </TableCell>
    </TableRow>
  );
}
