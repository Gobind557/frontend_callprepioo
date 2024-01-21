function generateRandomJSON() {
  // Generate a random string of fixed length
  function randomString(length = 5) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  }

  // Generate a random number up to a maximum value
  function randomNumber(maxValue = 100) {
    return Math.floor(Math.random() * maxValue) + 1;
  }

  // Recursive function to create an element with a minimum depth and width
  function createElement(depth) {
    if (depth === 0) {
      // Base case: return a random string or number
      return Math.random() < 0.5 ? randomString() : randomNumber();
    } else {
      // Create a dictionary with random key-value pairs
      const dictLength = Math.max(Math.floor(Math.random() * width), 2); // Ensure minimum width of 2
      const obj = {};
      for (let i = 0; i < dictLength; i++) {
        obj[randomString()] = createElement(depth - 1);
      }
      return obj;
    }
  }

  // Generate random depth and width for the data structure with minimums
  const depth = Math.max(Math.floor(Math.random() * 10), 2);
  const width = Math.max(Math.floor(Math.random() * 4), 2);

  // Create an array of JSON objects directly
  const randomData = Array.from(
    { length: width },
    () => createElement(depth) // Use depth as-is
  );

  return randomData; // Return the array of JSON objects
}

export default generateRandomJSON;
