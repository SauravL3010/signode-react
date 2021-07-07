import TableRow from "./TableRow";

const TableRows = ({ data, site}) => {

    return (

        <tbody id="mainList">
            { data && data.map((order)=>(

                <TableRow key={ order._id } order={ order } site={ site } />

            )) }
        </tbody>

    )
}

export default TableRows;