import './header.css'

function Header() {
    console.log(window.location.pathName)
    return(
        <>
            <header className="home-header">
                <a>Despesas </a>
                <a>| Usuários</a>
                <a>| Categorias</a>
            </header>
            <div className='locationPage'>Despesas</div>
        </>
    )
}
export default Header;