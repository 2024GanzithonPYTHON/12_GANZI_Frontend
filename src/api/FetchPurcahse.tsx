import instance from "./instance";

export async function fetchBlog() {
    const response = await instance.get('/purchase/');
    console.log(response.data);
    return response.data;
}