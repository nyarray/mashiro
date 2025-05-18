import path from 'path'
import fs from 'fs/promises'
import { log, error, debug } from 'console'

it('test', async () => {
  expect(true).toBe(true)
})

it('test', async () => {
  const files = await fs.readdir('E:/Games/COM3D2 Ultimate Edition/Mod/__Addons__', { recursive: true })
  const menuFiles = files.filter(item => item.endsWith('.menu')).map(item => ({ path: item, name: path.basename(item) }))

  interface ModFile {
    path: string,
    name: string,
  }
  var newarr: [ModFile, ModFile][] = [];
  for (var i = 0; i < menuFiles.length; i++) {
    const j = menuFiles.findIndex(item => item.name == menuFiles[i].name)

    if (j != i) {
      newarr.push([menuFiles[i], menuFiles[j]]);
    }
  }
  newarr.sort((a, b) => {
    if (a[0].path < b[0].path) {
      return -1;
    }
    if (a[0].path > b[0].path) {
      return 1;
    }
    return 0;
  })
  const text = newarr.map(item => `${item[0].path}\n${item[1].path}`).join('\n\n')
  console.log(text)
  await fs.writeFile(path.join('diff_list.txt'), `${text}\n\n共${newarr.length}项重复\n总和${menuFiles.length}项\n`)
  
  expect(true).toBe(true)

}, 1000 * 60 * 60 * 24)

