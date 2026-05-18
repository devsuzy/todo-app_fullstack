const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const taskApi = {
  getAll: () =>
    fetch(`${BASE_URL}/tasks`).then((res) => res.json()),

  create: (title: string) =>
    fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    }).then((res) => res.json()),

  update: (id: string, data: Partial<{ title: string; isCompleted: boolean }>) =>
    fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),

  delete: (id: string) =>
    fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" }),
};
