<script setup>


const angles = ['0', '30', '60', '90', '-60', '-30']

const goToProject = () => {
    // alert("project")
    const el = document.getElementById('projects');
    el.scrollIntoView({behavior: "smooth"});
}

const goToContact = () => {
    // alert("project")
    const el = document.getElementById('contact');
    el.scrollIntoView({behavior: "smooth"});
}

</script>

<template>
    <section id="hero" class="hero">
    <div class="content">
      <h1 class="name fade-in-text">Afrin Haque 
        <!-- <span style="text-shadow: none;">👽</span> -->
      </h1>
      <p class="role">Software Engineer 👩🏻‍💻</p>
      <div class="brand-statement">
        <p>Exploring the Intersection of Web Development, Cyber Security, and Emerging Technologies. 📈🌐🗞️</p>
      </div>
      <div class="value-proposition">
        <p class="highlight">
          Empowering Businesses with Cutting-Edge Solutions and Secure Web Experiences.
        </p>
        <p>
          I'm dedicated to creating innovative web applications that seamlessly merge elegant
          design with robust functionality. With a passion for cybersecurity, I ensure your digital
          presence remains protected in an ever-evolving online landscape.
        </p>
      </div>
      <div class="cta-buttons">
        <button class="project-showcase button" @click="goToProject">Explore My Work 🚧</button>
        <button class="get-in-touch button" @click="goToContact">Connect With Me ☎️</button>
      </div>
    </div>
    <div class="decoration"></div>
  </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
   .hero {
        box-sizing: border-box;
        width: 100%;
        height: min-content; /* 800px */
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 100px 0px 100px;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        top: 0px;
        align-content: center;
        flex-wrap: nowrap;
        border-radius: 0px 0px 0px 0px;
    
        background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
        color: #fff;
        border-radius: 0;
    }

    .content {
      /* ... Your existing content styles ... */
      padding: 0px 100px 50px;
      text-align: left;
    }

    .name {
      font-style: normal;
      font-weight: 400;
      font-family: "Orelega One", sans-serif;
      font-size: 54px;
      text-shadow: 3px 3px magenta;
      color: #fff;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    .role {
      font-size: 24px;
      color: #c6c5b9;
      font-family: "Martian Mono", monospace;
    }

    .value-proposition {
      margin-top: 40px;
      color: #c6c5b9;
      /* text-shadow: 1px 1px #c6c5b9; */
      font-family: "Martian Mono", monospace;
      animation: fadeInText 1.5s ease-in-out forwards;
      opacity: 0;
      color: #fff; /* Adjusted text color */
    }

    .highlight {
      color: #000;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .cta-buttons {
      /* ... Your existing CTA button styles ... */
      margin-top: 30px;
      display: flex;
      justify-content: flex-start;
      z-index: 1000;

      animation: slideInButtons 1.5s ease-in-out forwards;
      opacity: 0;
    }

    @keyframes slideInButtons {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .project-showcase,
    .get-in-touch {
      /* ... Your existing button styles ... */
      background-color: #c6c5b9;
      color: #000;
      font-size: 18px;
      font-weight: bold;
    }

    .project-showcase:hover,
    .get-in-touch:hover {
      background-color: #000;
      color: #c6c5b9;
    }

    .brand-statement-sm {
      display: none;
    }



    @media only screen and (max-width: 810px) {
        .hero {
            flex-direction: column;
            overflow: hidden;
            padding: 20px 50px 50px 50px;
            /* justify-content: space-between; */
        }

        .content {
          padding: 0px 30px 30px;
        }

    
        .cta-buttons {
          flex-direction: column;
        }
        .project-showcase {
            width: 100%;
            margin-right: 0px !important;
            margin-bottom: 20px;
        }

        .brand-statement {
            font-size: 18px !important;
        }

        /* .h-div-lg {
            justify-content: flex-start;
        } */
        
    }

   

    .brand-statement {
        font-family: "Orelega One", sans-serif;
        color: #000000;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        z-index: 1;
        position: relative;
        font-weight: 400;
        font-style: normal;
        white-space: pre-wrap;

        font-size: 28px;
        line-height: 1.4;
        margin-top: 20px;
        color: #fff;
        text-shadow: 1px 1px #000;

    }

    

   
    .button {
        box-sizing: border-box;
        flex-shrink: 0;
        width: min-content; /* 174px */
        height: min-content; /* 44px */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 20px 10px 20px;
        background-color: #ffffff;
        overflow: hidden;
        position: relative;
        align-content: center;
        flex-wrap: nowrap;
        gap: 10;
        border-radius: 9999px;
        font-size: 18px;
        border: none;
        outline: none;
    }

   
    .project-showcase {
        width: auto; /* 190px */
        height: auto; /* 24px */
        white-space: pre;
        overflow: visible;
        position: relative;
        font-weight: 400;
        font-style: normal;
        font-family: "Martian Mono", monospace;
        background-color: #c6c5b9;
        color: #000000;
        margin-right: 20px;
        padding: 10px 20px 10px 20px;
        letter-spacing: 0em;
        line-height: 1.5;
        transition: background-color 0.3s, color 0.3s, transform 0.3s;
    }

  

    .get-in-touch {
        flex-shrink: 0;
        width: auto; /* 134px */
        height: auto; /* 24px */
        white-space: pre;
        overflow: visible;
        position: relative;
        font-weight: 400;
        font-style: normal;
        font-family: "Martian Mono", monospace;
        color: #000000;
        letter-spacing: 0em;
        line-height: 1.5;
        text-align: left;
        background-color: #ffffff;
        padding: 10px 20px 10px 20px;
        z-index: 1;
        transition: background-color 0.3s, color 0.3s, transform 0.3s;
    }

    .get-in-touch:hover, .project-showcase:hover {
        background-color: #000000;
        color: #ffffff;
        transform: scale(1.05);
    }


  
    .fade-in-text {
    animation: fadeInText 1s ease-in-out forwards;
}

    @keyframes fadeInText {
        to {
            /* text-shadow: 2px 2px #c6c5b9; */
            /* font-size: 24px; */
            opacity: 1;
            transform: translateY(0);
        }
    }



    .highlight {
        color: #c6c5b9; /* Your desired color */
        font-weight: bold;
    }

    

    

    

</style>
