// template_2cvjmfg
// service_a2vjxdm
// wA9t9jTv7Oqs1AFxa
function contact(event){
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_a2vjxdm',
            'template_2cvjmfg',
             event.target,
             'wA9t9jTv7Oqs1AFxa'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailble. Please contact me directly on sergiowbjr@gmail.com"
            )
        })
}
let isModalOpen = false;
function toggleModal(){

    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;

    document.body.classList += " modal--open"
}