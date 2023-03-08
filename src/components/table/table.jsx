import "./tableStyle.css";
export default function Table(props) {
    const {fields, data} = props
    return (
        <table>
            <thead>
                {fields.map((field) => (<th>{field.label}</th>))}
            </thead>
            <tbody>
                {data.map((item) => (<tr>
                    {fields.map((field) => {
                        if(item.status === 'PENDENTE'){
                            return <td className="redPending">{field.action || item[field.key]}</td>
                        }else{

                            return <td className="greenPaid ">{field.action || item[field.key]}</td>
                        }
                    })}
                </tr>))}
            </tbody>
        </table>
    )
}