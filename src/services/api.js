const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Fetch JSON from the configured backend and provide a useful error message.
 */
export async function apiGet(path) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`API request failed (${response.status}): ${path}`);
  }

  return response.json();
}
