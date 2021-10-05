const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
})

window.addEventListener('scroll', () => {
    const fromTop = cursor.getAttribute('data-fromTop')
    cursor.style.top = scrollY + parseInt(fromTop) + 'px'
})

window.addEventListener('click', () => {
    if (cursor.classList.contains('stab')) {
        cursor.classList.remove('stab')
        setTimeout(() => {
            cursor.classList.add('stab')
        }, 1)
    } else {
        cursor.classList.add('stab')
    }
    setTimeout(() => {
        cursor.classList.remove('stab')
    }, 500)
})

window.addEventListener('dblclick', () => {
    if (cursor.classList.contains('slash')) {
        cursor.classList.remove('slash')
        setTimeout(() => {
            cursor.classList.add('slash')
        }, 0.5)
    } else {
        cursor.classList.add('slash')
    }
    setTimeout(() => {
        cursor.classList.remove('slash')
    }, 500)
})