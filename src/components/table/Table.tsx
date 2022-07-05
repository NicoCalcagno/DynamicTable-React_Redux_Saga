import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import './Table.css';
import { Todo } from "../../InterfaceData";
import { RootState } from "../..";
import { useSelector } from "react-redux";
import LoadingSpinner from "../loadingspinner/LoadingSpinner";



const Table: React.FC<{ data: Todo[], columns: string[] }> = ({data, columns }) => {
    const isLoadingRows = useSelector((state: RootState) => state.isLoadingRows);
    if(isLoadingRows) 
        console.log("table row is loading");
    return (
        <table>
            <TableHeader {...columns} />
            <tbody>
                {data.map(todo => <TableRow {...todo} />)}
                {isLoadingRows ? <tr><LoadingSpinner></LoadingSpinner></tr> : <div></div>}
            </tbody>
        </table>
    );
}

export default Table;