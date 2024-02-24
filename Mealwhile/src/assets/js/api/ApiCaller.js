import axios from 'axios'

class ApiCaller {
  instance

  constructor() {
    this.instance = axios.create({
      // baseUrl: "http://0.0.0.0:8080/api/v1/",
      baseURL: 'http://94.16.118.251:8080/api/v1/',
      timeout: 5000
      // TODO headers für auth ??
    })
  }

  async get(url) {
    try {
      console.log(url)
      let response = await this.instance.get(url)

      if (response.status == 200) {
        return response.data
      }
    } catch (error) {
      return error
    }
  }
}

export const apiCaller = new ApiCaller()

/*
export const getUnits = async () => {
    try {
        let response = await this.instance.get("unit/")
        
        if (response.status == 200) {
            console.log(response["data"])
        }
        
        
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
*/
