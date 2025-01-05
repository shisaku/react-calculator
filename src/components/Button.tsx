type Props = {
    children?: React.ReactNode
    onClick?: () => void
}

export const Button = (props: Props) => {
    return <button onClick={props.onClick}>{props.children}</button>
}
