export default async function fetchAPI(url) {
  const response = await fetch(
    `https://62954e4da7203b3ed0799903.mockapi.io/api/newsgaming${url}`
  );
  return await response.json();
}
