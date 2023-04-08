import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary px-5 navbar-custom'>
            <div className='container-fluid'>
                <h1 className='navbar-brand l-0 mx-auto'>Natural Pics</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav flex-row gap-2">
                        <li className="nav-item">
                            <NavLink className='nav-link px-3' to='/' activeClassName='active'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link px-3' to='/favorites' activeClassName='active'>Favorites</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


