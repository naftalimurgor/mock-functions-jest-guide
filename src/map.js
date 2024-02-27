module.exports = function map(items, callback) {
  for (const item in items) {
    callback(item)
  }
}