export default function fixFiles (files) {
  const filesRenamed = {}

  return files.map((el) => {
    filesRenamed[el] ??= 0
    if (filesRenamed[el] > 0) return el + '(' + filesRenamed[el]++ + ')'
    filesRenamed[el]++
    return el
  })
}
