import Link from "next/link";
import {Comment} from "@/app/models/types";

type Props = {
	comment: Comment;
}

export default async function CommentComponent({comment}: Props) {


	return (
		<>
			<li >
				<Link href={`/comments/${comment.id}`}>
					{comment.name}
				</Link>
			</li>
		</>
	);
}