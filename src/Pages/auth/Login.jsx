import axios from '../../axios.js'
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('login', data).then(({bool, result}) => {
                console.log(bool)
                if (bool) {
                    // Store authentication token in local storage or state
                    localStorage.setItem('accessToken', result.token)
                    alert('Login successful')
                }
            });

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span>Email is required</span>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && <span>Password is required</span>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
