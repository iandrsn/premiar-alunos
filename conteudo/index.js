document.addEventListener('DOMContentLoaded', function () {
    var formentre = document.querySelector('#entre');
    var formcadastro = document.querySelector('#Cadastro');
    var entrecad = document.querySelector('.entre-cad');
    document.querySelector('#view').addEventListener('click', viewsenha);
    document.querySelector('#view1').addEventListener('click', viewsenha1);
    document.querySelector('#view2').addEventListener('click', viewsenha2);



    //login
    function viewsenha() {
        var inputpass = document.getElementById('senha1');
        var bntview = document.getElementById('view');

        if (inputpass.type === 'password') {
            inputpass.setAttribute('type', 'text');
            bntview.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        } else {
            inputpass.setAttribute('type', 'password');
            bntview.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }
    }
    //cadastro
    function viewsenha1() {
        var inputpass1 = document.getElementById('senha');
        var bntview1 = document.getElementById('view1');

        if (inputpass1.type === 'password') {
            inputpass1.setAttribute('type', 'text');
            bntview1.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        } else {
            inputpass1.setAttribute('type', 'password');
            bntview1.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }
    }

    //confirme seu cadastro
    function viewsenha2() {
        var inputpass2 = document.getElementById('confirmarSenha');
        var bntview2 = document.getElementById('view2');

        if (inputpass2.type === 'password') {
            inputpass2.setAttribute('type', 'text');
            bntview2.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        } else {
            inputpass2.setAttribute('type', 'password');
            bntview2.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }
    }

    document.querySelector('#b-entre').addEventListener('click', () => {
        formentre.style.left = "25px";
        formcadastro.style.left = "450px";
        entrecad.style.left = "0px";
    });

    document.querySelector('#b-cadastro').addEventListener('click', () => {
        formentre.style.left = "-440px";
        formcadastro.style.left = "25px";
        entrecad.style.left = "103px";
    });

    function exibirTextoNaTela(tag, texto) {

        let campo = document.querySelector(tag);
        campo.innerHTML = texto;

    }

    var senhaInput = document.querySelector('#senha');
    var confirmarSenhaInput = document.querySelector('#confirmarSenha');

    function verificarSenhas() {
        var senha = senhaInput.value;
        var confirmarSenha = confirmarSenhaInput.value;

        if (senha === "" || confirmarSenha === "") {
            exibirTextoNaTela('#alerta', 'Preencha ambos os campos de senha');
            senhaInput.style.boxShadow = "0 0 5px red";
            confirmarSenhaInput.style.boxShadow = "0 0 5px red";
        } else if (senha !== confirmarSenha) {
            exibirTextoNaTela('#alerta', 'As senhas não coincidem');
            senhaInput.style.boxShadow = "0 0 5px red";
            confirmarSenhaInput.style.boxShadow = "0 0 5px red";
        } else {
            exibirTextoNaTela('#alerta', ' ');
            senhaInput.style.boxShadow = "0 0 5px #1ec396";
            confirmarSenhaInput.style.boxShadow = "0 0 5px  #1ec396";
        }
    }

    confirmarSenhaInput.addEventListener('input', verificarSenhas);
    senhaInput.addEventListener('input', verificarSenhas);
});

let procurar = document.querySelector(`.procurar-box`);

document.querySelector(`#pesquisa`).onclick = () => {
    procurar.classList.toggle(`active`);
}

let navbar = document.querySelector(`.navbar`);

document.querySelector(`#menu-icone`).onclick = () => {
    navbar.classList.toggle(`active`);
}