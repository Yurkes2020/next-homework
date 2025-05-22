import { User } from "@/app/models/types";
import {fetchUser} from "@/app/servises/api.servise";

type Props ={
	params: Promise<{ id: string }> ;
}


export default async function UserPage({ params }: Props )  {
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
