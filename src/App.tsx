import React, {JSX, useState} from 'react';
import './App.css';
import Image from './/image/mockup.png'
import ButtonNumber from "./components/button-number";
import ButtonSymbol from "./components/button-symbol";
import ButtonOperator from "./components/button-operator";
import ButtonZero from "./components/button-zero";
import ButtonComma from "./components/button-comma";
import MdiGithub from "./icones/MdiGithub";
import AkarIconsLinkedinV1Fill from "./icones/AkarIconsLinkedinV1Fill";
import BiTelegram from "./icones/BiTelegram";
import IconoirInternet from "./icones/IconoirInternet";


function App() {
    const [panel, setPanel] = useState(0)

    const checkCancel = (state: number): string => state > 0 ? 'C' : 'AC'

    return (
        <div className="calculator__container flex justify-center items-center h-full w-full">
            <div className="relative">
                <img src={Image} alt="lorem"/>
            </div>
            <div
                className="absolute w-72 h-128 pl-5 pr-5 pb-3 mt-24 rounded-b-3xl flex items-center flex-col justify-end">
                <div className="calculator__result-panel text-4xl text-white w-full pb-4 text-right"
                     style={{fontSize: '50px'}}>
                    {panel}
                </div>
                <div className="flex gap-2">
                    <div className="buttons-panel flex flex-col gap-2">
                        <div className="grid-cols-3 gap-2 grid-rows-1 grid text-white">
                            <ButtonSymbol symbol={checkCancel(panel)}/>
                            <ButtonSymbol symbol={'?'}/>
                            <ButtonSymbol symbol={'%'}/>
                        </div>
                        <div className="calculator__panel grid-cols-3 gap-2 grid-rows-3 grid text-white">
                            <ButtonNumber number={7}/>
                            <ButtonNumber number={8}/>
                            <ButtonNumber number={9}/>
                            <ButtonNumber number={4}/>
                            <ButtonNumber number={5}/>
                            <ButtonNumber number={6}/>
                            <ButtonNumber number={1}/>
                            <ButtonNumber number={2}/>
                            <ButtonNumber number={3}/>
                        </div>
                        <div className="h-full text-white flex justify-start gap-2">
                            <ButtonZero/>
                            <ButtonComma comma={','}/>
                        </div>
                    </div>
                    <div className="operations-btns flex flex-col gap-2">
                        <ButtonOperator symbol={'/'}/>
                        <ButtonOperator symbol={'*'}/>
                        <ButtonOperator symbol={'-'}/>
                        <ButtonOperator symbol={'+'}/>
                        <ButtonOperator symbol={'='}/>
                    </div>
                </div>
                <div className="bg-white h-1 w-28 rounded-xxl mt-8"/>
            </div>
            <div className="absolute right-0 bottom-0 m-5 flex gap-2 text-xl">
                <a href="https://github.com/valeryadt" target="_blank">
                    <MdiGithub className="cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/valeriya-dashdamirova-15bb88273/" target="_blank">
                    <AkarIconsLinkedinV1Fill className="cursor-pointer"/>
                </a>
                <a href="https://t.me/afsaffsf" target="_blank">
                    <BiTelegram className="cursor-pointer"/>
                </a>
                <a href="https://afsaffsf.com/" target="_blank">
                    <IconoirInternet className="cursor-pointer"/>
                </a>
            </div>
        </div>
    );
}

export default App;
