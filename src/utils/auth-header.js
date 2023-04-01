export default function authHeader() {
  const token = localStorage.getItem("authToken");

  if (token) {
    return { authtoken: token };
  } else {
    return {};
  }
}
