window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener("click", () => {

        const letramay = new RegExp("(?=.*?[A-Z])");
        const letramin = new RegExp("(?=.*?[a-z])");
        const digito = new RegExp("(?=.*?[0-9])");
        const especial = new RegExp("(?=.*?[=#?!@$%^&*-])");
        const longitud = new RegExp(".{8,}");
        const p = document.querySelector('#contra').value;
        let expresiones = [letramay, letramin, digito, especial, longitud];
        console.log(expresiones);
        let valido = true;

        expresiones.forEach((v, k) => {
            console.log(v.test(p));
            if (!v.test(p)) {
                valido = false;
                document.querySelector(`li:nth-child(${k + 1})`).classList.add("incorrecto");
                document.querySelector(`li:nth-child(${k + 1})`).classList.remove("correcto");
            } else {
                document.querySelector(`li:nth-child(${k + 1})`).classList.add("correcto");
                document.querySelector(`li:nth-child(${k + 1})`).classList.remove("incorrecto");
            }


        })

// HAY QUE PONER 2 CONTRASEÑAS Y 1 CAMPO EMAIL Y HACER EN EL INPUT LA VALIDACION (COMO ESTA AHORA MISMO EN BUTON) Y EVITAR QUE SE
//PUEDA PEGAR Y COPIAR
       
        if (!valido) {
            document.querySelector('#contra').classList.add("incorrecto");
            document.querySelector('#contra').classList.remove("correcto");
        }
        else {
            document.querySelector('#contra').classList.remove("incorrecto");
            document.querySelector('#contra').classList.add("correcto");
            // var fecha = new Date;
            // fecha.setDate(fecha.getDate() + 365);
            // document.cookie = `password=${p};expires=${fecha.toUTCString()}`;
            // sessionStorage.setItem('password', p);
            // localStorage.setItem('plocal', p)
        }

        if (!document.getElementById("email").checkValidity() ) {
            alert("email no correcto");
        }
        const email = document.getElementById("email").value;
        const contra = document.getElementById("contra").value;
        const contra2 = document.getElementById("contra2").value;
        alert(`nombre: ${email} email: ${contra} año: ${contra2}`)
    });
});
