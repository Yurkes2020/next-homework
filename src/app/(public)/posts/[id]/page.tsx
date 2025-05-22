import {Post} from "@/app/models/types";
import {fetchPost} from "@/app/servises/api.servise";

type Props ={
	params: Promise<{ id: string }> ;
}

export default async function PostPage({ params }: Props)

{
	const {id} = await params;
	const post: Post = await fetchPost(id);

	console.log(post)

	console.log(id)

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<p>Author ID: {post.userId}</p>
		</div>
	);
}
