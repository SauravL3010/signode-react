import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    siteButton: {
            width: '100%',
            height: '45px',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            fontWeight: '600',
            color: '#000',
            backgroundColor: theme.palette.secondary.main,
            border: 'n`one',
            borderRadius: '45px',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease 0s',
            cursor: 'pointer',
            outline: 'none',
            margin: '10px auto 10px auto',
            '&:hover' : {
                backgroundColor: '#00b46c',
                boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)',
                color: '#fff',
                transform: 'translateY(-3px)',
            }
    },

    sigLinksMainPage: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'inherit',
        outline: 'none',
    }
}))

const SiteButton = (props) => {

    const classes = useStyles()
    const site = props.site

    return (
            <Link className={classes.sigLinksMainPage} to={`/${site.toLowerCase()}`}>
                <Button type='button' className={classes.siteButton}>
                    { site }
                </Button>
            </Link>
    )
}

export default SiteButton