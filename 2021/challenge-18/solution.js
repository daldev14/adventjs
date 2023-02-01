export default function fixFiles (files) {
  const filesRenamed = {}

  return files.map((file) => {
    filesRenamed[file] ??= 0
    if (filesRenamed[file] > 0) return file + '(' + filesRenamed[file]++ + ')'
    filesRenamed[file]++
    return file
  })
}
