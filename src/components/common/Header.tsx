import React, { useState } from 'react';
import Button from '../ui/Button';
import { HeaderProps } from '../../types/index';
import logo from '../../logo.png';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';

interface HeaderProps {
  className?: string;
}

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const formJson = Object.fromEntries((formData as any).entries());
  //   const email = formJson.email;
  //   console.log(email);
  //   handleClose();
  // };
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about', active: false },
    { label: 'Services', href: '/services', active: false },
    { label: 'Products', href: '/products', active: false },
    { label: 'Research', href: '/research', active: false }
  ];

  return (
    <header className={`w-full bg-header-overlay shadow-[0px_4px_54px_#888888ff] ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-rubik font-bold text-white">
              <span className="text-white">
                <img src={logo} alt="logo" className="w-20 h-20" />
              </span>
              {/* <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">AI</span> */}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-14">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-inter text-sm xl:text-base transition-colors duration-20 hover:text-white ${
                  item.active ? 'text-white font-bold' : 'text-custom-gray'
                }`}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex">
            {/* <div className="bg-primary border-2 border-primary rounded-3xl p-0.5"> */}
              {/* <div className="bg-header-primary rounded-3xl px-3 py-2.5"> */}
                 <Button variant="primary" size="medium" className="w-full sm:w-auto hover:color-red">
                Contact US
              </Button>
      {/* <Button onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Subscribe</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog> */}
              {/* </div> */}
            {/* </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-primary transition-colors duration-200" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-gray-600 mt-2 pt-4`}>
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-inter text-base transition-colors duration-200 hover:text-white ${
                  item.active ? 'text-white font-semibold' : 'text-custom-gray'
                }`}
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <div className="bg-primary border-2 border-primary rounded-3xl p-0.5 inline-block">
                <div className="bg-header-primary rounded-3xl px-4 py-2.5">
                  <span className="font-raleway font-semibold text-sm text-white">
                    Contact US
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;