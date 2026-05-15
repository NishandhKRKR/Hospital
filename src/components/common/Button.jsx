import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all active:scale-95 shadow-lg";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white hover:shadow-primary/30",
    secondary: "bg-white text-primary hover:bg-slate-50 hover:shadow-black/5",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionLink = motion(Link);
  const MotionButton = motion.button;

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
