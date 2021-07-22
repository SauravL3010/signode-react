import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            {/* implement histry browsing  */}
            <Link className="navbar-brand" to='/'> 
                <strong style={{ padding: '20px 20px 20px 20px', }}>&#8249;</strong>
            </Link>
            <Link className="navbar-brand" to="/">
                <strong>SIGNODE</strong>
            </Link>
        </nav>
    );

}

export default Navbar 