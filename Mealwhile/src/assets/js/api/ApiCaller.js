import axios from 'axios'

class ApiCaller {
  instance

  constructor() {
    this.instance = axios.create({
      // baseUrl: "http://0.0.0.0:8080/api/v1/",
      baseURL: 'http://94.16.118.251:8080/api/v1/',
      // TODO Falls polling verwendet werden soll, dann muss ein neuer caller rein...
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

  async put(url, body) {
    try {
      let response = await this.instance.put(url)

      if (response.status == 200) {
        return response.data
      }
    } catch (error) {
      return error
    }
  }

  async post(url, body) {
    try {
      let response = await this.instance.post(url, body)

      if (response.status == 200) {
        return response.data
      }
    } catch (error) {
      return error
    }
  }

  async delete(url) {
    try {
      let response = await this.instance.delete(url)

      if (response.status == 200) {
        return response.data
      }
    } catch (error) {
      return error
    }
  }
}

export const apiCaller = new ApiCaller()