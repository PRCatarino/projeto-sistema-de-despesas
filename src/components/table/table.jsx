import "./tableStyle.css";
export default function Table(props) {
  const { fields, data } = props;
  return (
    <table>
      <thead>
        <tr>
          {fields.map((field, index) => (
            <th key={`${field.label}`}>{field.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={`${item.id}`}>
            {fields.map((field) => {
              return (
                <td
                  key={`${field.key}`}
                  attr-field={field.key}
                  attr-value={item[field.key]}
                > 
                  {(field?.action && field.action(item)) || item[field.key]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
