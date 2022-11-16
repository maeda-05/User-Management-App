import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
	children: ReactNode;
	onClick: () => void;
	disabled?: boolean;
	isLoading?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
	const { children, onClick, disabled = false, isLoading = false } = props;
	return (
		<>
			<Button
				bg="teal.400"
				color="whatsapp.100"
				_hover={{ opacity: 0.8 }}
				onClick={onClick}
				disabled={disabled || isLoading}
				isLoading={isLoading}
			>
				{children}
			</Button>
		</>
	);
});
