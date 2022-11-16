import {
	Box,
	Divider,
	Flex,
	Heading,
	Input,
	Stack
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
	const { login, isLoading } = useAuth();

	const [userID, setUserID] = useState("");

	const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) =>
		setUserID(e.target.value);

	const onClickLogin = () => login(userID);

	return (
		<>
			<Flex align="center" justify="center" height="100vh">
				<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading as="h1" size="lg" textAlign="center">
						ユーザー管理アプリ
					</Heading>
					<Divider my={4} />
					<Stack spacing={6} py={4} px={10}>
						<Input
							placeholder="ユーザーID"
							value={userID}
							onChange={onChangeUserID}
						/>
						<PrimaryButton
							onClick={onClickLogin}
							isLoading={isLoading}
							disabled={userID === ""}
						>
							ログイン
						</PrimaryButton>
					</Stack>
				</Box>
			</Flex>
		</>
	);
});
