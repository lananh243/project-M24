import axios from "axios"

export const getUser: any = async () => {
    let response = await axios.get("http://localhost:8080/users")
    return response.data
}

export const addNewUser: any =
    async (user: any) => {
        await axios.post(
            "http://localhost:8080/users", user
        );
        let response = await axios.get("http://localhost:8080/users")
        return response.data
    }

export const updateStatus: any =
    async (user: any) => {
        await axios.patch(
            `http://localhost:8080/users/${user.id}`,
            { status: user.status }
        );
        let response = await axios.get("http://localhost:8080/users")
        return response.data
    }

export const searchUser: any = async (searchValue: any) => {
    let response = await axios.get(`http://localhost:8080/users?fullname_like=${searchValue}`)
    return response.data
}