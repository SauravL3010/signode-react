import useFetch from "../Hooks/useFetch"
import { useParams } from "react-router-dom";
import TableBody from "./TableBody";

const TableData = () => {

    const { site } = useParams()

    const url = `http://localhost:4000/api/tickets/${site}`

    const { data, isPending, error } = useFetch(url)

    return (
        <div>
            { error && <div>{ error }</div> }
            { isPending && <p>Loading ...</p> }
            { data && <TableBody data={ data } site={ site } /> }
        </div>
    )
}

export default TableData
