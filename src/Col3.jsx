import React, { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const loopOver = (n, label) => {
  let formArray = [];
  for (let i = 0; i < n; i++) {
    formArray.push(
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        placeholder={label}
        style={{ margin: "10px" }}
      />
    );
  }
  return formArray;
};

export default function Col3(props) {
  var [fieldNumber, setFieldNumber] = useState(1);
  return (
    <Grid container spacing={3} direction="column">
      {fieldNumber > 0 ? loopOver(fieldNumber, props.data) : null}
    </Grid>
  );
}
