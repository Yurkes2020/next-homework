const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
	const res = await fetch(`${BASE_URL}/users`);
	return res.json();
};

export const fetchUser = async (id: string) => {
	const res = await fetch(`${BASE_URL}/users/${id}`);
	return res.json();
};

export const fetchPosts = async () => {
	const res = await fetch(`${BASE_URL}/posts`);
	return res.json();
};

export const fetchPost = async (id: string) => {
	const res = await fetch(`${BASE_URL}/posts/${id}`);
	return res.json();
};

export const fetchComments = async () => {
	const res = await fetch(`${BASE_URL}/comments`);
	return res.json();
};

export const fetchComment = async (id: string) => {
	const res = await fetch(`${BASE_URL}/comments/${id}`);
	return res.json();
};
