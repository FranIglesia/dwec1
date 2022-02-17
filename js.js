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
       
        }

        if (!document.getElementById("email").checkValidity() ) {
            alert("email no correcto");
        }
        function notificar(msg) {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {//permiso positivo(granted) se crea una notificacion
                    let notification = new Notification(document.title, {//titulo de la notificación
                        body: `No puedes ${msg} \n ${String.fromCodePoint(0x1F62D)}`,//body de la notificación
                        icon: "favicon.ico"
                     
                    });
                } else {
                    alert(`No puedes ${msg} \n ${String.fromCodePoint(0x1F62D)}`)
                }
            });
        }
        function quitarevt(evt) {
            evt.preventDefault();
            notificar(evt.type);
        }

        document.querySelectorAll('#contra, #contra2').forEach(e => {
            e.addEventListener("copy", quitarevt);
            e.addEventListener("paste", quitarevt);
        });
        const email = document.getElementById("email").value;
        const contra = document.getElementById("contra").value;
        const contra2 = document.getElementById("contra2").value;
        alert(`nombre: ${email} email: ${contra} año: ${contra2}`)
    });
});
