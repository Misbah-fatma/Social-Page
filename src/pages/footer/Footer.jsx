import React from "react";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center ">
          <div className="col-md-3">        
          <span class="center"> &copy; Made by MISBAH FATMA </span>         
                                                                                           
	<p></p>
            <a className="text-dark fs-4" href="https://github.com/misbah-fatma" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
