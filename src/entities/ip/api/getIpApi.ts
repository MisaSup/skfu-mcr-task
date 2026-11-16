interface IpifyResponse {
  ip: string;
}

export async function getIpApi(): Promise<string> {
  const response = await fetch("https://api.ipify.org?format=json");
  
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const data = (await response.json()) as IpifyResponse;
  return data.ip;
}