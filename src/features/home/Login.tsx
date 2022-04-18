import { Link } from "react-router-dom";
import { useForm }from 'react-hook-form'
import { useLoginMutation } from "../../app/services/worlds";
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../app/slices/authSlice';
import { useNavigate } from 'react-router'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

function Login() {
    
    const { register, handleSubmit } = useForm()
    const [login] = useLoginMutation()
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const user = await login(data).unwrap()
            localStorage.setItem("token", user.token)
            dispatch(setCredentials(user))
            navigate('/discover')
        } catch (error) {
            console.log("Oh no there was an error")
        }
    }

    return (
        <div className="login-container">
            <form style={{display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "space-around"}} color="secondary" onSubmit={handleSubmit(onSubmit)}>
                <InputLabel>Email</InputLabel>
                <Input {...register("email")} />
                <InputLabel>Password</InputLabel>
                <Input {...register("password")}/>
                <Button type="submit">Login</Button>
            </form>
            <Link to="/discover">Login</Link>
        </div>
    );
}

export default Login;