function getService({onUsers}) {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/expenses")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    onUser(data)

    return (
        <></>
    )
}

export default getService