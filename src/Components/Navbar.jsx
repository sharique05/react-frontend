import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = localStorage.getItem('accessToken')
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About <span className="sr-only"></span></Link>
                    </li>
                    {
                        user ?
                            <li className="nav-item">
                                <Link className="nav-link float-right" to="/logout">Logout <span className="sr-only"></span></Link>
                            </li>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link float-right" to="/login">Login <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link float-right" to="/register">Register <span className="sr-only"></span></Link>
                                </li>
                            </>
                    }
                </ul>
            </div>


        </nav>
    )
}

export default Navbar