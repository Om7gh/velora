export async function sendHomeData(data: FormData) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/portfolio/home`,
    {
      method: "POST",
      credentials: "include",
      body: data,
    },
  );

  if (!res.ok) {
    throw new Error(" failed to POST data ");
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}
