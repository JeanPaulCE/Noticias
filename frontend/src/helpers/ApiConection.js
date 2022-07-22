import axios from "axios";
// import { useRouter } from "vue-router";
import router from "../router";
class ApiConection {
  constructor() {
    axios.defaults.baseURL =
      "http://192.168.100.5/NewsGaming-bakend/public/api";
    if (localStorage.getItem("token") != undefined) {
      let token = localStorage.getItem("token");
      axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;

      let refresh = localStorage.getItem("refresh");
      axios.defaults.headers.post["refresh"] = refresh;
    }
    axios.defaults.headers.post["Accept"] = "application/json";
  }

  err(err) {
    // const router = useRouter();
    switch (err.response.status) {
      case 401:
        window.scrollTo(0, 0);
        router.push({ name: "LogIn" });
        break;

      default:
        break;
    }
  }
  api_url() {
    return "http://192.168.100.5/NewsGaming-bakend/public";
  }

  perfil() {
    return new Promise((resolve, reject) => {
      axios
        .post("perfil")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  /**
   *
   * @param {json} data
   */
  editPerfil(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("editPerfil", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  /**
   *
   * @param {json} data
   */
  resPasword(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("resPasword", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  /**
   *
   * @param {json} data
   */
  like(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("like", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  getLikes() {
    return new Promise((resolve, reject) => {
      axios
        .post("getLikes")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  favoritos() {
    return new Promise((resolve, reject) => {
      axios
        .post("favoritos")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  favoritos() {
    return new Promise((resolve, reject) => {
      axios
        .post("favoritos")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  addFavoritos(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("addFavoritos", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  categories() {
    return new Promise((resolve, reject) => {
      axios
        .post("categories")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  search(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("search", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  detalle(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("detalle", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  popular() {
    return new Promise((resolve, reject) => {
      axios
        .post("popular")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  all() {
    return new Promise((resolve, reject) => {
      axios
        .post("all")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  reciente() {
    return new Promise((resolve, reject) => {
      axios
        .post("reciente")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  addnew(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("addnew", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  deleteNew(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("deleteNew", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }

  parati() {
    return new Promise((resolve, reject) => {
      axios
        .post("parati")
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  editNew(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("editNew", data)
        .then((res) => {
          resolve(res);
        })
        .catch((x) => {
          this.err(x);
          reject(x);
        });
    });
  }
  /**
   *
   * @param {json} data
   */
  login(data) {
    return new Promise((resolve, reject) => {
      this.refresh()
        .then(resolve)
        .catch((err) => {
          axios
            .post("login", data)
            .then((res) => {
              let token = res.data.accessToken;
              let refresh = res.data.refresh;

              localStorage.setItem("token", token);
              localStorage.setItem("refresh", refresh);

              axios.defaults.headers.common["Authorization"] =
                "Bearer " + token;
              axios.defaults.headers.common["refresh"] = refresh;

              resolve();
            })
            .catch((err) => {
              reject();
            });
        });
    });
  }

  logOut() {
    return new Promise((resolve, reject) => {
      axios
        .post("logout")
        .then((res) => {
          resolve();
        })
        .catch((err) => {
          reject();
        });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
      axios
        .post("register", data)
        .then((res) => {
          resolve();
        })
        .catch((err) => {
          reject();
        });
    });
  }

  refresh() {
    return new Promise((resolve, reject) => {
      if (axios.defaults.headers.post["Authorization"] != undefined) {
        axios
          .post("refresh")
          .then((res) => {
            let token = res.data.accessToken;
            let refresh = res.data.refresh;

            localStorage.setItem("token", token);
            localStorage.setItem("refresh", refresh);

            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            axios.defaults.headers.common["refresh"] = refresh;

            resolve();
          })
          .catch((err) => {
            reject();
          });
      } else reject("inesesario");
    });
  }
}
var apiConection = new ApiConection();
export default apiConection;
