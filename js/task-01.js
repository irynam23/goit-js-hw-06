const listCategories = document.querySelector('#categories');
console.log('Number of categories: ', listCategories.childElementCount)
const categoriesItems = document.querySelectorAll('.item')
categoriesItems.forEach(item => {
    const title = item.firstElementChild
    const listItems = item.lastElementChild.childElementCount
    console.log('Category: ', title.textContent)
    console.log('Elements: ', listItems);
})

