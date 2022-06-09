import { useNavigate } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
    const navigate = useNavigate();
    return (
        <div className='container--app'>
            <h1
                className='title--galery'
                onClick={() => {
                    navigate("/");
                }}
            >
                GALERIA DE FOTOS
            </h1>
            <hr />
            <MainRoutes />
            <footer>&copy; Douglas Monteiro</footer>
        </div>
    );
};

export default App;
