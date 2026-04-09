const API_BASE_URL = 'http://192.168.0.194:3000';

export async function fetchAPI(props: fetchAPIprops) {
    const method = props.method || 'GET';
    const normalizedPath = props.url.replace(/^\/+/, '');

    const response = await fetch(`${API_BASE_URL}/${normalizedPath}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        credentials: 'include',
        ...(method !== 'GET' && props.data !== undefined
            ? { body: JSON.stringify(props.data) }
            : {})
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}

interface fetchAPIprops {
    url: string,
    method?: string,
    data?: any
}