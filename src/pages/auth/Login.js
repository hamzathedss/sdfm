import "./auth.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {accessService} from "../../_services";
import MainLogo from "../../assets/mainlogo.png";

const Login = () => {
    let navigate = useNavigate();

    const [passcode, setPasscode] = useState('');

    const onChange = (e) => {
        setPasscode(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // accessService.login(passcode)
        //     .then(res => {
        //         accessService.saveToken(res);
        //         navigate('/depotages');
        //     })
        //     .catch(error => console.log(error))
        if (accessService.login(passcode)) {
            accessService.saveToken("123456789");
            navigate('/depotages');
        } else {
            alert("incorrect passcode")
        }
    }

    if (accessService.isLogged()) {
        return (
            navigate('/depotages')
        );
    }

    return (
        <div className="main-login-page vh-100 text-center d-flex justify-content-center align-items-center">
            <div className="bg-white shadow rounded-4 login-holder py-4 px-3">
                <img src={MainLogo} alt="" className="logo-text mb-3"/>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className="mb-2 fw-bold text-black-50 ps-3"
                               htmlFor="passcode">Mot de pass</label>
                        <input type="password" className="form-control"
                               placeholder="********" name="passcode" id="passcode"
                               value={passcode} onChange={onChange}/>
                    </div>
                    <div className="mt-3">
                        <button type="submit"
                                className="fw-bold enter-button">Enter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;