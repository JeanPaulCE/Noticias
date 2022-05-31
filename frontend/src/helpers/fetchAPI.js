export default async function fetchAPI() {
    const response = await fetch('https://62954e4da7203b3ed0799903.mockapi.io/api/newsgaming/news');
    return await response.json();
}