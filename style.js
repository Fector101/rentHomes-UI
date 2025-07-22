function setBox(num) {
    document.querySelector('.debug-box').style.top = num + 'px'
}
function setBoxH(num) {
    document.querySelector('.debug-box').style.height = num + 'px'

}
function getElementBounds(selector) {
    return (document.querySelector(`section.${selector}`) || document.getElementById(selector)).getBoundingClientRect()
}
function setActiveState(class_) {
    document.querySelector('header nav a.active')?.classList.remove('active')
    document.querySelector(`header nav a.${class_}`).classList.add('active')
}

function checkSection(class_, threshold_percent = 50) {
    const section_bounds = getElementBounds(class_)
    // console.log(about_box)
    const percent = (section_bounds.y / section_bounds.height) * 100
    // console.log(parseInt(percent)+'%',`y: ${parseInt(section_bounds.y)}`, `h: ${parseInt(section_bounds.height)}`, `btm: ${parseInt(section_bounds.bottom)}`);
    // console.log(parseInt(percent)+'%',`y: ${parseInt(section_bounds.y)}`, `h: ${parseInt(section_bounds.height)}`);
    // console.log('amount in screen:',window.innerHeight - section_bounds.top)
    const amountOf_ele_in_screen = parseInt(window.innerHeight - section_bounds.top)
    const percent_of_ele_in_screen = parseInt((amountOf_ele_in_screen / section_bounds.height) * 100)
    console.log(amountOf_ele_in_screen + 'px', percent_of_ele_in_screen + '%', class_)
    // console.log(percent_of_ele_in_screen, threshold_percent)
    if (percent_of_ele_in_screen >= threshold_percent) {
        return true
    }
    return false
}

function scrollListener(e) {
    // console.log(e)
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

    // if (isFirst) { setActiveState('about-us') }
    // else if (isSecond) { setActiveState('services') }
    // else if (isThrid) { setActiveState('services') }
    // else if (isFourth) { setActiveState('reviews') }
    console.log('-------------------')
}

window.addEventListener('scroll', scrollListener)