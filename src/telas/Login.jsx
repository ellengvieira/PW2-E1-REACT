import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signin.css"
const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const isAuth = !!(localStorage.getItem("usuario") && localStorage.getItem("senha"));

    return (
        <div>
            {!isAuth ? (
                    <div class="text-center">
                        <main className="form-signin w-100 m-auto">
                            <h2>Login</h2>
                            <div className="form-floating">
                                <input type="usuario" className="form-control" id="floatingInput"  onChange={e => setUsuario(e.target.value)} value={usuario}/>
                                <label for="floatingInput">Usuario</label>
                            </div>
                            <div className="form-floating">
                                <input type="senha" className="form-control" id="floatingPassword" onChange={e => setSenha(e.target.value)} value={senha}/>
                                <label for="floatingPassword">Senha</label>
                            </div>
                            <br/>
                            <button className="w-100 btn btn-lg btn-primary"onClick={() => { 
                                localStorage.setItem("senha", senha);
                                localStorage.setItem("usuario", usuario);
                                navigate('/'); 
                                window.location.reload(false);
                                }
                            }>Login</button>
                        </main>
                </div>
            ) : (
                <div class="text-center">
                    <main className="form-signin w-100 m-auto">
                        <button className="w-100 btn btn-lg btn-primary" onClick={
                            () => { 
                                localStorage.removeItem("usuario");
                                localStorage.removeItem("senha");
                                navigate('/');
                                window.location.reload(false);
                                }
                        }>Logout</button>
                    </main>                    
                </div>
              )}
        </div>
    )
}

export default Login;