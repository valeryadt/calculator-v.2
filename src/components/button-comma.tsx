export type ButtonCommaProps = {
    comma: string
}

export default function ButtonComma({comma}: ButtonCommaProps) {
    return (
        <div className="button bg-number hover:bg-number-press transition ease-in-out">
            {comma}
        </div>
    )
}