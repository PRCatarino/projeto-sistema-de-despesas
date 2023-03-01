export async function Create(body) {
    fetch("http://localhost:3000/expenses",{
      method:'POST',
      body:JSON.stringify(body),
      headers: {"Content-Type": "application/json"},
    }).then((response) => response.json())

  console.log(body)
}