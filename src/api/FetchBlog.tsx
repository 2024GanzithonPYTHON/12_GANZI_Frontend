import instance from "./instance";

export async function fetchBlog() {
    const response = await instance.get('/blog/');
    return response.data;
}