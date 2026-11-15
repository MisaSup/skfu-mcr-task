export async function getIpApi(): Promise<string> {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok){
        throw new Error("ошибочка сети!")
    }
    const data = await response.json();
    return data.ip;
}