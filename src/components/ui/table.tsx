type TableProps = {
    headers: Array<string>;
    items: Array<Array<string>>;
}
const Table = ({ headers, items }: TableProps) => {
    return (
        <div className="relative w-full overflow-auto">
            <table className="w-full text-sm text-left">
                <thead className="border-b border-border text-muted-foreground">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="h-12 px-4 align-middle font-medium">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                    {items.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-border transition-colors hover:bg-muted/50">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-4 align-middle text-foreground leading-relaxed">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;