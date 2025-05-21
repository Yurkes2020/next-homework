import Link from "next/link";
import {User} from "@/app/models/types";

type Props = {
	user: User;
}

export default async function UserComponent({user}: Props) {


	return (
		<>
			<li>
				<Link href={{pathname: `/users/${user.id}`, query: {user: user.name}}}>
					{user.name}
				</Link>
			</li>
		</>
	);
}