import { TextField } from '@mui/material';
import iconRegister from '../../assets/register.svg';
import iconGoogle from '../../assets/google.svg';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Regsiter = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/home');
  }, [user, loading]);
  return (
    <div className="relative h-screen flex-col space-y-8 top-24">
      <div className="px-6 space-y-2 flex flex-col">
        <h3 className="text-white text-sm font-dm">Wellcome to JQuiz</h3>
        <h2 className="font-bold text-white text-xl font-ubuntu">
          Register to continue Login
        </h2>
      </div>
      <div className="h-full bg-white rounded-t-3xl pt-4 flex flex-col items-center space-y-6 ">
        <h2 className="text-3xl font-bold font-Nunito">Register JQuiz</h2>
        <img src={iconRegister} className="w-60" alt="login icon" />
        <div className="space-y-6">
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <TextField
              label="Your Name"
              variant="outlined"
              style={{ width: 300 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: 300 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              style={{ width: 300 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full h-11 text-white bg-gradient-to-tl from-secondery to-primary font-ubuntu font-bold rounded-md flex items-center justify-center"
              type="submit"
            >
              Register
            </button>
          </form>
          <button
            className="bg-white shadow-md w-full h-11 text-white rounded-md flex items-center justify-center"
            onClick={signInWithGoogle}
          >
            <img src={iconGoogle}></img>
          </button>
        </div>
        <p>
          Have account?
          <Link to="/login" className="hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regsiter;
