import taskBlock from '../1-block-scoped.js'; // Import the function to be tested

describe('taskBlock function', () => {
  // Test case for when trueOrFalse is true
  test('should return [true, false] when trueOrFalse is true', () => {
    // Arrange
    const trueOrFalse = true;

    // Act
    const result = taskBlock(trueOrFalse);

    // Assert
    expect(result).toEqual([true, false]);
  });

  // Test case for when trueOrFalse is false
  test('should return [false, true] when trueOrFalse is false', () => {
    // Arrange
    const trueOrFalse = false;

    // Act
    const result = taskBlock(trueOrFalse);

    // Assert
    expect(result).toEqual([false, true]);
  });
});
