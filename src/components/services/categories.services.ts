export async function ListCategories() {
    return fetch("http://localhost:3000/categories",{
      method:'GET',
    }).then((response) => response.json())
}