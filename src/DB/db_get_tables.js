import fs from 'fs-extra'
import path from 'path'

const getFilesUnderFolder = (startFolder, filter, pathsList) => {
  if (!fs.existsSync(startFolder)) {
    console.log(`Folder doesn't exists `, startFolder)
    return
  }

  let files = fs.readdirSync(startFolder)

  for (let i = 0; i < files.length; i++) {
    let filename = path.join(startFolder, files[i])
    let stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      getFilesUnderFolder(filename, filter, pathsList) //recurse
    } else if (filename.indexOf(filter) >= 0) {
      // console.log('-- found: ', filename)
      pathsList.push(filename)
    }
  }
}

const getTableQueries = async () => {
  let tablePaths = []
  getFilesUnderFolder('./src/DB', '.sql', tablePaths)

  const tableBuffersPromises = tablePaths.map((tablePath) =>
    fs.readFile(tablePath)
  )
  const tablesBuffersResolved = await Promise.all(tableBuffersPromises)

  const tablesStringified = tablesBuffersResolved.map((tablePromise) =>
    tablePromise.toString()
  )

  return tablesStringified
}

const tableQueries = await getTableQueries()

export default tableQueries

/**
 * How to find extensions under folder
 * https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs/25462405#25462405?newreg=b4e145bd226a4c50a316af0582df8023
 *
 */
