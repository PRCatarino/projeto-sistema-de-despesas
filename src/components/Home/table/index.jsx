import "./tableHeader.css";

function TableExpense () {
  return (
    <div>
      <table className="table-header">
        <tr>
          <th>ID</th>
          <th>Usuário</th>
          <th>Pendente</th>
          <th>Status</th>
        </tr>
        <tr className="table-data">
          <td>01</td>
          <td>guilherme@gmail.com</td>
          <td>R$ 100,00</td>
          <td>PAGO</td>
        </tr>
      </table>
      <button type="button" className="btn-table">ADICIONAR DESPESA</button>
    </div>  
  );
}

export default TableExpense;
