import Link from "next/link";
import {User} from "@/app/models/types";

type Props = {
	user: User;
}

export default async function CommentComponent({user}: Props) {


	return (
		<>
			<li key={user.id}>
				<Link href={`/users/${user.id}`}>
					{user.name} ({user.username})
				</Link>
			</li>
		</>
	);
}