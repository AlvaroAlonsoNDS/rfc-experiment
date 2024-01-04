#! /usr/bin/env node

const { mkdir, opendir } = require('node:fs')

const rfcsDir = './organisation'
const dirPath = 'build'


mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw new Error('Failed to create build directory')
})


opendir(rfcsDir,{ recursive: true }, (err, dir) => {
    if (err) throw new Error('Failed to read rfcs directory')

    console.log('Reading dir', dir.path)
    const dirent = dir.readSync()
    console.log(dirent.path)


})
