import './css/Login.css';

export default function LoginPage() {
    return (
      <div>
        <a href="/">
          <h1>
            <img src="/Logo_Solution_Factory_2.png" alt="Logo La l'e-brairie" />
          </h1>
        </a>
        <div className="formlogin">
          <form action="/auth/login" method="POST">
            {/* Headings for the form */}
            <div className="headingsContainer">
              <p>Bienvenue</p>
            </div>
  
            {/* Main container for all inputs */}
            <div className="mainContainer">
              {/* Username */}
              <label htmlFor="Email">E-mail :</label>
              <input type="text" placeholder="Entrez Email" id="Email" name="Email" required />
              <br /><br />
  
              {/* Password */}
              <label htmlFor="Pswrd">Mot de passe :</label>
              <input type="password" placeholder="Entrez mot de passe" id="Pswrd" name="Pswrd" required />
  
              {/* Submit button */}
              <button type="submit">Se connecter</button>
  
              {/* Sign up link */}
              <p className="">Pas de compte? <a href="register">Se créer un compte!</a></p>
              <a href="/"><p className="">Retour à l'accueil</p></a>
            </div>
          </form>
        </div>
        {/* Use conditional rendering for the message */}
        
      </div>
    );
  }