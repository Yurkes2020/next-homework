import { User } from "@/app/models/types";
import {fetchUser} from "@/app/servises/api.servise";
import {SearchParams} from "next/dist/server/request/search-params";

type Props ={
	params: Promise<{ id: string }> ;
	searchParams: Promise<SearchParams>
}


export default async function UserPage({ params,searchParams }: Props )  {
	const {id} = await params;
	const user: User = await fetchUser(id);

	return (
		<div>
			<h1>{user.name}</h1>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
		</div>
	);
}
