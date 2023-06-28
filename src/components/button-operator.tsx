import IcSharpDivide from "../icones/IcSharpDivide";
import IcOutlineMinus from "../icones/IcOutlineMinus";
import IcOutlinePlus from "../icones/IcOutlinePlus";
import IcSharpClose from "../icones/IcSharpClose";
import IcOutlineEquals from "../icones/IcOutlineEquals";

export type ButtonOperatorProps = {
    symbol: string
}
export default function ButtonOperator ({symbol} : ButtonOperatorProps) {
   function checkValue(value: string) {
       let symbol;
       switch (value) {
           case '/':
               symbol = <IcSharpDivide className="font-extrabold" />
               break;
           case '-':
               symbol = <IcOutlineMinus className="font-extrabold" />
               break;
           case '+':
               symbol = <IcOutlinePlus className="font-extrabold" />
            break;
           case '*':
               symbol = <IcSharpClose className="font-extrabold" />
            break;
           case '=':
               symbol = <IcOutlineEquals className="font-extrabold" />
               break;
           default:
               console.log('some problem')
       }
       return symbol;
   }

    return (
        <div className="bg-operation transition ease-in-out button text-white hover:bg-white hover:text-operation">
            {checkValue(symbol)}
        </div>
    )
}

