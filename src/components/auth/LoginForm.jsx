import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "../../context/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function LoginForm() {

  const { login } = useAuth()
  const navigate = useNavigate()
  const {handleSubmit, register, formState: { errors }, reset} = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (dataForm) => {
  
    login(dataForm)
    reset()
    navigate('/')
  }
  //********************************************************************* */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block font-semibold">E-mail</label>
        <input
          type="email"
          placeholder="Type your email"
          className="input_form"
          {...register("email")}
        />
        {errors.email && (
          <p 
          className="error-Validation ">
            {errors.email.message}
            </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Password</label>
        <input
          type="password"
          placeholder="Type your password"
          className="input_form"
          {...register("password")}
        />
        {errors.password && (
          <p 
          className="error-Validation ">
            {errors.password.message}
            </p>
        )}
      </div>
      <button className="btn w-full">Sign in</button>
    </form>
  );
}

export default LoginForm;
