class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "aaaa" && password === "1234") ||
          (id === "bbbb" && password === "5678")
        ) {
          resolve(id);
        } else {
          reject(new Error("로그인실패"));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "aaaa") {
          resolve({ name: "aaaa", role: "admin" });
        } else {
          reject(new Error("no acess"));
        }
      }, 1000);
    });
  }
}
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user))
  .then((user) => alert(`Hello ${user.name}, your role is ${user.role}!`))
  .catch((error) => console.log(error));
