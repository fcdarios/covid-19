import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
      <Link href="/">
            <a className="navbar-brand" >Home</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
                <Link href="/about">
                    <a className="nav-link">
                        About
                    </a>
                </Link>
          </li>
          <li className="nav-item">
                <Link href="/contact">
                    <a className="nav-link">
                        Contact
                    </a>
                </Link>
          </li>
          <li className="nav-item">
              <Link href="/user">
                  <a className="nav-link">
                      Usuarios
                  </a>
              </Link>
          </li>
          <li className="nav-item">
              <Link href="/store">
                  <a className="nav-link">
                      Tienda
                  </a>
              </Link>
          </li>
          <li className="nav-item">
              <Link href="/login">
                  <a className="nav-link">
                      Login
                  </a>
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
