import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../api/auth';
import { LogOut } from 'lucide-react';

export default function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout Failed:', error);
    }
  };

  return (
    <div className="bg-primary text-text-primary min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-primary/80 backdrop-blur-xl border-b border-border-color z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xl font-bold text-text-primary">Wonjae's AP Lab</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-card border border-border-color rounded-full flex items-center justify-center cursor-pointer hover:border-border-hover transition-colors">
              <i className="fas fa-bell text-text-secondary"></i>
            </div>
            <div className="w-9 h-9 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center font-semibold cursor-pointer">
              WJ
            </div>
             <button onClick={handleLogout} title="Logout" className="text-text-secondary hover:text-text-primary transition-colors">
                <LogOut size={20} />
            </button>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto p-8">
            {children}
        </div>
      </main>
    </div>
  );
}