import instance from "./instance";

export const signUp = async ({username, password} : {username: string, password: string}) => {
    
    const UserInfo = {
        username,
        password

    };

    try {
        const response = await instance.post(`/accounts/login/`, UserInfo)

        return response.data;
    }
    catch (error) {
        throw error;
    }
}