import GameSavingLoader from '../app';

test('should return object', () => {
  const gameSavingLoader = new GameSavingLoader();
  GameSavingLoader.load(gameSavingLoader).then(
    () => expect(gameSavingLoader.savedObjects.length).not.toBe(0),
  );
});
