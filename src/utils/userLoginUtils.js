import cache from "../utils/cacheUtils";
import router from "../router";
import userApi from "../apis/userApi";
import useUserStore from "../store/userStore";
import autoloadDynamicRoutes from "../router/loadDynamicRoutes";

export async function login(loginInfo) {
  const {
    result: { token },
  } = await userApi.login(loginInfo);

  cache.set("login_token", { token }, 600); // token is valid for 600 sec

  // Once the user is successfully logged in
  // get user info and save it to Pinia, then we can have access to user's permission list in different components
  const userStore = useUserStore();
  await userStore.getUserInfo();

  autoloadDynamicRoutes(router);

  const routeName = "home";
  router.push({ name: routeName });
}
export function logout() {
  cache.remove("login_token");

  // remove user info from Pinia store
  const userStore = useUserStore();
  userStore.userInfo = null;

  // redirect to root page
  router.push("/home");
}
