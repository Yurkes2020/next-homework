import {fetchComment} from "@/app/servises/api.servise";
import {Comment} from "@/app/models/types";

type Props ={
	params: Promise<{ id: string }> ;
}


export default async function CommentPage({ params }: Props) {
	const {id} = await params;
	const comment: Comment = await fetchComment(id);

	return (
		<div>
			<h1>{comment.name}</h1>
			<p>{comment.body}</p>
			<p>From: {comment.email}</p>
		</div>
	);
}

