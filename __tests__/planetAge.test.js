import Person from '../src/js/planetAge.js';

describe('Person', () => {
  test('should correctly create a person object with name and age in earth years', () => {
    const geneveve = new Person("Geneveve", 13);
    expect(geneveve.name).toEqual("Geneveve");
    expect(geneveve.age).toEqual(13);
  });
});