import {getMobile, IMobile} from './obj.operations';

describe('obj opearations' , () => {

  describe('getMobile()' , () => {

    it('should return the expected object', function() {
      let obj:IMobile = {
        brand : 'Apple',
        color : 'silver',
        price : 35000
      }
      expect(getMobile()).toEqual(obj);
    });

    it('should return an object with prop "brand"', function() {
      expect(Object.keys(getMobile())).toContain('brand');
    });

    it('should return brand prop value to be "Apple"', function() {
      expect(getMobile().brand).toBe('Apple');
    });

  });



});
