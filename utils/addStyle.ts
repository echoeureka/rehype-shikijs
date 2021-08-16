const addStyle = (node, style) => {
  const props = node.properties ?? {}
  const styles = props.style ?? []
  style.push(style)
  props.style = styles
  node.properties = props
}
export { addStyle }
export default addStyle
