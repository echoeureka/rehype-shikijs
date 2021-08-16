import { u } from 'unist-builder'

const tokenToHast = (lines) => {
  const tree = []
  for (const line of lines) {
    if (line.length === 0) tree.push(u('text', '\n'))
    else {
      for (const token of line) {
        tree.push(
          u(
            'element',
            {
              tagName: 'span',
              properties: { style: `color: ${token.color}` }
            },
            [u('text', token.content)]
          )
        )
      }
      tree.push(u('text', '\n'))
    }
  }
  tree.pop()
  return tree
}

export { tokenToHast }
export default tokenToHast

// console.log(u('text', '\n'))
// console.log(
//   u('element', {
//     tagName: 'span',
//     properties: { style: `color: red` }
//   })
// )
