import React from "react";

export type ButtonZeroProps = {
    buttonHandler: (event: React.MouseEvent<HTMLDivElement>, number: number) => void
}
export default function ButtonZero ({buttonHandler}: ButtonZeroProps) {
    return (
        <div className="bg-number cursor-pointer rounded-xxl font-medium text-2xl flex justify-start pl-5 items-center hover:bg-number-press transition ease-in-out" style={{width: '7.5rem'}} onClick={(e) => buttonHandler(e, 0)}>
            0
        </div>
    )
}