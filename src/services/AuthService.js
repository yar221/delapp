import $api from '../http/index'

export default class AuthService{

    static async getShopes(){
        return $api.get('/shops')
    }

    static async getProducts(id){
        return $api.get(`/products/${id}`)
    }
}