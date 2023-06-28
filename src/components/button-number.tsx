import React from "react";

export type ButtonNumberProps = {
    number: number,
    buttonHandler: (event: React.MouseEvent<HTMLDivElement>, number: number) => void
}
export default function ButtonNumber ({number, buttonHandler} : ButtonNumberProps) {
    return (
        <div className="bg-number button hover:bg-number-press transition ease-in-out" onClick={(e) => buttonHandler(e, number)}>
            {number}
        </div>
    )
}

// export default ButtonNumber;

