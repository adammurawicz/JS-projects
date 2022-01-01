let shoppingInput
let errorInfo
let addBtn
let ulList
let newItem

let popup
let popupInfo
let shoppingToEdit
let popupInput
let popupAddBtn
let popupCloseBtn


const main = () => {
    prepereDOMElements()
    prepereDOMEvents()
}

const prepereDOMElements = () => {
    shoppingInput = document.querySelector('.shopping-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.shoppinglist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    // shoppingToEdit = document.querySelector('')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepereDOMEvents = () => {
    addBtn.addEventListener('click', addNewItem)
    ulList.addEventListener('click', checkList)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeShoppingText)
    shoppingInput.addEventListener('keyup', enterKeyCheck)
}

const addNewItem = () => {
    if (shoppingInput.value !== '') {
        newItem = document.createElement('li')
        newItem.textContent = shoppingInput.value
        createToolsArea()

        ulList.append(newItem)
        shoppingInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Type what you need'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newItem.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkList = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('comepleted');
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editShopping(e);
    } else if (e.target.matches('.delete')) {
        deleteShopping(e)
    }
}

const editShopping = e => {
    shoppingToEdit = e.target.closest('li')

    popupInput.value = shoppingToEdit.firstChild.textContent
    console.log(shoppingToEdit.firstChild);
    popup.style.display = 'flex'
}

const closePopup = (params) => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeShoppingText = (params) => {
    if(popupInput.value !== '') {
        shoppingToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'You have to type an Item'
    }
}

const deleteShopping = e => {
    e.target.closest('li').remove()

    const allShopping = ulList.querySelectorAll('li')

    if(allShopping.length === 0) {
        errorInfo.textContent = 'No item on your list'
    }
}

const enterKeyCheck = (e) => {
    if(e.key === 'Enter') {
        addNewItem()
    }
}

document.addEventListener('DOMContentLoaded', main)