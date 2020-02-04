// Type your code...
export function hasUniqueCharactersSet(str) {
  let chars = new Set()

  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false
    }
    chars.add(str[i])
  }
  return true
}
