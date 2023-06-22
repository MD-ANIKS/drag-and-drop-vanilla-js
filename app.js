// Global variable
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// add fill listener
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// create functions
function dragStart() {
    this.classList += ' hold';
    setTimeout( () => this.classList = 'invisible', 0 )
}

function dragEnd() {
    this.classList = 'fill'
}

// looping through for empties
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('drop', dragDrop)
}

// create a functions
function dragOver(e) {
    e.preventDefault()
}

function dragLeave() {
    this.classList = 'empty'
}

function dragEnter(e) {
    this.classList += ' hovered'
    e.preventDefault()
}

function dragDrop() {
    this.classList = 'empty'
    this.append(fill)
}












