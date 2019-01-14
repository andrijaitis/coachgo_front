import { Filter2Pipe } from './filter2.pipe';



    // this.athletes = [
    //   { _id: '11', name: 'Michael' },
    //   { _id: '11', name: 'Joe' },
    //   { _id: '12', name: 'Ryan' },
    //   { _id: '13', name: 'Mike' },
    //   { _id: '14', name: 'John' },
    //   ];
  


describe('Filter2Pipe', () => {
  it('create an instance', () => {
    const pipe = new Filter2Pipe();
    expect(pipe).toBeTruthy();
  });
});




describe('return empty array', () => {
  it('return empty', () => {
    const pipe = new Filter2Pipe();
    const result = pipe.transform([], 'Hi', 'name');
       expect(result.length).toBe(0);
     });

});



describe('return one', () => {
  it('return only 1 item', () => {
    const pipe = new Filter2Pipe();
    const result = pipe.transform([
      { _id: '11', name: 'Michael' },
      { _id: '11', name: 'Joe' },
      { _id: '12', name: 'Ryan' },
      { _id: '13', name: 'Mike' },
      { _id: '14', name: 'John' },
      ], 'Michael', 'name');
       expect(result.length).toBe(1);
     });

});


describe('return specific', () => {
  it('should return speciic item from array', () => {
    const pipe = new Filter2Pipe();
    const result = pipe.transform([
      { _id: '11', name: 'Michael' },
      { _id: '11', name: 'Joe' },
      { _id: '12', name: 'Ryan' },
      { _id: '13', name: 'Mike' },
      { _id: '14', name: 'John' },
      ], 'Joe', 'name');
       expect(result[0].name).toBe('Joe');
       alert(result);
     });

});
