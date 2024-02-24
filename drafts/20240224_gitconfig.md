# .gitconfig

Continuando con la temática de herramientas y productividad, y envalentonado por el post de [Julia Evans](https://jvns.ca/about/#about-me): [Popular git config options](https://jvns.ca/blog/2024/02/16/popular-git-config-options/), hoy quiero compartir con ustedes mi configuración de git.

```toml
# ~/.gitconfig

[user]
    email = ****** # El email que utilizo para github
    name = iyaki # Usuario coincidiendo con el de github
    signingKey = ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFsDjKjz0+2nt9YmqETTLNM9PtxfKP/2ihhcj/q27Mtu # Clave pública correspondiente a la clave privada que utiizo para firmar los commits

[core]
    pager = delta # https://github.com/dandavison/delta Excelente herramienta para mejorar la experiencia al realizar diffs
    editor = vim # https://xkcd.com/378/
    autocrlf = input # \r quien te conoce?
    excludesfile = ~/.gitignore-global # patrones para excluir de manera global
    untrackedcache = true # https://github.blog/2022-06-29-improve-git-monorepo-performance-with-a-file-system-monitor/
    fsmonitor = true # https://github.blog/2022-06-29-improve-git-monorepo-performance-with-a-file-system-monitor/

[color]
    ui = auto # Colorcitos lindos

[help]
    autocorrect = prompt # No hay que dejar que la dislexia nos gane

[diff]
    colorMoved = default # Diferencia (en los diff) lineas movidas de lineas eliminadas y nuevas

[interactive]
    diffFilter = delta --color-only # https://github.com/dandavison/delta
[add.interactive]
    useBuiltin = false # Utilizar delta tambien al ejecutar `git add --interactive` https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging

[delta] # Mis configuraciones para delta
    navigate = true
    light = false
    line-numbers = true

[gpg]
    format = ssh # Formato de la clave utilizada para firmar commits
[commit]
    gpgsign = true # Firmado automático de los commits
    verbose = true
[tag]
    gpgsign = true # Firmado automático de los tags
[gpg "ssh"]
    allowedSignersFile = ~/.config/git/authorized_signers # Claves publicas consideradas "seguras" para los commits firmados

[init]
    defaultBranch = main # Branch default

[merge]
    conflictstyle = diff3 # Mejor resolución de conflictos durante los merge

[diff]
    tool = difftastic # Herramienta alternativa para hacer diffs "estructurales". Cuando la conocí me pareció una idea excelente pero la verdad es que despues nunca la usé
[difftool]
    prompt = false
[difftool "difftastic"]
    cmd = difft "$LOCAL" "$REMOTE"

[pager]
    difftool = true # Use a pager for large output, just like other git commands

[alias] # Esto necesita explicación?
    a = add
    b = branch
    c = commit -m
    ca = commit --amend --no-edit
    cl = clean -fd .
    co = checkout
    d = diff
    dd = difftool
    dft = difftool
    l = ! git log --show-signature
    lo = ! git log --color --pretty=format:'%Cred%H%Creset - %C(blue)(%G? %GT)%Creset%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
    lol = ! git log --color --graph --pretty=format:'%Cred%h%Creset - %C(blue)(%G? %GT)%Creset%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --
    p = push
    psu = push --set-upstream
    pr = pull --rebase --autostash
    r = reset
    s = status
    td = tag --delete
    tdr = push --delete
```

Adicionalmente, esta es mi configuración de exclusiones globales (`excludesfile`)

```.gitignore
# ~/.gitignore-global

.*.sw? #Vim swap file
.directory
.vscode
```

Esta era mi configuración de git desde hace ya unos años y hasta hace unos pocos días, cuando, en base al artículo que les compartí al principio del post decidí hacer los siguientes cambios y adiciones:

```toml
[merge]
    conflictstyle = zdiff3 # Mejor x2 resolución de conflictos durante los merge

[rerere]
    enabled = true
[push]
    default = current
[rebase]
    autostash = true
[transfer]
    fsckobjects = true
[fetch]
    fsckobjects = true
[receive]
    fsckObjects = true
[status]
    submoduleSummary = true
[branch]
    sort = -committerdate
    sort = tag.sort
[log]
    date = iso
```

Estas nuevas configuraciones se ven prometedoras, pero aún no he tenido suficiente tiempo para probarlas a fondo.

Esto es todo por hoy, espero que puedan aprovechar alguna de estas configuraciones para mejorar sus propios flujos de trabajo.

Пока́!
