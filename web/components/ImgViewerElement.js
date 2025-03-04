const img = document.createElement('img')
img.style.width = '100%'
const newTabAnchor = createAnchorForNewTab()
const imgViewerDialog = createViewerDialog(img, newTabAnchor)

imgViewerDialog.appendChild(img)

export default class ImgViewerElement extends HTMLElement {
	constructor() {
		super()

		this.addEventListener(
			'click',
			(ev) => {
				console.log(ev)
				if (ev.ctrlKey || ev.altKey) {
					return
				}
				ev.preventDefault()


				imgViewerDialog.close()

				img.src = ev.target.src
				newTabAnchor.href = ev.target.src

				imgViewerDialog.remove()
				document.body.appendChild(imgViewerDialog)

				imgViewerDialog.showModal()
			}
		)
	}
}

function createViewerDialog(img, newTabAnchor) {
	const dialog = document.createElement('dialog')
	dialog.style.maxHeight = '95vh'
	dialog.style.maxWidth = '90vw'
	dialog.style.width = 'fit-content'
	dialog.style.padding = '0'
	dialog.style.border = '2px solid var(--text-color)'
	dialog.style.borderRadius = '5px'
	dialog.style.overscrollBehavior = 'contain'

	// Close dialog when click on ::backdrop
	dialog.addEventListener('click', (ev) => {
		const rect = ev.target.getBoundingClientRect()

		if (
			rect.left > ev.clientX ||
			rect.right < ev.clientX ||
			rect.top > ev.clientY ||
			rect.bottom < ev.clientY
		) {
			dialog.close()
		}
	})

	// Close button
	const closeForm = document.createElement('form')
	closeForm.method = 'dialog'
	closeForm.style.position = 'fixed'
	closeForm.style.top = '0.7em'
	closeForm.style.right = '0.7em'

	closeForm.innerHTML = `<button type="submit" style="width: 2em; height: 2em; line-height: 0; appearance: none; border: none; background: none; cursor: pointer;">
		<span style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">Cerrar</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path stroke="currentColor" d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"/></svg>
	</button>`

	dialog.appendChild(closeForm)

	dialog.appendChild(newTabAnchor)
	dialog.appendChild(img)

	return dialog
}

function createAnchorForNewTab() {
	const newTabAnchor = document.createElement('a')
	newTabAnchor.target = '_blank'
	newTabAnchor.style.position = 'fixed'
	newTabAnchor.style.top = '0.7em'
	newTabAnchor.style.left = '0.7em'
	newTabAnchor.style.width = '1.5em'
	newTabAnchor.style.height = '1.5em'
	newTabAnchor.style.color = 'currentColor'
	newTabAnchor.style.lineHeight = '0'
	newTabAnchor.style.appearance = 'none'
	newTabAnchor.style.border = 'none'
	newTabAnchor.style.background = 'none'
	newTabAnchor.style.cursor = 'pointer'

	newTabAnchor.innerHTML = `<span style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">Abrir en nueva pestaña</span>
	<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 -3 24 24'><path d='M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z'/><path d='M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z'/></svg>`

	return newTabAnchor
}
