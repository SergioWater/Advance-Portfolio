// template_2cvjmfg
// service_a2vjxdm
// wA9t9jTv7Oqs1AFxa
function contact(event){
    event.preventDefault()
    // emailjs
    //     .sendForm(
    //         'service_a2vjxdm',
    //         'template_2cvjmfg',
    //          event.target,
    //          'wA9t9jTv7Oqs1AFxa'
    //     ).then(() => {
    //         console.log('this worked')
    //     })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    setTimeout(() =>{
        console.log('it worked')
    }, 500)
}