import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import iconLogin from '../../assets/login.svg';
import iconGoogle from '../../assets/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    if (loading) {
      return navigate('/login');
    }
    if (user) navigate('/home');
  }, [user, loading]);

  return (
    <div className="relative h-screen flex-col space-y-8 top-24">
      <div className="px-6 space-y-2 flex flex-col">
        <h3 className="text-white text-sm font-dm">Wellcome to JQuiz</h3>
        <h2 className="font-bold text-white text-xl font-ubuntu">
          Test Your Skills Here
        </h2>
      </div>
      <div className="h-screen bg-white rounded-t-3xl pt-4 flex flex-col items-center space-y-4 ">
        <h2 className="text-3xl font-bold font-Nunito">Login Quiz</h2>
        <img src={iconLogin} className="w-32" alt="login icon" />
        <div className="space-y-4">
          <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-8">
            <TextField
              label="Your email"
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
              Login
            </button>
          </form>
          <button
            className="bg-white shadow-md w-full h-11 text-white rounded-md flex items-center justify-center"
            onClick={signInWithGoogle}
          >
            <img src={iconGoogle}></img>
          </button>
          {error && (
            <p className="text-center text-red-600 ">Wrong password!!!</p>
          )}
          <div className="flex justify-end">
            <Link to="/reset" className="hover:underline">
              Forgot Password
            </Link>
          </div>
          <div className="flex justify-center">
            Don't have accout?
            <Link to="/register" className="hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
