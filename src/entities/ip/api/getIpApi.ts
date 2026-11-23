interface IpifyResponse {
    ip: string;
}

export const getIpApi = async (): Promise<string> => {
    const response = await fetch("https://api.ipify.org?format=json");

    if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const data: IpifyResponse = await response.json();
    return data.ip;
};
