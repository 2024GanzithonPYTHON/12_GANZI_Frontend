import instance from "./instance";

export async function fetchPurchase() {
    const response = await instance.get('/purchase/');
    return response.data;
}