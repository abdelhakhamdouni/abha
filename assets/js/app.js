document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        let name = e.target.querySelector("#name").value
        let email = e.target.querySelector("#email").value
        let phone = e.target.querySelector("#phone").value
        let message = e.target.querySelector("#message").value

        let contact = {
            name,
            email, 
            phone, 
            message
        }

        fetch()

    })

