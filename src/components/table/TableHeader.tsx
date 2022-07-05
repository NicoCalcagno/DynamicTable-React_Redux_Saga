
import './TableHeader.css';

const TableHeader: React.FC<string[]> = (headings) => {

    const arrayHeadings = Array.from(headings);
    return (
        <thead>
            <tr>
                {arrayHeadings.map((heading) => <th>{heading}</th>)}
            </tr>
        </thead>
    );
}

export default TableHeader;