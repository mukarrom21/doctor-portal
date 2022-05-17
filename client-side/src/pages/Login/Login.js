import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[88vh]'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-center text-2xl font-bold mb-5'>Login</h2>
                    <form className='grid grid-cols-1 gap-3'>
                    <input type="email" placeholder="Your Email" name='email' class="input input-bordered w-full max-w-xs" />
                    <input type="password" placeholder="Your Password" name='password' class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Login" name='email' class="btn btn-accent text-white font-bold w-full max-w-xs" />
                    </form>
                    <p>New to Doctors Portal? <Link to className='text-secondary'>Create New Account</Link></p>
                    <div class="divider">OR</div>
                    <button class=" group h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 
 hover:bg-accent hover:text-white focus:bg-blue-50 active:bg-blue-100">
                        <div class="relative flex items-center space-x-4 justify-center">
                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo" />
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-white sm:text-base">Continue with Google</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;