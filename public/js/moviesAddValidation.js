window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

const $ = (element) => document.getElementById(element);

    console.log("¿Listo para ver unas pelis? :D");
    
    const msgError = (element, msg, target) => {
        $(element).innerText = msg;
        target.classList.add("is-invalid");
    };
    
    const validField = (element, target) => {
        $(element).innerText = null;
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");
    };
    
    $("title").addEventListener("blur", function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorTitle", "Es obligatorio establecer un título", target);
                this.classList.add("is-invalid");
                break;
            case this.value.trim().length < 5:
                msgError("errorTitle", "El minimo es de 5 caracteres", target);
                break;
            default:
                validField("errorTitle", target);
                break;
        }
    }); 
    
    $("rating").addEventListener("blur", function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorRating", "Es obligatorio establecer una calificación", target);
                this.classList.add("is-invalid");
                break;
            case this.value < 0 || this.value > 10:
                msgError("errorRating", "La calificación debe estar entre 0 y 10", target);
                break;
            default:
                validField("errorRating", target);
                break;
        }
    }); 
    
    $("awards").addEventListener("blur", function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorAwards", "Es obligatorio establecer un premio", target);
                this.classList.add("is-invalid");
                break;
            case this.value < 0 || this.value > 10:
                msgError("errorAwards", "El premio debe estar entre 0 y 10", target);
                break;
            default:
                validField("errorAwards", target);
                break;
        }
    }); 
    
    $("release_date").addEventListener("blur", function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorRelease_date", "Es obligatorio establecer una fecha de creación", target);
                this.classList.add("is-invalid");
                break;
            default:
                validField("errorRelease_date", target);
                break;
        }
    }); 
    
    $("length").addEventListener("blur", function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorLength", "Es obligatorio establecer una duración", target);
                this.classList.add("is-invalid");
                break;
            case this.value < 60 || this.value > 360:
                msgError("errorLength", "La duración debe estar entre 60 y 360 minutos", target);
                break;
            default:
                validField("errorLength", target);
                break;
        }
    }); 
    
    $("genre_id").addEventListener("blur", function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorGenre_id", "Es obligatorio establecer un género", target);
                this.classList.add("is-invalid");
                break;
            default:
                validField("errorGenre_id", target);
                break;
        }
    });
    
    $("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let error = false;
        const elements = this.elements;
        for (let i = 0; i < elements.length - 2; i++) {
            if (!elements[i].value.trim() || elements[i].classList.contains('is-invalid')) {
                elements[i].classList.add('is-invalid')
                $('msgError').innerText = 'Hay campos con errores o están vacíos';
                error = true;
            }
        }
        if (error == false) {
            $('msgError').innerText = 'La película se guardó satisfactoriamente';
            this.submit()
        }
    });


}