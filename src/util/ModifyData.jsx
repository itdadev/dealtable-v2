export function returnNull(data) {
  if (data !== "" || data) {
    return data;
  }

  return null;
}
