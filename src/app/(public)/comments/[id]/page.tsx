import {fetchComment} from "@/app/servises/api.servise";
import {Comment} from "@/app/models/types";


export default async function CommentPage({ params }: { params: { id: string } }) {
	const comment: Comment = await fetchComment(params.id);

	return (
		<div>
			<h1>{comment.name}</h1>
			<p>{comment.body}</p>
			<p>From: {comment.email}</p>
		</div>
	);
}

