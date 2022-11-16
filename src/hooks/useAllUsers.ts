import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";

export const useAllUsers = () => {
	const { showMessage } = useMessage();
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState<User[]>([]);

	const getUsers = useCallback(() => {
		setIsLoading(true);
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.catch(() => {
				showMessage({
					title: "ユーザー取得に失敗しました",
					status: "error"
				});
			})
			.finally(() => setIsLoading(false));
	}, [showMessage]);
	return { getUsers, isLoading, users };
};
