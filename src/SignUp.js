import React from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
const SignUp = () => {
  const firebase = useFirebase();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h1 className="text-center mb-3">S'inscrire</h1>

      <Card className="p-4">
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Prénom et nom</label>
                    <input {...register('name')} className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <label>Téléphone</label>
                    <input {...register('phone')} className="form-control" />
                </div>
                <div className="form-group mt-3 lg">
                    <label>Mot de passe</label>
                    <input {...register('password', { required: true })} className="form-control" />
                </div>
                <div className="form-group mt-3 lg">
                    <label>Confirmer mot de passe</label>
                    <input {...register('password', { required: true })} className="form-control" />
                </div>
                {errors.phone && <p>veillez renseigner votre téléphone.</p>}
                {errors.phone && <p>veillez renseigner votre nom.</p>}
                {errors.password && <p>veillez renseigner votre mot de passe</p>}
                <div className="d-grid gap-2">
                <input type="submit"   value="Se connecter" className="btn btn-success mt-3 btn-lg"  />
                </div>
            </form>
        </div>
        <p className="mt-4">
            Pas encore de compte <a href="/signup"> Créer un compte</a>
        </p>
      </Card>
      <div className="d-grid gap-2">
        <button
            onClick={(event) => {
            event.preventDefault();
            signInWithGoogle();
            }}
            className="btn btn-lg mt-3 btn-danger"
        >
         S'inscrire avec Google
        </button>
      </div>
      <div className="d-grid gap-2">
        <button
            onClick={(event) => {
            event.preventDefault();
            signInWithGoogle();
            }}
            className="btn btn-lg mt-3 btn-primary"
        >
         S'inscrire avec Facebook
        </button>
      </div>
    </Container>
  );
};
export default SignUp;