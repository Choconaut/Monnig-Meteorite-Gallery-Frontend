<template>
  <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
  <form class="box">
    <router-link :to="{ name: 'search' }" class="link">
      <img class="return-img" src="/cometL.png" />
    </router-link>

    <h3>Sign In</h3>

    <label for="username">Username</label>
    <input type="text" placeholder="Username" />

    <label for="password">Password</label>
    <input type="password" placeholder="Password" />

    <button>Log In</button>
    <div class="account">
      <!--Change to vue router if create is needed-->
      <a class="link" href="#create.html">Create Account</a>
    </div>
  </form>
</template>

<style scoped>
form {
  width: 400px;
  background-color: #131921;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 15px 35px;
}
form * {
  font-family: "Roboto", sans-serif;
  color: #f6f6f6;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 30px;
  width: 100%;
  background-color: #f6f6f6;
  color: #080710;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
}

.account {
  text-align: center;
  padding: 1rem;
}

.link {
  display: block;
  text-align: center;
  color: #fff;
  text-decoration: none;
}

.return-img {
  width: 5rem;
  height: 5rem;
}
</style>
