import IcBaselinePlusMinusAlt from "../icones/IcBaselinePlusMinusAlt";

export type ButtonSymbolProps = {
    symbol: string
}
export default function ButtonSymbol ({symbol} : ButtonSymbolProps) {
    function checkValue(value: string) {
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
                console.log('some error')
        }
        return symbol;
    }
    return (
        <div className="bg-symbol button text-metal">
            {checkValue(symbol)}
        </div>
    )
}