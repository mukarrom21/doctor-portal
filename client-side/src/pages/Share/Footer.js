import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 flex justify-around ">
        <div>
          <span class="footer-title uppercase">Services</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title uppercase">Oral health</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title uppercase">out address</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright &copy; 2022 All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
