import React from 'react';

export const HomePage = () => {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1>Welcome to My Website</h1>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main className="mt-4">
        <section className="jumbotron text-center">
          <div className="container">
            <h2 className="display-4">Featured Content</h2>
            <p className="lead">This is the featured content on our homepage.</p>
          </div>
        </section>

        <section className="container mt-4">
          <h2>Latest News</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="News 1" />
                <div className="card-body">
                  <h5 className="card-title">News Title 1</h5>
                  <p className="card-text">This is some sample news content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="News 2" />
                <div className="card-body">
                  <h5 className="card-title">News Title 2</h5>
                  <p className="card-text">This is some sample news content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="News 3" />
                <div className="card-body">
                  <h5 className="card-title">News Title 3</h5>
                  <p className="card-text">This is some sample news content.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-5">
        <p>&copy; {new Date().getFullYear()} My Website</p>
      </footer>
    </div>
  );
};

