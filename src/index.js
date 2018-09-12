/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0, k = 0, m = 0, l = 0;
  for (var i = 0; i < preferences.length; i++) {
    k = preferences[i];
    if (k != 0) {
      m = preferences[k-1];
      if (m != 0 && m != k) {
        l = preferences[m-1];
        if (l != 0 && l != m) {
          if (l == i+1) {
            count++;
            preferences[i] = 0;
            preferences[k-1] = 0;
            preferences[m-1] = 0;
          }
        }
      }
    }
  }
  return count;
};
