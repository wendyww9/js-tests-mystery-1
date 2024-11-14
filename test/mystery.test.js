import { mystery1 } from '../src/mystery';

test('Negative odd numbers return a truthy result', () => {
  // Arrange
  const numbers = [-1, -3, -5, -7, -123, -1255];

  numbers.forEach((num) => {
    // Act
    const result = mystery1(num);

    // Assert
    expect(result).toBeTruthy();
  });
});

test('Odd positive numbers return a truthy result', () => {
  // Arrange
  const numbers = [1, 3, 5, 7, 123, 255];

  numbers.forEach((num) => {
    // Act
    const result = mystery1(num);

    // Assert
    expect(result).toBeTruthy();
  });
});

test('Zero will return a falsy result', () => {
  // Arrange
  const num = 0;

  // Act
  const result = mystery1(num);

  // Assert
  expect(result).toBeFalsy();
});

test('Even negative numbers must return a falsy result', () => {
  // Arrange
  const numbers = [-100, -150, -2, -4, -6];

  numbers.forEach((num) => {
    // Act
    const result = mystery1(num);

    // Assert
    expect(result).toBeFalsy();
  });
});

test('Even positive numbers must return a falsy result', () => {
  // Arrange
  const evenPositiveNumbers = [0, 2, 4, 6, 22, 106];

  // Act
  evenPositiveNumbers.forEach((num) => {
    const result = mystery1(num);

    // Assert
    expect(result).toBeFalsy();
  });
});
