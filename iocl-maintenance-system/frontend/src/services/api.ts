const BASE_URL = "http://127.0.0.1:8000";

export async function predictPump(data: {
  temperature: number;
  vibration: number;
  pressure: number;
}) {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// #eyatu kiba ata issue!