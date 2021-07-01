import { Link } from 'react-router-dom'

const SiteButton = (props) => {

    const site = props.site
    return (
        <div>
            <Link className='sig-links-main' to={`/mainPage/${site.toLowerCase()}`}>
                <button type='button' className="buttonSpace button font-inherit">
                    { site }
                </button>
            </Link>
        </div>
    )
}

export default SiteButton