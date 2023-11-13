import { Person } from '../src/js/planetAge.js';

describe('Person', () => {
  let reusablePerson;

  beforeEach(() => {
    reusablePerson = new Person("Geneveve", 13);
  });

  test('should correctly create a person object from reusablePerson with name and age in earth years', () => {
    expect(reusablePerson.name).toEqual("Geneveve");
    expect(reusablePerson.age).toEqual(13);
  });

  describe('yearsToDays()', () => {
    test('should return earth age in years to earth age in days', () => {
      expect(reusablePerson.yearsToDays()).toEqual(4745);
    });
  });
  describe('earthToMercury()', () => {
    test('should return mercury age in years', () => {
      expect(reusablePerson.earthToMercury()).toEqual(54.17);
    });
  });
  describe('earthToVenus()', () => {
    test('should return venus age in years', () => {
      expect(reusablePerson.earthToVenus()).toEqual(20.97);
    });
  });
  describe('earthToMars()', () => {
    test('should return mars age in years', () => {
      expect(reusablePerson.earthToMars()).toEqual(6.91);
    });
  });
  describe('earthToJupiter()', () => {
    test('should return jupiter age in years', () => {
      expect(reusablePerson.earthToJupiter()).toEqual(1.1);
    });
  });
});
