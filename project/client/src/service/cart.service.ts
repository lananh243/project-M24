import axios from "axios";

export const addToProCart: any =
    async ({ userId, product, quantity }: { userId: number, product: any, quantity: number }) => {
        const result = await axios.get(`http://localhost:8080/users/${userId}`);
        const user = result.data;
        const cart = user.cart || [];
        const index = cart.findIndex((item: any) => item.id === product.id);
        if (index === -1) {
            cart.push({ ...product, quantity });
        } else {
            cart[index].quantity += quantity;
        }
        await axios.patch(`http://localhost:8080/users/${userId}`, { cart });
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
    }

// lấy sản phẩm
export const takeOutPro: any =
    async () => {
        const response = await axios.get("http://localhost:8080/users")
        return response.data
    }

export const increase: any =
    async ({ userId, productId }: any) => {
        const { data: user } = await axios.get(`http://localhost:8080/users/${userId}`);
        const cart = user.cart || [];
        const index = cart.findIndex((item: any) => item.id === productId);
        if (index !== -1) {
            cart[index].quantity += 1;
        }
        await axios.patch(`http://localhost:8080/users/${userId}`, { cart });
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
    }

export const decrease: any =
    async ({ userId, productId }: any) => {
        const { data: user } = await axios.get(`http://localhost:8080/users/${userId}`);
        const cart = user.cart || [];
        const index = cart.findIndex((item: any) => item.id === productId);
        if (index !== -1 && cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        }
        await axios.patch(`http://localhost:8080/users/${userId}`, { cart });
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
    }

export const deleteSelect: any =
    async ({ userId, selectedIds }: any) => {
        const { data: user } = await axios.get(`http://localhost:8080/users/${userId}`);
        const cart = user.cart || [];
        const updatedCart = cart.filter((item: any) => !selectedIds.includes(item.id));
        await axios.patch(`http://localhost:8080/users/${userId}`, { cart: updatedCart });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
    }