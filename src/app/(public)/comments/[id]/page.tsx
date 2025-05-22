import {fetchComment} from "@/app/servises/api.servise";
import {Comment} from "@/app/models/types";
import {SearchParams} from "next/dist/server/request/search-params";

type Props ={
	params: Promise<{ id: string }> ;
	searchParams: Promise<SearchParams>
}


export default async function CommentPage({ params,searchParams }: Props) {
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

