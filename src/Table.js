import React from "react";
import Papa from "papaparse";
import { render } from "@testing-library/react";

const Table = () => {
  var [rows, setRows] = React.useState(1);
  const [rowSpan, setRowSpan] = React.useState(1);
  const [data, setData] = React.useState();
  var file = `tableNo,displayName,ipAddress,port
  0,101,192.168.0.1,600
  0,1012,192.168.0.1,601`;
  var csvRead = Papa.parse(file);
  csvRead.data.shift();
  var [csv, setCsv] = React.useState(csvRead.data);
  console.log(csv);

  const renderRow = (n, rows, elem) => {
    const formRow = [];
    for (var i = 0; i < n; i++) {
      formRow.push(
        <tr rowSpan={rows}>
          <td style={{ border: "1px solid grey", borderCollapse: "collapse" }}>
            {rows <= 1 ? elem : "Choose"}
            <button
              style={{
                margin: "0 8px 0 8px",
                borderRadius: "50%",
                border: "none",
                background: "olive-green",
              }}
              // eslint-disable-next-line no-loop-func
              onClick={() => {
                console.log("clicked");
                setCsv(csv.push(["", "", "", ""]));
                console.log(csv);
              }}
            >
              +
            </button>
            <button
              style={{
                margin: "0 8px 0 0",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "pink",
              }}
            >
              -
            </button>
          </td>
        </tr>
      );
    }
    return formRow;
  };

  return (
    <table>
      <tbody>
        {csv.map((elem, index) => {
          return renderRow(rows, rowSpan, elem[2]);
        })}
      </tbody>
    </table>
  );
};

export default Table;
