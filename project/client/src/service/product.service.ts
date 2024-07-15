import axios from "axios"

export const getProduct: any =
    async () => {
        let response = await axios.get("http://localhost:8080/products")
        return response.data
    }

export const addNewProduct: any = async (product: any) => {
    let response: any = await axios.post("http://localhost:8080/products", product)
    return response.data
}

export const editProduct: any = async (product: any) => {
    let response: any = await axios.put(`http://localhost:8080/products/${product.id}`, product)
    return response.data;
}

export const eraseProduct: any = async (id: number) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    return id;
}

export const searchProduct: any = async (searchName: any) => {
    let response = await axios.get(`http://localhost:8080/products?name_like=${searchName}`)
    return response.data
}

export const sortProduct: any = async (order: 'asc' | 'desc') => {
    let response = await axios.get(`http://localhost:8080/products?_sort=name&_order=${order}`)
    return response.data
}