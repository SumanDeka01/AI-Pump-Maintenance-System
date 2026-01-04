const BASE_URL = "http://127.0.0.1:8000";

export async function loginUser(username: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) {
    throw new Error("Invalid login");
  }

  return res.json();
}
