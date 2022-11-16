import {
	Box,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
	imgUrl: string;
	userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
	const { id, imgUrl, userName, fullName, onClick } = props;
	return (
		<>
			<Box
				w="260px"
				h="260px"
				bg="gray.300"
				borderRadius="10px"
				shadow="md"
				p={4}
        _hover={{ cursor: "pointer", opacity: ".8" }}
        onClick={() => onClick(id)}
			>
				<Stack textAlign="center">
					<Image
						src={imgUrl}
						boxSize="160px"
						borderRadius="full"
						alt={userName}
						m="auto"
					/>
					<Text fontSize="lg" fontWeight="bold">
						{userName}
					</Text>
					<Text fontSize="sm" color="gray">
						{fullName}
					</Text>
				</Stack>
			</Box>
		</>
	);
});
