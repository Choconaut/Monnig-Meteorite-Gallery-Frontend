const info = async () => {
    return await fetch('https://monnig-meteor-online.azurewebsites.net/api/v1/users/login').then((r) => r.json());
  };
  
  const login = async (loginInfo) => {
    return await fetch('https://monnig-meteor-online.azurewebsites.net:8080/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    }).then((r) => r.json());
  };
  
  export default { login };
  