const converExtension = (fullFileName) => {
    const fullFileNameArr = fullFileName.split('.')
    const filename = fullFileNameArr[0]
    const ext = fullFileNameArr[1] && fullFileNameArr[1] === 'png' ? 'jpg' : 'gif'
    return {
        filename,
        ext
    }
}

converExtension('abc.png')