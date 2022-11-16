import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "../router/homeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
	return (
		<Switch>
			<LoginUserProvider>
				<Route exact path="/">
					<Login />
				</Route>
				<Route
					path="/home"
					render={({ match: { url } }) => {
						return (
							<Switch>
								{homeRoutes.map((route) => {
									return (
										<Route
											key={route.path}
											path={`${url}${route.path}`}
											exact={route.exact}
										>
											<HeaderLayout>{route.children}</HeaderLayout>
										</Route>
									);
								})}
							</Switch>
						);
					}}
				/>
			</LoginUserProvider>
			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	);
});
