

const {hash} = window.location;

const message = atob(hash.replace("#", ''));

if(message){
    document.querySelector("#message_form").classList.add("hide")
    document.querySelector("#message-show").classList.remove("hide")

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const message_input = document.querySelector('#message_input')
    const  link_input = document.querySelector('#link_input');

    const message_form = document.querySelector('#message_form');
    const  link_form = document.querySelector('#link_form');
    message_form.classList.add('hide');
    link_form.classList.remove('hide'); 
   
    const encryptedMessage = btoa(message_input.value);
    link_input.value = `${window.location}#${encryptedMessage}`;
    link_input.select(); 


    const encodeMessage = atob(encryptedMessage)
    console.log(encodeMessage)
})