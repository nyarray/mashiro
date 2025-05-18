import fs from 'fs/promises'
import path from 'path'

it('test', async () => {
    const dataPath = 'C:/Users/Nyarray/Downloads/新建文件夹/data/apotheosis/affixes'
    const files = await fs.readdir(dataPath, { recursive: true })
    const jsonFiles = files.filter(item => item.endsWith('.json')).map(item => ({ path: item, name: path.basename(item) }))

    interface JsonFile {
        values: object,
        // name: string,
    }
    interface Struct {
        min: number,
        steps: number,
        step: number
    }
    for (const json of jsonFiles) {
        console.log(json.path);
        
        const data = JSON.parse(await fs.readFile(json.path, 'utf-8'))
        console.log(data);
        
    }
    // var newarr: [ModFile, ModFile][] = [];

    // for (var i = 0; i < menuFiles.length; i++) {
    //     const j = menuFiles.findIndex(item => item.name == menuFiles[i].name)

    //     if (j != i) {
    //         newarr.push([menuFiles[i], menuFiles[j]]);
    //     }
    // }
    // newarr.sort((a, b) => {
    //     if (a[0].path < b[0].path) {
    //         return -1;
    //     }
    //     if (a[0].path > b[0].path) {
    //         return 1;
    //     }
    //     return 0;
    // })
    // const text = newarr.map(item => `${item[0].path}\n${item[1].path}`).join('\n\n')
    // console.log(text)
    // await fs.writeFile(path.join('diff_list.txt'), `${text}\n\n共${newarr.length}项重复\n总和${menuFiles.length}项\n`)

    expect(true).toBe(true)

}, 1000 * 60 * 60 * 24)

