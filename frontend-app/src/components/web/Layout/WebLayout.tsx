import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './WebLayout.css';

interface WebLayoutProps {
    children: ReactNode;
    pageTitle?: string;
}

/**
 * Layout principal para versiones Web
 * Incluye Header, Footer y manejo de scroll
 */
const WebLayout: React.FC<WebLayoutProps> = ({ children, pageTitle }) => {
    return (
        <div className="web-layout">
            <Header />
            <main className="web-main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default WebLayout;
