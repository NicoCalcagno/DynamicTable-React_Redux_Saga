
import { Todo } from '../../InterfaceData';
import './TableRow.css';



const TableRow : React.FC<Todo> = (row) => {


    

    return (
        <tr>
            <td>{row.userId}</td>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.completed}</td>
        </tr>
    );
}

export default TableRow;