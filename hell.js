//콜백체인.. 콜백지옥...
//1.가독성 떨어짐
//2.비즈니스 로직 이해하기 어려움

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "aaaa" && password === "9603") ||
        (id === "bbbb" && password === "1234")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "aaaa") {
        onSuccess({ name: "aaaa", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
            alert(`hello ${userWithRole.name}, your role is ${userWithRole.role}`)
      },
      (error) => {
            alert('role is null')
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
