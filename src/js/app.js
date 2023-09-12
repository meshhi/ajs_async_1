import parse from './parser';
import read from './reader';

// TODO: write your code here
export default class GameSavingLoader {
  constructor() {
    this.savedObjects = [];
  }

  static load(gameSavingLoaderInstance) {
    return new Promise((res, rej) => {
      read()
        .then((data) => parse(data))
        .then((saving) => {
          gameSavingLoaderInstance.savedObjects.push(JSON.parse(saving));
          res();
        })
        .catch((err) => rej(err));
    });
  }
}

const gameSavingLoader = new GameSavingLoader();
GameSavingLoader.load(gameSavingLoader);
