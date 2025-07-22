const getElementBounds = (selector) => (document.querySelector(`section.${selector}`) || document.getElementById(selector)).getBoundingClientRect()
function setActiveState(class_) {
    document.querySelector('header nav a.active')?.classList.remove('active')
    document.querySelector(`header nav a.${class_}`).classList.add('active')
}

function checkSection(class_) {
    const section_bounds = getElementBounds(class_)
    const amountOf_ele_in_screen = parseInt(window.innerHeight - section_bounds.top)
    const percent_of_ele_in_screen = parseInt((amountOf_ele_in_screen / section_bounds.height) * 100)
    if (percent_of_ele_in_screen >= 50) {return true}
    return false
}

function scrollListener(e) {
    const isFirst = checkSection("first.hero")
    const isSecond = checkSection("about-us")
    const isThrid = checkSection('services')
    const isFourth = checkSection('reviews')
    const isFifth = checkSection('contact-us-section')
    
    if (isFifth) { setActiveState('contact-us') }
    else if (isFourth) { setActiveState('reviews') }
    else if (isThrid) { setActiveState('services') }
    else if (isSecond) { setActiveState('about-us') }
    else if (isFirst) { setActiveState('home') }
}

window.addEventListener('scroll', scrollListener)