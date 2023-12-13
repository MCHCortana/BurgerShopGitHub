import './home.scss';

import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <main className="home">
      <div>
        <h1>BURGER SHOP</h1>
        <p>Give yourself a tasty burger.</p>
      </div>
      <Link to="/menu_page">
        <p>Explore menu</p>
      </Link>
    </main>
  );
};
