const popupEl = document.querySelector('#popup')
const closeBtn = document.querySelector('#close')

function showPopup() {

    const userData = {
        fname : document.querySelector('#full-name').value,
        email: document.querySelector('#e-mail').value,
        subject: document.querySelector('#subject').value,
        comment: document.querySelector('#comment').value
    }

    document.querySelector('#fname-disp').textContent = userData.fname
    document.querySelector('#email-disp').textContent = userData.email
    document.querySelector('#subject-disp').textContent = userData.subject
    document.querySelector('#comment-disp').textContent = userData.comment

    popupEl.style.display = 'flex'
}

closeBtn.addEventListener('click', function() {
    popupEl.style.display = 'none'
})

