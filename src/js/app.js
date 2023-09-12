import parse from './parser';
import read from './reader';

// TODO: write your code here
export default class GameSavingLoader {
  constructor() {
    this.savedObjects = [];
  }

  static async load(gameSavingLoaderInstance) {
    try {
      const data = await read();
      const parsedData = await parse(data);
      gameSavingLoaderInstance.savedObjects.push(JSON.parse(parsedData));
    } catch (err) {
      console.log(err);
    }
  }
}

(async () => {
  const gameSavingLoader = new GameSavingLoader();
  await GameSavingLoader.load(gameSavingLoader);
  console.log(gameSavingLoader);
})();
