const ROOT_URL = "https://rest-surveys.herokuapp.com";

export async function login(dispatch, payload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${ROOT_URL}/auth/login`, requestOptions);
    const data = await response.json();
    if (data.username) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "LOGIN_ERROR", error: data.error });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  try {
    const response = await fetch(`${ROOT_URL}/auth/logout`, {
      method: "GET",
    });
    console.log(response);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
}
