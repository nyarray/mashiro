import fs from "fs/promises";
import path from "path";

const dataPath =
    "C:/Users/Nyarray/Downloads/apotheosis_patch_datapack/data/apotheosis/affixes";
const files = await fs.readdir(dataPath, { recursive: true });
const jsonFiles = files.filter((item) => item.endsWith(".json")).map(
    (item) => ({ path: path.join(dataPath, item), name: path.basename(item) })
);

// interface JsonFile {
//     values: object,
//     // name: string,
// }
// interface Struct {
//     min: number,
//     steps: number,
//     step: number
// }
for (const json of jsonFiles) {
    console.log(json.path);

    const data = JSON.parse(await fs.readFile(json.path, "utf-8"));
    if (data.values) {
        Object.entries(data.values).forEach(([k, v]) => {
            console.log('before ==>', v);
            const min = data.values[k].min
            const step = data.values[k].step
            if (min) {
                data.values[k].min = min / 2
            }
            if (step) {
                data.values[k].step = step / 2
            }
            console.log('after ==>', v);
            
        });
        await fs.writeFile(json.path, JSON.stringify(data))
    }
}
