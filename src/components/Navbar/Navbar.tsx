import type React from "react";
import { NavLink } from "react-router-dom";

const linkBase: React.CSSProperties = {
    padding: "8px 12px",
    textDecoration: "none",
    borderRadius: 8,
    fontWeight: 400,
    color: "var(--color-black)",
    fontFamily: "inherit",
    background: "transparent",
    transition: "background 0.2s, color 0.2s",
};

export default function Navbar() {
    const headerHeight = 64;
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: headerHeight,
                background: "#fff",
                zIndex: 1000,
                borderBottom: "1px solid #e5e5e5",
                display: "flex",
                alignItems: "center",
            }}
        >
            <nav
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 32px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                {/* Left: Logo */}
                <NavLink
                    to="/"
                    end
                    style={{
                        ...linkBase,
                        fontWeight: 800,
                        fontSize: 26,
                        letterSpacing: 1,
                        marginRight: 32,
                        fontFamily: "var(--font-rag123), 'Oswald', Arial, sans-serif",
                        color: "#000", // Ensure logo is always visible
                    }}
                >
                    Athletain
                </NavLink>
                {/* Center: Links */}
                <div style={{ display: "flex", gap: 32, flex: 1, justifyContent: "center" }}>
                    <NavLink
                        to="/"
                        end
                        style={({ isActive }) => ({
                            ...linkBase,
                            fontWeight: isActive ? 700 : 400,
                            letterSpacing: 2,
                            color: isActive ? "#000" : "#888",
                            borderBottom: isActive ? "2px solid #000" : "none",
                        })}
                    >
                        INICIO
                    </NavLink>
                    <NavLink
                        to="/quienes-somos"
                        style={({ isActive }) => ({
                            ...linkBase,
                            fontWeight: isActive ? 700 : 400,
                            letterSpacing: 2,
                            color: isActive ? "#000" : "#888",
                            borderBottom: isActive ? "2px solid #000" : "none",
                        })}
                    >
                        SOBRE NOSOTROS
                    </NavLink>
                    <NavLink
                        to="/planes"
                        style={({ isActive }) => ({
                            ...linkBase,
                            fontWeight: isActive ? 700 : 400,
                            letterSpacing: 2,
                            color: isActive ? "#000" : "#888",
                            borderBottom: isActive ? "2px solid #000" : "none",
                        })}
                    >
                        PLANES
                    </NavLink>
                </div>
                {/* Right: Login */}
                <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                        ...linkBase,
                        fontWeight: 500,
                        letterSpacing: 2,
                        color: isActive ? "#000" : "#888",
                        marginLeft: 32,
                    })}
                >
                    INICIAR SESIÓN
                </NavLink>
            </nav>
        </header>
    );
}