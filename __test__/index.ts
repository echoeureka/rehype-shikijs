import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { readSync } from 'to-vfile'

import attacher from '../index.js'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { getHighlighter } from 'shiki'

const processor = unified()
  .use(remarkParse)
  .use(attacher)
  .use(remarkRehype)
  .use(rehypeStringify)

const process = (filePath: string) => processor.process(readSync(filePath))
const parse = (filePath: string) => processor.parse(readSync(filePath))

visit(parse('./readme.md'), 'code', (node) => {
  console.log(node)
  getHighlighter({})
    .then((highlighter) => {
      node.value = highlighter.codeToHtml(node.value, node.lang)
      return node
    })
    .then((node) => {
      console.log(node)
    })
})
