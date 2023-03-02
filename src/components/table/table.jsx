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
                        return <td>{field.action || item[field.key]}</td>
                    })}
                </tr>))}
            </tbody>
        </table>
    )
}