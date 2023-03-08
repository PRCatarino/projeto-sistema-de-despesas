import './header.css'
import { Link } from 'react-router-dom';

function Header() {

    return(
        <>
            <header className="home-header">
                <Link to="/">Despesas </Link>
                <Link to="/users">| Usuários</Link>
                <Link to="/category">| Categorias</Link>
            </header>
            <div className='locationPage'>Despesas</div>
        </>
    )
}
export default Header;