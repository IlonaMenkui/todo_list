function deleteHandler(e) {
    var listItem = e.target.parentNode
    var ul = listItem.parentNode
    ul.removeChild(listItem)
}

function checkHandler(e) {
    deleteHandler(e)
    var isChecked = e.target.checked
    var className = isChecked ? 'items-completed__item' : 'items__item'
    var containerSelector = isChecked ? '.items-completed__container' : '.items__container'
    var item = e.target.parentNode
    item.className = className
    document.querySelector(containerSelector).appendChild(item)
}

function addHandler(e) {
    var input = e.target.parentElement.querySelector('input')
    var text = input.value || 'EMPTY'
    input.value = ''

    // input checkbox
    var checkBox = document.createElement('input')
    checkBox.type = 'checkBox'
    checkBox.addEventListener('change', checkHandler)

    // label
    var label = document.createElement('label')
    label.innerText = text

    // button.delete
    var deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.className = 'delete-button'
    deleteButton.addEventListener('click', deleteHandler)

    // create List Item
    var listItem = document.createElement('li')
    listItem.className = 'items__item'
    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(deleteButton)

    document.querySelector('.todo-component .items .items__container').appendChild(listItem)
}

function init() {
    var selector = '.todo-component .add-item .add-item__button'
    document.querySelector(selector).addEventListener('click', addHandler)
}

document.addEventListener('DOMContentLoaded', init);
