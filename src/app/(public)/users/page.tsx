import {User} from "@/app/models/types";
import {fetchUsers} from "@/app/servises/api.servise";
import UserComponent from "@/app/components/userComponent";

export default async function UsersPage() {
	const users: User[] = await fetchUsers();

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<UserComponent user={user} key={user.id}/>
				))}
			</ul>
		</div>
	);
}
