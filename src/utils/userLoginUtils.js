// import cache from "../utils/cacheUtils";
// import router from "../router";
// import userApi from "../apis/userApi";
// import useUserStore from "../store/userStore";
// import autoloadDynamicRoutes from "../router/loadDynamicRoutes";

// export async function login(loginInfo) {
//   try {
//       // Make the API request
//       const response = await userApi.login(loginInfo);

//       // Deconstruct to get data directly
//       const { flag, message, data } = response;

//       // Check if the flag indicates a successful login
//       if (flag) {
//           // Store the token in cache
//           cache.set("login_token", { token: data.token }, 600); // token is valid for 600 seconds

//           // Use the token to get user info and save it to Pinia
//           const userStore = useUserStore();
//           await userStore.setUserInfo(data.userInfo, data.token); // Assuming setUserInfo method needs to be implemented

//           // Load dynamic routes based on user permissions
//           autoloadDynamicRoutes(router);

//           // Redirect to the home page
//           router.push({ name: "home" });
//       } else {
//           throw new Error('Login failed: ' + message);
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       throw error;  // Re-throw to handle it or show error messages in the UI
//   }
// }

// export function logout() {
//   cache.remove("login_token");

//   const userStore = useUserStore();
//   userStore.clearUserInfo(); // Assuming clearUserInfo method needs to be implemented

//   router.push("/home");
// }