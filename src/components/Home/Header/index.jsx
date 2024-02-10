import React from "react";
import './styles.css'
function Header() {
    return(
        <header className="home-header">
        <h1>
            <span>Conscious Mind</span>
        </h1>
        <p>
        <span className="intro-span">"</span>
        Welcome to my website amigos! Our Body, Mind and Intellect are tools bestowed upon us,
        the question is whether we wield them or they wield us. Through the medium 
        of short stories and personal experiences, we will practice how to think critically and respond 
        effectively in diverse situations. Join me as we unravel the potential of these tools and harness them to lead a purposeful and empowered life.
        <span className="intro-span">"</span> 
        </p>
        </header>
    );
}
export default Header;