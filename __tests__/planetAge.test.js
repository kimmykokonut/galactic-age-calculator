import { experiments } from 'webpack';
import { Person } from '../src/js/planetAge.js';

describe('Person', () => {
  let reusablePerson;

  beforeEach(() => {
    reusablePerson = new Person("Geneveve", 13, 3);
  });

  test('should correctly create a person object from reusablePerson with name and age in earth years', () => {
    expect(reusablePerson.name).toEqual("Geneveve");
    expect(reusablePerson.age).toEqual(13);
  });

  describe('solarYear()', () => {
    test('should take user age and convert with parameter of mercury solar year', () => {
      expect(reusablePerson.convertAge(0.24)).toEqual(54.17);
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
  describe('yearsFromPastBday()', () => {
    test('should return how many Earth years have passed from a specific age to current age', () => {
      expect(reusablePerson.yearsFromPastBday()).toEqual(10);
    });
  });
  describe('yearsFromMercury()', () => {
    test('should return how many Mercury years have passed from a specific age to current age', () => {
    expect(reusablePerson.yearsFromMercury()).toEqual(41.67);
    });
  });

});