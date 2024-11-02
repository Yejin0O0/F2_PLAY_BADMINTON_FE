const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// TODO: class 화 해보는 것도 좋을듯
const restClient = {
  get: async <T>(url: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    // if (!response.ok) {
    //   return response.status;
    // }
    const data = await response.json();
    return data as T;
  },
  post: async <T>(url: string, body: string) => {
    // TODO: body object로 받고, 이 안에서 stringfy 하기
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  },
  postImage: async <T>(url: string, image: FormData) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      credentials: "include",
      body: image,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data as T;
  },
  patch: async <T>(url: string, body: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  },
};

export default restClient;