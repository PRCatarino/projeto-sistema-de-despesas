import './totalSection.css'

function TotalSection() {
    return (
        <section>
            <div className="total">
                <div className="total-pay">
                    <h3>TOTAL PAGO</h3>
                    <h1>R$ 300,00</h1>
                </div>
                <div className="total-expense">
                    <h3>TOTAL DESPESAS</h3>
                    <h1>R$ 500,00</h1>
                </div>
            </div>
        </section>
    )
}

export default TotalSection;