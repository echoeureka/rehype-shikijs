const codeLanguage = (node) => {
  const className = node.properties.className ?? []
  for (const element of className)
    if (element.slice(0, 9) === 'language-') return element.slice(9)
  return null
}

export { codeLanguage }
export default codeLanguage
