import { getFileExtension } from "./utils/file.js"

const BASE_URL_PATH = '/posts/'
const BASE_PATH = '../docs' + BASE_URL_PATH
const ALLOWED_FILE_EXTENSIONS = [
	'.html',
	'.md',
]

export function newArticle({
	filename,
	title,
	content,
	datePublished,
	newPublication,
}) {
	const fileExtension = getFileExtension(filename)
	if (!ALLOWED_FILE_EXTENSIONS.includes(fileExtension)) {
		throw `
El tipo de archivo ${fileExtension} no esta permitido.
Los formatos permitidos son: ${ALLOWED_FILE_EXTENSIONS.join(', ')}.
`
	}

	return {
		get id() {
			return filename
		},
		get title() {
			return title
		},
		get content() {
			return content
		},
		get datePublished() {
			return datePublished
		},
		get newPublication() {
			return newPublication
		},
		get path() {
			return BASE_PATH + filename
		},
		get urlPath() {
			return BASE_URL_PATH + filename
		},
		isMd() {
			return fileExtension === 'md'
		},
		isHtml() {
			return fileExtension === 'html'
		},
	}
}
