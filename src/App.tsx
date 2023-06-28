import React, {useEffect, useState, MouseEvent} from 'react';
import './App.css';
import Image from './/image/mockup.png'
import ButtonNumber from "./components/button-number";
import ButtonSymbol from "./components/button-symbol";
import ButtonOperator from "./components/button-operator";
import ButtonZero from "./components/button-zero";
import ButtonComma from "./components/button-comma";
import MdiGithub from "./icones/sm/MdiGithub";
import IconoirInternet from "./icones/sm/IconoirInternet";
import LogosTelegram from "./icones/sm/LogosTelegram";
import DeviconLinkedin from "./icones/sm/DeviconLinkedin";


function App() {
    const [panelNum, setPanelNum] = useState(0)
    const [time, setTime] = useState(new Date())
    const [res, setRes] = useState([''])

    // const [clickedButton, setClickedButton] = useState('');

    // const buttonHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
    //     event.preventDefault();
    //
    //     // const button: HTMLDivElement = event.currentTarget;
    //     // setClickedButton(button.name)
    //     console.log('hi')
    // };

    const changeSign = (event: React.MouseEvent<HTMLDivElement>) => {
        if (panelNum) {
            setPanelNum(-panelNum)
        } else {
            setPanelNum(panelNum)
        }
    }

    const checkPercentage = (event: React.MouseEvent<HTMLDivElement>): void => {
        panelNum && setPanelNum(panelNum / 100 )
    }

    const resetState = (event: React.MouseEvent<HTMLDivElement>) => {
        setPanelNum(0);
        setRes([])
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const selectNumber = (event: React.MouseEvent<HTMLDivElement>, number: number) => {
        setPanelNum(number)
        const value = number.toString()
        console.log(typeof value, 'val')
        setRes([...res, value])
        console.log(res)
    }

    const checkCancel = (state: number): string => state > 0 ? 'C' : 'AC'

    const test = '1000000+1'
    const ress = Function("return " + test)()
    console.log(ress)

    return (
        <div className="calculator__container flex justify-center items-center h-full w-full">
            <div className="relative">
                <img src={Image} alt="lorem"/>
            </div>
            <div
                className="absolute w-72 pl-5 pr-5 pb-3 pt-40 rounded-b-3xl flex items-center flex-col justify-end">
                <div className="text-white font-bold absolute top-0 left-0 pl-9 pt-2" style={{fontSize: '12px'}}>
                    {time.toLocaleTimeString('en-US').slice(0, -6)}
                </div>
                <div className="calculator__result-panel text-4xl pr-1.5 text-white w-full pb-5 text-right"
                     style={panelNum.toString().length > 5 ? {fontSize: '50px'} : {fontSize: '70px'}}>
                    {panelNum}
                </div>
                <div className="flex gap-2">
                    <div className="buttons-panel flex flex-col gap-2">
                        <div className="grid-cols-3 gap-2 grid-rows-1 grid text-white">
                            <ButtonSymbol symbol={checkCancel(panelNum)} buttonHandler={resetState} />
                            <ButtonSymbol symbol={'?'} buttonHandler={changeSign}  />
                            <ButtonSymbol symbol={'%'} buttonHandler={checkPercentage} />
                        </div>
                        <div className="calculator__panel grid-cols-3 gap-2 grid-rows-3 grid text-white">
                            <ButtonNumber number={7} buttonHandler={selectNumber} />
                            <ButtonNumber number={8} buttonHandler={selectNumber} />
                            <ButtonNumber number={9} buttonHandler={selectNumber} />
                            <ButtonNumber number={4} buttonHandler={selectNumber} />
                            <ButtonNumber number={5} buttonHandler={selectNumber} />
                            <ButtonNumber number={6} buttonHandler={selectNumber} />
                            <ButtonNumber number={1} buttonHandler={selectNumber} />
                            <ButtonNumber number={2} buttonHandler={selectNumber} />
                            <ButtonNumber number={3} buttonHandler={selectNumber} />
                        </div>
                        <div className="h-full text-white flex justify-start gap-2">
                            <ButtonZero buttonHandler={selectNumber} />
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
            <div className="absolute right-0 bottom-0 m-5 flex-col flex gap-2 text-2xl items-center">
                <a href="https://github.com/valeryadt" target="_blank">
                    <MdiGithub className="cursor-pointer rounded-full"/>
                </a>
                <a href="https://www.linkedin.com/in/valeriya-dashdamirova-15bb88273/" target="_blank">
                    <DeviconLinkedin className="cursor-pointer text-blue-900"/>
                </a>
                <a href="https://t.me/afsaffsf" target="_blank">
                    <LogosTelegram className="cursor-pointer"/>
                </a>
                <a href="https://afsaffsf.com/" target="_blank">
                    <IconoirInternet className="cursor-pointer"/>
                </a>
                <a href="https://bmc.link/valeriyadt" target="_blank" className="mt-2">
                    <img src="https://i.giphy.com/media/TDQOtnWgsBx99cNoyH/giphy.webp" className="cursor-pointer h-8 w-8 animate-bounce" alt="bmac" />
                </a>
            </div>
        </div>
    );
}

export default App;
