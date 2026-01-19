import React, { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { usePlatform } from '@/hooks/usePlatform';
import './Header.css';

const Header: React.FC = () => {
    const { isDesktop } = usePlatform();
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    // Solo renderizar en desktop/web
    if (!isDesktop) return null;

    return (
        <header className="app-header">
            <div className="header-content container">
                {/* Logo con perrito */}
                <a href="/home" className="header-logo">
                    <img src="/logo-dog.png" alt="Proyecto Dumbo" className="logo-image" />
                </a>

                {/* Navigation */}
                <nav className="header-nav">
                    {/* Nosotros */}
                    <div className="nav-item">
                        <a href="/nosotros" className="nav-link">
                            Nosotros
                        </a>
                    </div>

                    {/* Adopta */}
                    <Menu
                        as="div"
                        className="nav-item dropdown"
                        onMouseEnter={() => setOpenMenu('adopta')}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <MenuButton className="nav-link dropdown-toggle">
                            Adopta
                            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </MenuButton>
                        {openMenu === 'adopta' && (
                            <MenuItems static className="dropdown-menu">
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/quiero-adoptar" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Quiero Adoptar
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/requisitos-adopcion" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Requisitos de adopción
                                        </a>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        )}
                    </Menu>

                    {/* Salva vidas */}
                    <Menu
                        as="div"
                        className="nav-item dropdown"
                        onMouseEnter={() => setOpenMenu('salva')}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <MenuButton className="nav-link dropdown-toggle">
                            Salva vidas
                            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </MenuButton>
                        {openMenu === 'salva' && (
                            <MenuItems static className="dropdown-menu">
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/castra" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Castra
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/denuncia-maltrato" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Denuncia el maltrato
                                        </a>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        )}
                    </Menu>

                    {/* Participa */}
                    <Menu
                        as="div"
                        className="nav-item dropdown"
                        onMouseEnter={() => setOpenMenu('participa')}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <MenuButton className="nav-link dropdown-toggle">
                            Participa
                            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </MenuButton>
                        {openMenu === 'participa' && (
                            <MenuItems static className="dropdown-menu">
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/voluntarios" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Voluntarios
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/hogar-transito" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Hogar de tránsito
                                        </a>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        )}
                    </Menu>

                    {/* Tienda */}
                    <div className="nav-item">
                        <a href="/tienda" className="nav-link">
                            Tienda
                        </a>
                    </div>

                    {/* Donaciones */}
                    <Menu
                        as="div"
                        className="nav-item dropdown"
                        onMouseEnter={() => setOpenMenu('donaciones')}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <MenuButton className="nav-link dropdown-toggle">
                            Donaciones
                            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </MenuButton>
                        {openMenu === 'donaciones' && (
                            <MenuItems static className="dropdown-menu">
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/aporte-economico" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Aporte económico
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ focus }) => (
                                        <a href="/donacion-insumos" className={`dropdown-item ${focus ? 'active' : ''}`}>
                                            Donación de insumos
                                        </a>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        )}
                    </Menu>

                    {/* Contacto */}
                    <div className="nav-item">
                        <a href="/contacto" className="nav-link">
                            Contacto
                        </a>
                    </div>
                </nav>

                {/* Botón Donar Ahora */}
                <div className="header-cta">
                    <a href="/donar" className="donate-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        Donar Ahora
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

