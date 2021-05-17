import {getColors} from './array.operations';

describe('Array Operations' , () => {

  describe('getColors()', () => {

    it('should return an array of length 4', function() {
      expect(getColors().length).toBe(4);
    });

    it('should contain the color "purple"', function() {
      expect(getColors()).toContain('purple');
    });

    it('should return the index of "black" to be 1', function() {
      expect(getColors().indexOf('black')).toBe(1);
    });
  });

});
