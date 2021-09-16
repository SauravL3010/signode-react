import { Document, Page } from 'react-pdf';

const OrderDetails = () => {
    const pdf = 'C:\\pickticket_test\\OneDrive - Signode Industrial Group\\Signode Canada Picktickets\\Markham\\8-Archived\\7188306-01_Fastfrate.pdf'
    return (
        <div>
            <section>
                <embed className="sig-pdf" src={pdf} />
            </section>
            <Document file={pdf}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )

}



export default OrderDetails