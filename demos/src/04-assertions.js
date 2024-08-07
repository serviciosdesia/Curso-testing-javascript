// mattchers
test('test object', () => {
  const data = {name: 'nico '};
  data.lastname = 'molina'
  expect(data).toEqual({name: 'nico', lastname: 'molina'})
})
