import TableRows from "./TableRows";

const TableBody = ({ data, site }) => {

    return (
        <div className='container'>
            <table className="table table-sortable">

            <thead>
                <tr>
                <th>Order #</th>
                <th>PO #</th>
                <th>Ship To</th>
                <th>Via</th>
                <th>Date Received</th>
                <th>Month</th>
                <th>Status</th>
                </tr>
            </thead>

                <TableRows data={ data } site={ site } />

            </table>
        </div>
    )
}

export default TableBody;