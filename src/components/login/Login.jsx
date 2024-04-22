import React, { useEffect, useState } from 'react';
import './Login.css';
import {motion} from 'framer-motion'
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [giveTitle, setGiveTitle] = useState('Login');
    const [showPassword, setShowPassword] = useState(false);
const [flipped,setFlipped]=useState(false);
const [isAnimating,setIsAnimating]=useState(false);
    const flipCard = () => {
        if(!isAnimating){
            setFlipped(!flipped)
            setIsAnimating(true)
        }
        setIsLoggedIn(!isLoggedIn);
    };

    const hideShow = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if(flipped){

        }
    }, [isLoggedIn]);

    return (
        <div className="contained">
            <div className="card" >
                <motion.div  className="inner-box" initial={false} animate={{rotateY:flipped?180:360}} transition={{duration:0.6}} onAnimationComplete={()=>{setIsAnimating(false); 
            setGiveTitle(isLoggedIn ? 'Register' : 'Login')}
            
            }>
                    <div className="card-front">
                        <h2>{giveTitle}</h2>
                        <form action="">
                            <input type="email" className="input-box" placeholder="Your Email ID" required />
                            <input type={showPassword ? 'text' : 'password'} className="input-box" id="password" placeholder="Password" required />
                            <input type="checkbox" onChange={hideShow} /><span>Show Password</span>
                            <button type="submit" className="submit-btni">Submit</button>
                            <input type="checkbox" name="" id="" /><span>Remember Me</span>
                        </form>
                        <button type="button" className="btni" onClick={flipCard}>New User</button>
                        <a href="">Forgot Password</a>
                    </div>
                    <div className="card-back">
                        <h2>REGISTER</h2>
                        <form action="">
                            <input type="text" className="input-box" placeholder="Your Name" required />
                            <input type="email" className="input-box" placeholder="Your Email ID" required />
                            <input type={showPassword ? 'text' : 'password'} className="input-box" id="password" placeholder="Password" required />
                            <input type="checkbox" onChange={hideShow} /><span>Show Password</span>
                            <button type="submit" className="submit-btn">CREATE</button>
                            <input type="checkbox" name="" id="" /><span>Remember Me</span>
                        </form>
                        <button type="button" className="btni" onClick={flipCard}>Already have an Account?<span><i className="fas fa-user"></i> Login</span></button>
                        <a href="">Forgot Password</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
