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
                        return <td attr-field={field.key} attr-value={item[field.key]}>{field?.action && field.action(item)|| item[field.key]}</td>
                    })}
                </tr>))}
            </tbody>
        </table>
    )
}