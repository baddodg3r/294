import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

const Layout = () => {
    return (
        <div className="App">
            {/* {Navigation} */}
            {/*component ohne Props*/}
            <Navigation />
            {/*Header mit logo und Frage*/}
            <header className="App-header">
                <img src="/vite.svg" className="App-logo" alt="logo" />
                <h1>Willkommen beim WISS-Quiz!</h1>

            </header>

            <Outlet></Outlet>



        </div>
    );
};

export default Layout;
