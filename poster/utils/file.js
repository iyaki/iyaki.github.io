import fs from 'fs'
import path from 'path';

export function read(path) {
	return fs.readFileSync(path, { encoding: 'utf8' })
}

export function write(path, content) {
	fs.writeFileSync(path, content);
}

export function removeUtf8Bom(string) {
	return string.replace(/^\uFEFF/, '')
}

export function addUtf8Bom(string) {
	return '\ufeff' + string
}

export function getFilename(completePath) {
	return path.basename(completePath)
}

export function getFilenameWithoutExtension(completePath) {
	return path.basename(completePath, getFileExtension(completePath))
}

export function getFileExtension(completePath) {
	return path.extname(completePath)
}

export function getDateForFilename() {
	return (new Date())
		.toISOString()
		.slice(0, 10)
		.replaceAll('-', '')
}

export function cleanPostFilename(filename) {
	let index = 0
	for (index = 0; index < filename.length; ++index) {
		if (
			isNaN(filename[index]) &&
			! ['_', '-'].includes(filename[index])
		) {
			break
		}
	}

	return filename.substring(index)
}
