<script setup></script>

<template>
  <section id="cyber-security" class="cyber-security">
    <div class="content">
      <h2 class="section-title animation">Cyber Security</h2>

      <div class="value-proposition animation">
        <div class="cyber-security-grid">
          <div class="cyber-security-item">
    <i class="fas fa-certificate"></i>
    <p class="item-title">Certifications</p>
    <p>Completed syllabus for CISSP certification, a standard in cybersecurity.</p>
  </div>

  <div class="cyber-security-item">
    <i class="fas fa-code"></i>
    <p class="item-title">Scripting & System Admin</p>
    <p>
      Skilled in managing Linux systems, including tasks like partitioning, user management,
      and scripting with Python and Bash.
    </p>
  </div>

  <div class="cyber-security-item">
    <i class="fas fa-book-open"></i>
    <p class="item-title">Courses & Learning</p>
    <p>
      Actively pursuing courses in ethical hacking, incident response, and cybersecurity best practices.
    </p>
  </div>

  <div class="cyber-security-item">
    <i class="fas fa-shield-alt"></i>
    <p class="item-title">Security Mindset</p>
    <p>
      Committed to staying informed about emerging cyber threats, adhering to security standards,
      and understanding the importance of cybersecurity in today's digital landscape.
    </p>
  </div>
        </div>
        <br/>
        <h2 class="item-title ">Tools & Technologies</h2>
        <div class="tools-list animation">
      <div class="tool">
        <!-- <img src="nmap-icon.png" alt="Nmap Icon" class="tool-icon"> -->
        <p class="tool-name">Nmap</p>
      </div>
      <div class="tool">
        <!-- <img src="mascan-icon.png" alt="Mascan Icon" class="tool-icon"> -->
        <p class="tool-name">Mascan</p>
      </div>
      <div class="tool">
        <!-- <img src="mascan-icon.png" alt="Mascan Icon" class="tool-icon"> -->
        <p class="tool-name">Maltego</p>
      </div>
      <div class="tool">
        <!-- <img src="parrotos-icon.png" alt="ParrotOS Icon" class="tool-icon"> -->
        <p class="tool-name">ParrotOS</p>
      </div>
      <div class="tool">
        <!-- <img src="kali-icon.png" alt="Kali Linux Icon" class="tool-icon"> -->
        <p class="tool-name">Kali Linux</p>
      </div>
      <div class="tool">
        <!-- <img src="burpsuite-icon.png" alt="Burp Suite Icon" class="tool-icon"> -->
        <p class="tool-name">Burp Suite</p>
      </div>
      <div class="tool">
        <!-- <img src="owaspzap-icon.png" alt="OWASP Zap Icon" class="tool-icon"> -->
        <p class="tool-name">Elastic Search</p>
      </div>
    </div>
      </div>
    </div>
    <div class="content">
      <p class="resource-text">
        Explore more about Cyber Security:
        <a href="#" class="resource-link">Case Studies</a>
        {{ " " }}
        <a href="#" class="resource-link">Articles</a>
      </p>
    </div>
  </section>
</template>



  

  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');

  .cyber-security-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
  }

  .cyber-security-item {
    padding: 20px;
    background-color: #1a2937;
    border-radius: 10px;
    text-align: center;
    color: #c6c5b9;
  }

  .cyber-security-item i {
    font-size: 24px;
    margin-bottom: 10px;
    color: #fff;
  }

  .item-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
  }

  .future-goals {
    margin-top: 40px;
    color: #c6c5b9;
    text-align: left;
    font-family: "Martian Mono", monospace;
    line-height: 1.6;
  }

  /* Animation for the future goals */
  .future-goals.animation {
    animation: fadeInText 1.5s ease-in-out forwards;
    opacity: 0;
  }

  .flex-30 {
    display: flex;
    flex-basis: 30%;
    flex-direction: column;
  }
  .value-statement {
    font-family: "Martian Mono", monospace;
    font-size: 18px;
    color: #c6c5b9;
    margin-bottom: 20px;
    text-align: center;
  }
  .sub-title {
    color: #c6c5b9;
    font-size: 20px;
  }
  .cyber-security {
    background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
    color: #fff;
    padding: 50px;
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

  .cyber-security-content {
    margin-top: 40px;
    font-family: "Martian Mono", monospace;
    color: #c6c5b9;
    text-align: left;
    line-height: 1.6;
  }

  /* Your existing animation styles... */

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

  /* Animation for the value proposition and content */
  @keyframes fadeInText {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .value-proposition.animation,
  .cyber-security-content.animation {
    animation: fadeInText 1.5s ease-in-out forwards;
    opacity: 0;
  }

  .resource-text {
  margin-top: 20px;
  font-family: "Martian Mono", monospace;
  color: #c6c5b9;
  text-align: center;
  line-height: 1.6;
}

.resource-link {
  color: #000;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.resource-link:hover {
  border-color: #c6c5b9;
}

.tools {
  background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
  color: #fff;
  padding: 50px;
  text-align: center;
  font-weight: 400;
  font-style: normal;
  font-family: "Orelega One", sans-serif;
}

.tool {
  display: inline-block;
  margin: 20px;
  text-align: center;
}

.tool-icon {
  width: 80px;
  height: 80px;
}

.tool-name {
  color: #c6c5b9;
  font-size: 18px;
  margin-top: 10px;
}

</style>

  