import axios from 'axios';

const DONORS_API_BASE_URL = "http://localhost:8080/api/donors";

class Service {

    readAll() {
        return axios.get(DONORS_API_BASE_URL+'/getAll');
    }

    read(donorId){
        return axios.get(DONORS_API_BASE_URL+'/get/'+donorId);
    }

    create(donor) {
        return axios.post(DONORS_API_BASE_URL + '/post',  donor );
    }

    update(donorId,donor) {
        return axios.put(DONORS_API_BASE_URL + '/put/'+donorId,  donor );
    }

    delete(donorId) {
        return axios.delete(DONORS_API_BASE_URL + '/delete/' +  donorId );
    }

    signUp(donor){
        return axios.post(DONORS_API_BASE_URL + '/signup' , donor);
    }

    login(donor) {
        return axios.get(DONORS_API_BASE_URL + '/login?email=' + donor.email + '&password=' + donor.password);
    }

}

export default new Service()