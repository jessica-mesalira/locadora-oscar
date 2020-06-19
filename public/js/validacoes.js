var login_usu;
var senha_user;

function verificar_usuario()
{
    login_usu = (email_usu.value);
    senha_user = (senha_usu.value);

    if(senha_user == 'admin' && login_usu == 'admin')
    {
        window.location.href = '../html/menu-principal.html'
    }
    else
    {
        alert('Login ou senha inválidos');
    }
}

