import './main.css'

function MainTable() {
    return (
        <main className='field-search'>
            <div className='input-search'>
                <label htmlFor="">Buscar</label>
                <input type="text"  />
            </div>
            <div className='input-search'>
                <label htmlFor="">Ordenar Por</label>
                <input type="text"  />
            </div>
            <div className='input-search'>
                <label htmlFor="">Filtrar Por</label>
                <input type="text"  />
            </div>
        </main>
    )
}

export default MainTable;