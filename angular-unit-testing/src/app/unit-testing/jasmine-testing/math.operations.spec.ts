import {sum} from './math.operation';

describe('Math Operations' , () => {

  describe('sum()' , () => {

    it('should return the sum', function() {
      expect(sum(10,20)).toBe(30);
    });

    it('should return the value more than 40 for 20 , 30', function() {
      expect(sum(20,30)).toBeGreaterThan(40);
    });

    it('should return a number', function() {
      expect(typeof sum(10,20)).toBe('number');
    });

  });
  

});
