export async function ListUsers() {
    return fetch("http://localhost:3000/users",{
      method:'GET',
    }).then((response) => response.json())
}