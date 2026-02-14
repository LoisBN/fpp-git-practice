import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
} from "react-router";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        <nav className="border-b border-gray-800 bg-gray-900">
          <div className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-4">
            <span className="text-lg font-bold text-white">Git Practice</span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
              }
            >
              Profile
            </NavLink>
          </div>
        </nav>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
