import {fetchComments} from "@/app/servises/api.servise";
import {Comment} from "@/app/models/types";
import CommentComponent from "@/app/components/commentComponent";

export default async function CommentsPage() {
	const comments: Comment[] = await fetchComments();

	return (
		<div>
			<h1>Comments</h1>
			<ul>
				{comments.slice(0, 20).map(comment => (
					<CommentComponent key={comment.id} comment={comment}/>
				))}
			</ul>
		</div>
	);
}
