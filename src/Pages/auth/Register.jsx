import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('register', data).then(({ bool, result }) => {
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
    <>
      <div className='row justify-content-center'>
        <div className="col-12">
          <h2>Register</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group py-1">
              <label htmlFor="name">Name</label>
              <input
                className='form-control'
                type="text"
                name="name"
                placeholder="name"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && <span>name is required</span>}
            <div className="form-group py-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className='form-control'
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div className="form-group py-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className='form-control'
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Password is required</span>}

            </div>
            <div className="form-group py-1">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                className='form-control'
                placeholder="Password"
                {...register("password_confirmation", { required: true })}
              />
              {errors.confirm_password && <span>Confirm password is required</span>}

            </div>
            <div className="form-group py-1 d-flex justify-content-center">
              <button type="submit" className='btn btn-primary'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
