import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import iconReset from '../../assets/reset.svg';
import { Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../../config/firebase';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
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
      <div className="h-5/6 bg-white rounded-t-3xl pt-4 flex flex-col items-center space-y-4 ">
        <h2 className="text-3xl font-bold font-Nunito">Reset Password</h2>
        <img src={iconReset} alt="login icon" />
        <div className="flex flex-col gap-4">
          <TextField
            label="Your email"
            variant="outlined"
            style={{ width: 300 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full h-11 text-white bg-rose-600 font-ubuntu font-bold rounded-md flex items-center justify-center"
            onClick={() => sendPasswordReset(email)}
          >
            Reset password
          </button>
          <div>
            Already have an account?
            <Link to="/login" className="hover:underline">
              Login now.
            </Link>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
