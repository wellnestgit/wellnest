type TableData = {
  headers: string[];
  rows: string[][];
};

function Table({ data }: { data: TableData }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  let rows = data.rows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

