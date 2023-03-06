import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthGuard from "./_helpers/AuthGuard";
import PrivateRouter from "./pages/private/PrivateRouter";
import IsCodeTrue from "./_helpers/IsLogged";
import AuthRouter from "./pages/auth/AuthRouter";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const interval = setInterval(() => {
            window.location.reload();
        }, 300000); // 5 min
        // utes in milliseconds
        return () => clearInterval(interval);
    }, []);
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={
                    <AuthGuard>
                        <PrivateRouter/>
                    </AuthGuard>

                }/>
                <Route path="/auth/*" element={
                    <IsCodeTrue>
                        <AuthRouter/>
                    </IsCodeTrue>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
