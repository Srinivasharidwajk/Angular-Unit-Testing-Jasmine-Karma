export interface IMobile {
  brand : string;
  price : number;
  color : string;
}

export const getMobile = ():IMobile => {
  return {
    brand : 'Apple',
    color : 'silver',
    price : 35000
  }
};
