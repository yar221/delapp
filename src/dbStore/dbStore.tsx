import AuthService from '../services/AuthService'

class DBStore{

    async getShopes(){
        try {
            const response = await AuthService.getShopes()
            // console.log(response)
            // localStorage.setItem('user', JSON.stringify(response.data.user))
            return response.data
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

    async getProducts(id: string){
        try {
            const response = await AuthService.getProducts(id)
            // console.log(response)
            // localStorage.setItem('user', JSON.stringify(response.data.user))
            return response.data
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

    // async registration(email, username, password, setAuth, setUser){
    //     try {
    //         const response = await AuthService.registration(email, username, password)
    //         //console.log(response)
    //         localStorage.setItem('user', JSON.stringify(response.data.user))
    //         setUser(response.data.user)
    //         setAuth(true)
    //     } catch (e) {
    //         //alert(e.response.data.message)
    //         console.log(e?.response?.data.message)
    //     }
    // }

    // async logout(setUser, setAuth){
    //     try {
    //         setUser({})
    //         setAuth(false)
    //         localStorage.removeItem('user')
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    // }
}

export default new DBStore()