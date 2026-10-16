import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Activity from "./Activity";
import About from "./About";
import Home from "./Home";
import CustomerPage from "./CustomersPage";
import "./App.css";

const navigation = [
  { to: "/", label: "Overview", icon: "overview", end: true },
  { to: "/activity", label: "Activity", icon: "activity" },
  { to: "/customers", label: "Customers", icon: "customers" },
  { to: "/about", label: "About", icon: "about" },
];

const pageTitles = {
  "/": "Overview",
  "/activity": "Activity",
  "/customers": "Customers",
  "/about": "About VaultBank",
};

function NavigationIcon({ name }) {
  const icons = {
    overview: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    activity: <><path d="M4 5h16M4 12h16M4 19h16" /><circle cx="7" cy="5" r="1" /><circle cx="7" cy="12" r="1" /><circle cx="7" cy="19" r="1" /></>,
    customers: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    about: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className="nav-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" to="/" aria-label="VaultBank home">
          <span className="brand-mark" aria-hidden="true">V</span>
          <span className="brand-name">vault<span>bank</span></span>
        </Link>

        <p className="nav-caption">YOUR BANK</p>
        <nav className="side-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              <NavigationIcon name={item.icon} />
              <span>{item.label}</span>
              {item.to === "/activity" && <span className="nav-indicator" aria-hidden="true" />}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <span className="help-icon" aria-hidden="true">?</span>
            <strong>Need a hand?</strong>
            <p>Our support team is here for you.</p>
            <a href="mailto:support@vaultbank.example">Contact support <span aria-hidden="true">→</span></a>
          </div>
          <p className="sidebar-footnote">Secure banking, made simple.</p>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div>
            <p className="topbar-kicker">PERSONAL BANKING</p>
            <h1>{pageTitles[pathname] || "VaultBank"}</h1>
          </div>
          <div className="profile">
            <span className="profile-status" aria-label="Online" />
            <span className="avatar" aria-hidden="true">JD</span>
            <span className="profile-name">Arjun Mehta</span>
          </div>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="site-footer">
          <span>© 2026 VaultBank</span>
          <span>Banking UI demo · Sample information only</span>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="activity" element={<Activity />} />
          <Route path="customers" element={<CustomerPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
