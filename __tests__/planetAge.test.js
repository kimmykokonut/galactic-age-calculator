import { experiments } from 'webpack';
import Person from '../src/js/planetAge.js';

describe('Person', () => {
  test('should correctly create a person object with name and age in earth years', () => {
    const geneveve = new Person("Geneveve", 13);
    expect(geneveve.name).toEqual("Geneveve");
    expect(geneveve.age).toEqual(13);
  });
});
describe('yearsToDays()', () => {
  test('should return earth age in years to earth age in days', () => {
    const geneveve = new Person("Geneveve", 13);
    expect(geneveve.yearsToDays()).toEqual(4745);
  });
});
describe('earthToMercury()', () => {
  test('should return mercury age in years', () => {
    const geneveve = new Person("Geneveve", 13);
    expect(geneveve.earthToMercury()).toEqual(54);
  });
});
