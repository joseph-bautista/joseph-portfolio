// Injects server-rendered HTML into dist/index.html so crawlers and
// no-JS visitors get the full page. The client then hydrates it.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const template = path.join(root, 'dist/index.html')
const server = path.join(root, 'dist-server/entry-server.js')

const { render } = await import(pathToFileURL(server).href)
const html = fs.readFileSync(template, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('Placeholder <!--app-html--> not found in dist/index.html')
fs.writeFileSync(template, html.replace('<!--app-html-->', render()))
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })
console.log('Prerendered dist/index.html')
