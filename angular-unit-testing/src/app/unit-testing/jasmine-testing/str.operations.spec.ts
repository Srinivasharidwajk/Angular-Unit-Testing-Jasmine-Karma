import {wishMe} from './str.operations';

describe('str operations' , () => {

  describe('wishMe()' , () => {
    let name:string;

    beforeEach(() => {
      name = 'NAVEEN';
    });

    afterEach(() => {
      name = null;
    })

    it('should return wish message', function() {
      expect(wishMe(name)).toBe(`Happy New Year 2021 ${name}`);
    });

    it('should return wishMsg of string type', function() {
      expect(typeof wishMe(name)).toBe('string');
    });

  });

});
