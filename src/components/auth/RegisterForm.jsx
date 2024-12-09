import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router";

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  gender: z.enum(['male', 'female', 'other'], {message: 'select a genre'}) 
});

function RegisterForm() {
  const {register: createUser} = useAuth()
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (dataForm) => {
    createUser(dataForm);
    reset()
    navigate('/login')
  };
  //********************************************************************* */

  return (

  
    <form onSubmit={handleSubmit(onSubmit)}>
       {/*fisrt name*/}
      <div className="mb-4">
        <label className="block font-semibold">First Name</label>
        <input
          placeholder="first name"
          className="input_form"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p 
          className="error-Validation block my-4">
            {errors.firstName.message}
            </p>
        )}
      </div>

        {/*last name*/}
      <div className="mb-4">
        <label className="block font-semibold">Last Name</label>
        <input
          placeholder="last name"
          className="input_form"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p 
          className="error-Validation block my-4">
            {errors.lastName.message}
            </p>
        )}
      </div>

         {/*email*/}
      <div className="mb-4">
        <label className="block font-semibold">Email</label>
        <input
          placeholder="email"
          className="input_form"
          {...register("email")}
        />
        {errors.email && (
          <p 
          className="error-Validation block my-4">
            {errors.email.message}
            </p>
        )}
      </div>

         {/*password*/}
      <div className="mb-4">
        <label className="block font-semibold">Password</label>
        <input
          type="password"
          placeholder="password"
          className="input_form"
          {...register("password")}
        />
        {errors.password && (
          <p 
          className="error-Validation block my-4">
            {errors.password.message}
            </p>
        )}
      </div>


          {/*gender*/}
       <div className="mb-4">
        <label className="block font-semibold">Gender</label>

        <select
          className="input_form"
          {...register("gender")}
        >
          <option value="">Select a genre</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>


        {errors.gender && (
          <p 
          className="error-Validation block my-4">
            {errors.gender.message}
            </p>
        )}
      </div>

      <button className="btn w-full">Create an account</button>
    </form>
  );
}

export default RegisterForm;