// Initial Lab task

// export default function Content() {
//     return (<p>This is my first react application. SE God, if you exist, please help me!</p>);
// }

// Not making modifications by using props
export default function Content(props) {
    return (<p style={{color: props.color}}>{props.text}</p>)
}