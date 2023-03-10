export async function ListCategories() {
    return fetch("http://localhost:3000/categories",{
      method:'GET',
    }).then((response) => response.json())
}

export async function CreateCategory(body) {
  fetch("http://localhost:3000/categories",{
    method:'POST',
    body:JSON.stringify(body),
    headers: {"Content-Type": "application/json"},
  }).then((response) => response.json())
}