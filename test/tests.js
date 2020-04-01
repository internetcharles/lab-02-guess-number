import './example.test.js';

const test = QUnit.test;

function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    }
    else if (guess > correctNumber) {
        return 1;
    }
    else if (correctNumber > guess) {
        return -1;
    }
}

test('test compareNumbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 10;
    const y = 10;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const compared = compareNumbers(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(compared, expected);
});

test('test compareNumbers 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 100;
    const y = 10;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const compared = compareNumbers(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(compared, expected);
});

test('test compareNumbers 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 10;
    const y = 100;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const compared = compareNumbers(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(compared, expected);
});