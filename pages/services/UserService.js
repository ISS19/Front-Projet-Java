import axios from "axios";

const USER_API_URL = "http://localhost:8080/api/user";

class UserService{
    login(user){
        return axios.post(USER_API_URL + "/login", user);
    }

    addUser(user){
        return axios.post(USER_API_URL, user);
    }

    getSecteur(){
        return axios.get(USER_API_URL + "/liste");
    }

    updateUsers(userId, user){
        return axios.put(USER_API_URL + "/" + userId, user)
    }

    deleteUsers(userId){
        return axios.delete(USER_API_URL + "/" + userId)
    }

    getAllUsers(userId){
        return axios.get(USER_API_URL + "/" + userId)
    }

    changeMdp(userId, mdp){
        return axios.put(USER_API_URL + "/changeMdp/" + userId, mdp)
    }

    otherUser(userId){
        return axios.get(USER_API_URL + "/liste/" + userId);
    }
}

export default new UserService();