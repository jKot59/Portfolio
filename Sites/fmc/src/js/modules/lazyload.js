function lazyload (item) {
    if (item.getAttribute('data-src')) {
        item.setAttribute('src', item.getAttribute('data-src'))
        item.removeAttribute('data-src')
    }
}

export default lazyload