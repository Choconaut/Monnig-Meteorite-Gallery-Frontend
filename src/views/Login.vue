<template>
  <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
  <Form 
    @submit="login" 
    :validation-schema="validationSchema" 
    v-slot="{ errors }"
    class="box"
  >

    <router-link :to="{ name: 'search' }" class="link">
      <img class="return-img" src="/cometL.png" />
    </router-link>

    <h3>Sign In</h3>

    <label>Email Address</label>
    <Field
      name="username"
      as="input"
      type="text"
      label="username"
      placeholder="Email Address"
      v-model="loginInfo.username"
    />

    <ErrorMessage 
      name="username" 
        as="div"
    ></ErrorMessage>

    <label for="password">Password</label>
    <Field
      name="password"
      as="input"
      type="password"
      label="Password"
      placeholder="Password"
      v-model="loginInfo.password"
    />

    <ErrorMessage 
      name="password" 
      as="div"
    ></ErrorMessage>

    <button type="submit">Log In</button>
    <div class="cAccount">
      <!--Change to vue router if create is needed-->
      <a class="link" href="#create.html">Create Account</a>
    </div>
  </Form>
</template>

<script>
import utils from "../utils";
import searchBar from "../components/searchBar.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import userApi from "../apis/userApi"

export default {
  data() {
    return {
      loginInfo: {
        username: '',
        password: ''
      },
      validationSchema: yup.object({
        username: yup.string().required().email().label("Email"),
        password: yup.string().required().min(3).label("Password"), //password is min length 3
      }),
    };
  },
  components: {
    searchBar,
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    login(values) {
      console.log(this.loginInfo)              //check what's being sent
      // utils.userLoginUtils.login(values);
      userApi.login(values)
    },
  },
};
</script>

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

.cAccount {
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
