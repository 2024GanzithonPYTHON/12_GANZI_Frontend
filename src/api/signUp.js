import instance from "./instance";

export const signUp = async ({username, password, password_confirm, nickname}) => {
    
    const UserInfo = {
        username,
        password,
        password_confirm,
        nickname
    };

    try {
        const response = await instance.post(`/accounts/signup/`, UserInfo)

        return response.data;
    }
    catch (error) {
        throw error;
    }
}