import useFetch from "../hooks/useFetch";
import SiteButton from "./SiteButton";
import SigLogo from "./SigLogo";

import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";


const SiteList  = () => {

    const url = 'http://localhost:5001/api/sites'

    const { data, isPending, error } = useFetch(url)

    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item sm={12} xs={12}>
                    <SigLogo /> 
                </Grid>
                <Grid item sm={12} xs={12}>
                    { error && <div>{ error }</div> }
                    { isPending && <div>Loading ...</div> }
                    { data && data.list.map(site => (
                        <SiteButton key={site} site={ site } />
                    ))}
                </Grid>
            </Grid>

        </Container>
    )
}

export default SiteList;