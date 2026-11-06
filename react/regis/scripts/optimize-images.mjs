import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const roots = ['src/assets/img', 'src/assets/certificados']
const exts = new Set(['.png', '.jpg', '.jpeg'])
const MAX_W = 1600
const QUALITY = 82

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase()
  if (!exts.has(ext)) return null

  const out = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const meta = await sharp(file, { failOn: 'none' }).metadata()
  let pipeline = sharp(file, { failOn: 'none' })

  if (meta.width && meta.width > MAX_W) {
    pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true })
  }

  await pipeline.webp({ quality: QUALITY, effort: 4 }).toFile(out)

  return {
    file,
    out,
    before: fs.statSync(file).size,
    after: fs.statSync(out).size,
  }
}

const results = []

for (const root of roots) {
  if (!fs.existsSync(root)) continue

  for (const name of fs.readdirSync(root)) {
    const full = path.join(root, name)
    if (!fs.statSync(full).isFile()) continue

    try {
      const result = await convertFile(full)
      if (result) results.push(result)
    } catch (error) {
      console.error('FAIL', full, error.message)
    }
  }
}

let before = 0
let after = 0

for (const result of results) {
  before += result.before
  after += result.after
  const pct = ((1 - result.after / result.before) * 100).toFixed(0)
  console.log(
    `${(result.before / 1024).toFixed(0)}K -> ${(result.after / 1024).toFixed(0)}K (-${pct}%)  ${path.basename(result.file)}`
  )
}

console.log(
  'TOTAL',
  `${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
  `(-${((1 - after / before) * 100).toFixed(0)}%)`,
  'files',
  results.length
)
