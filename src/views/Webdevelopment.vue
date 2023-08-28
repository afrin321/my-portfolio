<script setup>

</script>

<template>
  <section id="web-development" class="web-development">
    <div class="content">
      <h2 class="section-title">Web Development</h2>
      <div class="value-proposition">
        <p class="highlight">Crafting Immersive Digital Experiences</p>
        <p>
          I specialize in creating web applications that go beyond aesthetics. My focus is on merging cutting-edge design with robust functionality, resulting in seamless and immersive digital experiences for users.
        </p>
        <p>
          From intuitive user interfaces to optimized performance, I ensure every aspect of your web application contributes to its success. My expertise spans front-end and back-end development, allowing me to bring your vision to life while adhering to best practices and industry standards.
        </p>
      </div>
      <div class="web-development-sections">
        <div class="web-development-section frontend">
          <h3>Frontend Development</h3>
          <p>Creating stunning user interfaces and engaging user experiences using modern web technologies.</p>
          <p><strong>Skills:</strong> HTML, CSS, JavaScript, Vue.js, React</p>
        </div>
        <div class="web-development-section backend">
          <h3>Backend Development</h3>
          <p>Building the server-side logic and APIs that power your web application's functionality.</p>
          <p><strong>Skills:</strong> Node.js/Express, Spring Boot, Laravel</p>
        </div>
        <div class="web-development-section databases">
          <h3>Database Design</h3>
          <p>Designing efficient and scalable database structures to manage your application's data.</p>
          <p><strong>Skills:</strong> SQL, NoSQL, Database Design, Data Security</p>
        </div>
        <div class="web-development-section integration">
          <h3>Integration</h3>
          <p>Seamlessly integrating third-party services and APIs to enhance your application's capabilities.</p>
          <p><strong>Skills:</strong> API Integration, Payment Gateways, Social Media Integration</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');


.web-development {
    background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
    color: #fff;
    padding: 100px;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-family: "Orelega One", sans-serif;
  }

  .section-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 1px 1px magenta;
  }

  .value-proposition {
    margin-top: 30px;
    font-family: "Martian Mono", monospace;
    color: #c6c5b9;
  }

  .value-proposition p {
    margin-bottom: 15px;
  }

  .web-development-sections {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
  }

  .extra-decor {
    text-decoration: underline; 
     text-decoration-color: magenta;
    text-decoration-thickness: 1px;
    text-decoration-style: wavy;
  }

  .web-development-section {
    flex: 1;
    padding: 20px;
    background-color: #1a2937;
    border-radius: 10px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;

    box-shadow: 1px 1px 1px 1px magenta;
  }

  .web-development-section h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: 400;
    font-style: normal;
    font-family: "Orelega One", sans-serif;

    
    
  }

  .web-development-section p {
    color: #c6c5b9;
    font-weight: 400;
    font-style: normal;
    font-family: "Orelega One", sans-serif;
  }

  .web-development-section p:last-of-type,
  .web-development-section p:last-of-type > strong {
    color: #c6c5b9;
    font-weight: 200;
    font-style: normal;
    font-family: "Orelega One", sans-serif;
    
  }

  

  /* Your existing button styles... */

  /* Animation for the section title */
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .section-title.animation {
    animation: pulse 2s infinite;
  }

  /* Animation for the value proposition and sections */
  @keyframes fadeInText {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .value-proposition.animation,
  .web-development-sections.animation {
    animation: fadeInText 1.5s ease-in-out forwards;
    opacity: 0;
  }

  @media only screen and (max-width: 810px) {
    .web-development-sections {
      flex-direction: column;
    }

    .web-development {
      padding: 30px;
    }

    .web-development-section  {
      margin-top: 20px;
      /* margin-left: auto;
      margin-right: auto; */
    }
  }

</style>