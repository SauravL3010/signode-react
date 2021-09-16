import imgSrc from '../images/SignodeLogo_RGB_FOR PPT AND SCREEN USE.png'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    sigLogo: {
        display: 'block',
        // width: '50%',
        margin: '0 auto 0 auto',
        textAlign: 'center'
    }
}))

const SigLogo = () => {

    const clasess = useStyles()

    return (
        <div className={clasess.sigLogo}>
            <img src={ `${imgSrc}` } alt="SIGNODE LOGO GOES HERE" height="40%" width="40%" />
        </div>
    )
}

export default SigLogo;