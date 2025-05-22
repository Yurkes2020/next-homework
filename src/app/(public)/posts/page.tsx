import {Post} from "@/app/models/types";
import { fetchPosts} from "@/app/servises/api.servise";
import PostComponent from "@/app/components/postComponent";


export default async function PostsPage() {
	const posts: Post[] = await fetchPosts();

	console.log(posts)

	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map(post => (
					<PostComponent key={post.id} post={post}/>
				))}
			</ul>
		</div>
	);
}
