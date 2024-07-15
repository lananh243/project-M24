import axios from "axios";

export const getCategory: any =
    async () => {
        let response = await axios.get("http://localhost:8080/category")
        return response.data;
    }

export const editCategory: any =
    async (category: any) => {
        let response = await axios.put(`http://localhost:8080/category/${category.id}`, category)
        return response.data;
    }