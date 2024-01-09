import { axiosInstance } from ".";

export const LoginUser = async (user) => {
  try {
    const response = await axiosInstance.post("https://chitchatpall.onrender.com/api/users/login", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const RegisterUser = async (user) => {
  try {
    const response = await axiosInstance.post("https://chitchatpall.onrender.com/api/users/register", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("https://chitchatpall.onrender.com/api/users/get-current-user");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetAllUsers = async () => {
  try {
    const response = await axiosInstance.get("https://chitchatpall.onrender.com/api/users/get-all-users");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const UpdateProfilePicture = async (image) => {
  try {
    const response = await axiosInstance.post("https://chitchatpall.onrender.com/api/users/update-profile-picture", {
      image,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
