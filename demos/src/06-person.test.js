// AAA
// Arrange(preparar) / Given
// Act (actuar) / when
// Assert (Asertar) / Then

const Person = require('./06-person');

describe('test for Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Erick', 45, 1.7);
  });
  // Arrange(preparar) / Given

  test('should return down', () => {
    // Arrange(preparar) / Given
    person.weight = 45;
    // Act (actuar) / when
    const imc = person.calcIMC();
    // Assert (Asertar) / Then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
