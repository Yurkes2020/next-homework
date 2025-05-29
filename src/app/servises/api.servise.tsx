import {Post, User, Comment} from "@/app/models/types";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async ():Promise<User[]> => {
	const res = await fetch(`${BASE_URL}/users`);
	return res.json();
};

export const fetchUser = async (id: string):Promise<User> => {
	const res = await fetch(`${BASE_URL}/users/${id}`);
	return res.json();
};

export const fetchPosts = async ():Promise<Post[]> => {
	const res = await fetch(`${BASE_URL}/posts`);
	return res.json();
};

export const fetchPost = async (id: string):Promise<Post> => {
	const res = await fetch(`${BASE_URL}/posts/${id}`);
	return res.json();
};

export const fetchComments = async ():Promise<Comment[]> => {
	const res = await fetch(`${BASE_URL}/comments`);
	return res.json();
};

export const fetchComment = async (id: string):Promise<Comment> => {
	const res = await fetch(`${BASE_URL}/comments/${id}`);
	return res.json();
};
