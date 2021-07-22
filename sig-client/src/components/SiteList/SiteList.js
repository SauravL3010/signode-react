import useFetch from "../Hooks/useFetch";
import SiteButton from "./SiteButton";
import SigLogo from "../Logo/SigLogo";


const SiteList  = () => {

    const url = 'http://localhost:4000/api/sites'

    const { data, isPending, error } = useFetch(url)

    return (
        <div className='container'>

            <SigLogo />

            { error && <div>{ error }</div> }
            { isPending && <div>Loading ...</div> }
            { data && data.list.map(site => (
                <SiteButton site={ site } />
            ))}

        </div>
    )
}

export default SiteList;