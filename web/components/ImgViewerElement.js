const img = document.createElement('img');
img.style.maxWidth = 'calc(100vw - 280px)';
img.style.maxHeight = 'calc(100vh - 20px)';
img.style.width = 'auto';
img.style.height = 'auto';
img.style.display = 'block';
img.style.margin = '0 auto';

// Create backdrop
const backdrop = document.createElement('div');
Object.assign(backdrop.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '2147483646',
  opacity: '0',
  transition: 'opacity 160ms cubic-bezier(0.23, 1, 0.32, 1)',
  pointerEvents: 'none'
});

// Create dialog container - fits image naturally, no constraints
const dialog = document.createElement('div');
Object.assign(dialog.style, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.95)',
  width: 'auto',
  height: 'auto',
  padding: '0',
  border: '2px solid var(--text-color)',
  borderRadius: '5px',
  zIndex: '2147483647',
  opacity: '0',
  transition: 'opacity 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
  background: 'var(--background-color)',
  overflow: 'visible',
  pointerEvents: 'none',
  maxWidth: 'none',
  maxHeight: 'none'
});

dialog.appendChild(img);

// Close button (fixed in right viewport margin)
const closeBtn = document.createElement('button');
closeBtn.type = 'button';
Object.assign(closeBtn.style, {
  position: 'fixed',
  top: '50%',
  right: '40px',
  transform: 'translateY(-50%)',
  zIndex: '2147483648',
  display: 'none',
  width: '2em',
  height: '2em',
  lineHeight: '0',
  appearance: 'none',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  transition: 'background 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
  borderRadius: '4px'
});

closeBtn.innerHTML = `
<span style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">Cerrar</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1.5em" height="1.5em">
  <path stroke="currentColor" fill="currentColor" d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"/>
</svg>
`;

closeBtn.addEventListener('mouseenter', () => {
  closeBtn.style.background = 'rgba(128, 128, 128, 0.2)';
});
closeBtn.addEventListener('mouseleave', () => {
  closeBtn.style.background = 'none';
});
closeBtn.addEventListener('mousedown', () => {
  closeBtn.style.transform = 'translateY(-50%) scale(0.95)';
});
closeBtn.addEventListener('mouseup', () => {
  closeBtn.style.transform = 'translateY(-50%) scale(1)';
});

// New tab anchor (fixed in left viewport margin)
const newTabAnchor = document.createElement('a');
newTabAnchor.target = '_blank';
Object.assign(newTabAnchor.style, {
  position: 'fixed',
  top: '50%',
  left: '40px',
  transform: 'translateY(-50%)',
  zIndex: '2147483648',
  display: 'none',
  width: '1.5em',
  height: '1.5em',
  color: 'currentColor',
  lineHeight: '0',
  appearance: 'none',
  border: 'none',
  background: 'none',
  cursor: 'pointer'
});

newTabAnchor.innerHTML = `
<span style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">Abrir en nueva pestaña</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -3 24 24" width="1.5em" height="1.5em">
  <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/>
  <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/>
</svg>
`;

// Append to body - buttons are in viewport margins
document.body.appendChild(backdrop);
document.body.appendChild(dialog);
document.body.appendChild(closeBtn);
document.body.appendChild(newTabAnchor);

function openDialog() {
  backdrop.style.pointerEvents = 'auto';
  backdrop.style.opacity = '1';
  dialog.style.pointerEvents = 'auto';
  dialog.style.opacity = '1';
  dialog.style.transform = 'translate(-50%, -50%) scale(1)';
  closeBtn.style.display = 'block';
  newTabAnchor.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeDialog() {
  backdrop.style.opacity = '0';
  backdrop.style.pointerEvents = 'none';
  dialog.style.opacity = '0';
  dialog.style.transform = 'translate(-50%, -50%) scale(0.95)';
  dialog.style.pointerEvents = 'none';
  closeBtn.style.display = 'none';
  newTabAnchor.style.display = 'none';
  document.body.style.overflow = '';
}

// Close on backdrop click
backdrop.addEventListener('click', (ev) => {
  if (ev.target === backdrop) closeDialog();
});

// Close on button click
closeBtn.addEventListener('click', (ev) => {
  ev.stopPropagation();
  closeDialog();
});

// Prevent dialog clicks from closing
dialog.addEventListener('click', (ev) => {
  ev.stopPropagation();
});

// Close on ESC
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && closeBtn.style.display !== 'none') {
    closeDialog();
  }
});

export default class ImgViewerElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', (ev) => {
      if (ev.ctrlKey || ev.altKey) return;
      ev.preventDefault();

      img.src = ev.target.src;
      newTabAnchor.href = ev.target.src;
      openDialog();
    });
  }
}
