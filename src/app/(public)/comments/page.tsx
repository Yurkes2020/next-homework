import Link from 'next/link';
import {fetchComments} from "@/app/servises/api.servise";
import {Comment} from "@/app/models/types";

export default async function CommentsPage() {
	const comments: Comment[] = await fetchComments();

	return (
		<div>
			<h1>Comments</h1>
			<ul>
				{comments.slice(0, 20).map(comment => (
					<li key={comment.id}>
						<Link href={`/comments/${comment.id}`}>
							{comment.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
