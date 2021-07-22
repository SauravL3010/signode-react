import { Link } from "react-router-dom"

const TableRow = ({ order, site }) => {


    return (

        <tr>
            <td className='sig-order'><Link className='sig-links' to={ `/${site}/${order._id}` }>{ order._id }</Link></td>
            <td>{ order.PO }</td>
            <td>{ order.shipTo }</td>
            <td>{ order.via }</td>
            <td>{ order.dateReceived }</td>
            <td>{ order.month }</td>
            <td className="stat">{ order.status }</td>
        </tr>

    )
}

export default TableRow