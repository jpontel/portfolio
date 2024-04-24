import {Fragment} from 'react';
import Home from "./modules/Home";
import About from "./modules/About";
import Navbar from "./modules/Navbar";
import Experience from "./modules/Experience";

export default function App() {
    return (
        <Fragment>
            <div className={"w-full h-full bg-[#11071F]"}>
                <Navbar/>
                <div className={'items-center justify-center 2xl:px-[300px] 2xl:py-[90px]'}>
                    <Home/>
                    <About/>
                    <Experience/>
                </div>
            </div>
        </Fragment>
    );
}

