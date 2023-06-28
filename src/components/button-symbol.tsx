import IcBaselinePlusMinusAlt from "../icones/IcBaselinePlusMinusAlt";
import React, {JSX} from "react";

export type ButtonSymbolProps = {
    symbol: string,
    buttonHandler: (event: React.MouseEvent<HTMLDivElement>) => void
}
export default function ButtonSymbol ({symbol, buttonHandler} : ButtonSymbolProps) {
    function checkValue(value: string): string | JSX.Element {
        let symbol;
        switch(value) {
            case 'AC':
                symbol = 'AC'
                break;
            case 'C':
                symbol = 'C'
                break;
            case '?':
                symbol = <IcBaselinePlusMinusAlt className="font-extrabold" />
                break;
            case '%':
                symbol = '%'
                break;
            default:
                throw new Error('error')
        }
        return symbol;
    }
    return (
        <div className="bg-symbol transition hover:bg-symbol-press ease-in-out button text-metal" onClick={buttonHandler}>
            {checkValue(symbol)}
        </div>
    )
}