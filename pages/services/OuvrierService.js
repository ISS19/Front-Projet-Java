import axios from "axios";

const OUVRIER_API_URL = "http://localhost:8080/api/ouvrier";

class OuvrierService{
    addOuvrier(ouvrier){
        return axios.post(OUVRIER_API_URL, ouvrier);
    }

    getOuvrier(idSec){
        return axios.get(OUVRIER_API_URL + "/"+ idSec);
    }

    updateOuvrier(ouvrier, ouvrierId){
        return axios.put(OUVRIER_API_URL + "/"+ ouvrierId, ouvrier);
    }

    deleteOuvrier(ouvrierId){
        return axios.delete(OUVRIER_API_URL + "/" + ouvrierId);
    }
}

export default new OuvrierService();