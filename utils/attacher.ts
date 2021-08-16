import { visit } from 'unist-util-visit'

const attacher = () => {
  const visitor = (node, index, parent) => {
    console.log(node)
  }

  const transformer = (tree) => {
    visit(tree, 'ParagraphNode', visitor)
  }

  return transformer
}

export { attacher }
export default attacher
