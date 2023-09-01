<script setup>
import myFile from './../assets/Afrin_Haque_CV.pdf';


const downloadFile = () => {
    const link = document.createElement('a');
      link.href = myFile;
      link.download = 'AfrinHaque_CV.pdf'; // Specify the desired filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}

</script>

<template>
      <section class="contact" id="contact">
        <div class="content">
          <div class="contact-content">
            <div class="about-me">
              <div class="circle-image">
                <img src="./../assets/afrin.jpeg" alt="Profile Photo">
              </div>
              <h2 class="section-title animation">About Me <span style="text-shadow: none;">🧋</span></h2>
              <div class="tech-hashtags">💻 TechGeek 👁️‍🗨️ INFP-T 📚 Bookworm 🍵 TeaConnoisseur</div>
              <div class="value-proposition animation">
                <p>
                  Hey there! I'm Afrin Haque, a passionate software engineer with a keen interest in web development,
                  cyber security, and emerging technologies. I enjoy building innovative solutions that merge elegant design
                  with robust functionality. My journey involves continuous learning and exploration to stay updated with
                  the dynamic tech landscape. Let's connect and discuss how we can collaborate on exciting projects!
                </p>
              </div>
              <div class="resume-button">
                <a href="/path-to-your-resume.pdf" download>
                  <button  @click="downloadFile" class="download-button">Download Resume 📄</button>
                </a>
              </div>
            </div>
            <div class="contact-form">
              <h2 class="section-title animation">Contact</h2>
              <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key"  value="fb785873-c1e6-4263-81da-67b01794ba87">
              <div class="form-group">
                <input type="text" name="name"  placeholder="Your Name" class="form-input" required>
              </div>
              <div class="form-group">
                <input type="email" name="email" placeholder="Your Email" class="form-input" required>
              </div>
              <div class="form-group">
                <textarea placeholder="Your Message" name="message" class="form-input" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="send-button">Send</button>
              </div>
            </form>
            </div>
          </div>
        </div>
        <div class="social-links">
            <a href="https://medium.com/@afrinhaque19" target="_blank" class="social-link"><i class="fab fa-medium"></i></a>
            <a href="https://www.linkedin.com/in/afrin-haque-dev/" target="_blank" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/cyberdev_in/" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
        </div>
      </section>
    
  </template>
  

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
   
    
    .tech-hashtags {
      margin-top: 10px;
      font-size: 14px;
      color: magenta;
      text-align: center;
      font-family: "Martian Mono", monospace;
    }
    .section-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #fff;
        text-shadow: 1px 1px magenta;
    }
    .contact {
  background-color: #0d1b2a;
  color: #fff;
  padding: 80px 0;
  text-align: center;
  font-weight: 400;
  font-style: normal;
  font-family: "Orelega One", sans-serif;
}

.contact-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
}

.about-me,
.contact-form {
  flex: 1;
  padding: 0 80px;
}

.about-me .circle-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
}

.about-me .circle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styles for the About Me section */
.about-me .section-title,
.contact-form .section-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 1px 1px magenta;
}

.about-me .value-proposition p {
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Styles for the Contact Form */
.contact-form form {
  padding: auto 150px 50px 150px;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #c6c5b9;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
}

.form-input::placeholder {
  color: #c6c5b9;
}

.form-input:focus {
  outline: none;
  border-color: magenta;
}

textarea.form-input {
  height: 150px;
  resize: vertical;
}

.send-button {
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.send-button:hover {
  background-color: #000;
  color: #fff;
}



.social-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-link {
  font-size: 24px;
  color: #fff;
  margin: 0 10px;
  transition: color 0.3s;
}

.social-link:hover {
  color: magenta;
}

.resume-button {
  text-align: center;
  margin-top: 20px;
}

.download-button {
  background-color: #1a2937;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.download-button:hover {
  background-color: #0d1b2a;
}





   
</style>
