export type ButtonCommaProps = {
    comma: string
}

export default function ButtonComma({comma}: ButtonCommaProps) {
    return (
        <div className="button bg-number">
            {comma}
        </div>
    )
}