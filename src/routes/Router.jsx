import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import MovieDetails from '../components/MovieDetails';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;