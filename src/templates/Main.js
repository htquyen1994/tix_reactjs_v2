import { Route } from "react-router-dom";
import Header from "../components/Home/Header/Header";

const HomeLayout = (props) => {
    return <>
        <Header/>
        <main style={{width: '100%', }}>{props.children}</main>
    </>
}

const RouteMain = (props) => {
    const {Component, ...router} = props;
    return (
        <Route {...router}>
            <HomeLayout>
                <Component/>
            </HomeLayout>
        </Route>
    );
}

export default RouteMain;