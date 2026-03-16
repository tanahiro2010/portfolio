type TableProps = {
    headers: Array<string>;
    items: Array<Array<string>>;
}
const Table = ({ headers, items }: TableProps) => {
    return (
        <table className="mt-4 w-full">
            <tbody>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="border px-4 py-2 text-left">
                            {header}
                        </th>
                    ))}
                </tr>
                {items.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border px-4 py-2">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;