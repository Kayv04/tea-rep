// Helper function to filter strings that contain a specific substring
function filterStringsBySubstring(strings, substring) {
    if (!Array.isArray(strings) || strings.length === 0 || typeof substring !== 'string') {
      throw new Error("Inputs must be a non-empty array of strings and a valid substring");
    }
  
    return strings.filter(str => str.includes(substring));
  }
  
  // Helper function to count the number of characters in each string of an array
  function countCharactersInStrings(strings) {
    if (!Array.isArray(strings) || strings.length === 0) {
      throw new Error("Input must be a non-empty array of strings");
    }
  
    const characterCount = strings.map(str => str.length);
    return characterCount;
  }
  
  // Demo using the helper functions
  try {
    const words = ["apple", "banana", "kiwi", "orange", "grape"];
    const filteredWords = filterStringsBySubstring(words, "an");
    console.log("Filtered Words:", filteredWords);
  
    const characterCounts = countCharactersInStrings(words);
    console.log("Character Counts:", characterCounts);
  } catch (error) {
    console.error("Error:", error.message);
  }
  