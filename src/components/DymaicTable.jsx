import React, { useState } from "react";

const DynamicTable = () => {
  const [tableData, setTableData] = useState([
    ["Row 1 Col 1", "Row 1 Col 2"],
  ]);
  const [headers, setHeaders] = useState(["Header 1", "Header 2"]);

  // Add a new row
  const addRow = () => {
    setTableData([...tableData, new Array(headers.length).fill("New Cell")]);
  };

  // Add a new column
  const addColumn = () => {
    setHeaders([...headers, `Header ${headers.length + 1}`]);
    setTableData(tableData.map(row => [...row, "New Cell"]));
  };

  // Delete a row
  const deleteRow = (rowIndex) => {
    setTableData(tableData.filter((_, index) => index !== rowIndex));
  };

  // Delete a column
  const deleteColumn = (colIndex) => {
    setHeaders(headers.filter((_, index) => index !== colIndex));
    setTableData(tableData.map(row => row.filter((_, index) => index !== colIndex)));
  };

  // Handle inline cell editing
  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedTable = [...tableData];
    updatedTable[rowIndex][colIndex] = value;
    setTableData(updatedTable);
  };

  return (
    <div className="table-container">
      <button onClick={addColumn}>➕ Add Column</button>
      <button onClick={addRow}>➕ Add Row</button>
      <table border="1">
        <thead>
          <tr>
            {headers.map((header, colIndex) => (
              <th key={colIndex}>
                {header} <button onClick={() => deleteColumn(colIndex)}>❌</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => deleteRow(rowIndex)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
