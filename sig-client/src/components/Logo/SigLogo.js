import imgSrc from '../Logo/SignodeLogo_RGB_FOR PPT AND SCREEN USE.png'

console.log(imgSrc)

const SigLogo = () => {

    return (
        <img className="sig-logo" src={ `${imgSrc}` } alt="SIGNODE LOGO GOES HERE" height="50%" width="50%" />
    )
}

export default SigLogo;