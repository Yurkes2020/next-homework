import Link from "next/link";
import {Post} from "@/app/models/types";

type Props = {
	post: Post;
}

export default async function PostComponent({post}: Props) {


	return (
		<>
			<li >
				<Link href={`/post/${post.id}`}>{post.title}</Link>
			</li>
		</>
	);
}