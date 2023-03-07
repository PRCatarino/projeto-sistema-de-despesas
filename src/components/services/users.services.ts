export async function ListUsers() {
    return fetch("http://localhost:3000/users",{
      method:'GET',
    }).then((response) => response.json())
}

export async function CreateUsers(body){
  fetch("http://localhost:3000/users",{
      method:'POST',
      body:JSON.stringify(body),
      headers: {"Content-Type": "application/json"},
    }).then((response) => response.json())
}