const ColoredText = props => (
    <div>
        {props.children}
        <style jsx>{`
            div {
                color: ${props.color};
            }
        `}</style>
    </div>
)

export default ColoredText;