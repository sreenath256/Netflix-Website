import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
          
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="about">
            <h6>About</h6>
            <p class="text-justify"> <i>LOREM IPSUM </i> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div class="Catogories">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a className='text_underline' href="#top">C</a></li>
              <li><a className='text_underline' href="#top">UI Design</a></li>
              <li><a className='text_underline'  href="#top">PHP</a></li>
              <li><a className='text_underline' href="#top">Java</a></li>
              <li><a className='text_underline'href="#top">Android</a></li>
              <li><a className='text_underline'href="#top">Templates</a></li>
            </ul>
          </div>

          <div class="quick__links">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a className='text_underline' href="#top">About Us</a></li>
              <li><a className='text_underline' href="sreenathsrp@mail.com">Contact Us</a></li>
              <li><a className='text_underline' href="#top">Contribute</a></li>
              <li><a className='text_underline' href="#top">Privacy Policy</a></li>
              <li><a className='text_underline' href="#top">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        
      </div>
      <hr className='hr'/>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a className='text_underline' href="#top">Scanfcode</a>.
            </p>
          </div>

          
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer