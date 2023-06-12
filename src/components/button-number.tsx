export type ButtonNumberProps = {
    number: number
}
export default function ButtonNumber ({number} : ButtonNumberProps) {
    return (
        <div className="bg-number button">
            {number}
        </div>
    )
}

// export default ButtonNumber;

