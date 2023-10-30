import './css/Login.css';

export default function RegisterPage() {
    return (
        <div>
        {/* Your HTML content goes here */}
        <a href="/">
          <h1>
            <img src="/Logo_Solution_Factory_2.png" alt="Logo La l'e-brairie" />
          </h1>
        </a>
        <div className="formlogin">
          <form action="/auth/register" method="POST">
            {/* Headings for the form */}
            <div className="headingsContainer">
              <p>Bienvenue</p>
            </div>
  
            {/* Main container for all inputs */}
            <div className="mainContainer">
              {/* Username */}
              <label htmlFor="Lname">Nom :</label>
              <input type="text" placeholder="Entrez Nom" id="Lname" name="Lname" required />
              <br /><br />
  
              {/* Password */}
              <label htmlFor="Fname">Prénom :</label>
              <input type="text" placeholder="Entrez Prénom" id="Fname" name="Fname" required />
              <br /><br />
  
              {/* Email */}
              <label htmlFor="Email">E-mail :</label>
              <input type="text" placeholder="Entrez Email" id="Email" name="Email" required />
              <br /><br />
  
              {/* Phone Number */}
              <label htmlFor="Pnumber">Téléphone :</label>
              <input type="text" placeholder="Entrez téléphone" id="Pnumber" name="Pnumber" required />
              <br /><br />
  
              {/* Password */}
              <label htmlFor="Pswrd">Mot de passe :</label>
              <input type="password" placeholder="Entrez mot de passe" id="Pswrd" name="Pswrd" required />
              <br /><br />
  
              {/* Confirm Password */}
              <label htmlFor="Cpswrd">Confirmer mot de passe :</label>
              <input type="password" placeholder="Entrez mot de passe" id="Cpswrd" name="Cpswrd" required />
  
              {/* Submit button */}
              <button type="submit" id="btn">Créer</button>
  
              <p className="">Vous avez déjà un compte ? <a href="login">Se connecter</a></p>
              <a href="/"><p className="">Retour à l'accueil</p></a>
            </div>
          </form>
        </div>
       
      </div>
    );
  }