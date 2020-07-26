import axios from "axios"

const api = {
  getData(params) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        // Authorization: `Token ${token}`,
      }
      axios
        .get(`https://reqres.in/api/users?`)
        .then((res) => {
          if (res.status == 200) {
            resolve([
              ["Country", "Popularity"],
              ["Germany", 200],
              ["United States", 300],
              ["Brazil", 400],
              ["Canada", 500],
              ["France", 600],
              ["RU", 700],
            ])
          } else {
            reject(new Error("error"))
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
}

export default api
