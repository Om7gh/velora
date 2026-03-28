export async function logout() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh/logout`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok && res.status !== 204) {
    throw new Error("Logout failed");
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}
