import instance from "./instance";

export async function fetchBlog() {
    const response = await instance.get('/blog/');
    console.log(response.data);
    return response.data;
}