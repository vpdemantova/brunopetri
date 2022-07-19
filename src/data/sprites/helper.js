import SVGStore from 'svgstore';
import fs from 'fs';

export default class {
  constructor(directory) {
    this.directory = directory;
  }

  async generate() {
    const files = fs.readdirSync(this.directory, {
      withFileTypes: true,
    });

    const sprites = SVGStore();

    for (const file of files) {
      const icon = file.name.replace('.svg', '');

      sprites.add(icon, fs.readFileSync(`src/data/sprites/${icon}`, 'utf8'));
    }

    fs.writeFileSync('src/pages/public/sprites.svg', sprites);
  }
}
