import {Post} from "@/app/models/types";
import {fetchPost} from "@/app/servises/api.servise";
import {SearchParams} from "next/dist/server/request/search-params";

type Props ={
	params: Promise<{ id: string }> ;
	searchParams: Promise<SearchParams>
}


export default async function PostPage({ params,searchParams }: Props)

{
	const {id} = await params;
	const post: Post = await fetchPost(id);

	console.log(id)

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<p>Author ID: {post.userId}</p>
		</div>
	);
}
