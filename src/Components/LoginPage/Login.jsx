import "./Login.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  
  
    const password = document.getElementById("passwordt");
    const icon = document.getElementById("icon")

      function showPassword(){
        if (password.type === "password"){
          password.setAttribute('type', 'text');
          icon.classList.add('hide')
         }
        else{
          password.setAttribute('type', 'password')
          icon.classList.remove('hide')
        }
      }


 

  return (
    <div className="container-login">
      <div className="login-box">
        <div className="user-circle"></div>
        <p>LOGIN</p>
        <div className="input-info">
          <div className="input-box" id="input1">
            <input type="text" required="required" />
            <span>Usuário</span>
          </div>
          <div className="input-box">
            <input type="password" id="passwordt" name="password" required="required" />
            <span>Senha</span>
            <AiOutlineEye
              className="olho"
              id="icon"
              onClick={showPassword}
            />
          </div>

          <div class="wrapper">
            <a class="button" href="#">
              Login
            </a>
          </div>

          <div className="teste">
            <a href="">
              <p>Esqueceu sua senha?</p>
            </a>
            <a href="">
              <p>Criar conta</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
