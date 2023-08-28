<script setup>




</script>

<template>
    <section id="projects" class="projects">
    <div class="content">
      <h2 class="section-title animation">Ongoing Projects <span style="text-shadow: none;">📚</span></h2>
      <div class="project-grid animation">
        <!-- Project 1 -->
        <div class="project-item">
          <h3 class="item-title">Contact Flo</h3>
          <p class="item-description">
            Email Service API for contact forms built with Spring Boot. Simplifying communication for businesses.
          </p>
          <div class="chips">
            <div class="chip backend">Backend</div>
            <div class="chip monolith">Monolith</div>
            <div class="chip rest">REST</div>
          </div>
        </div>

        <!-- Project 2 -->
        <!-- <div class="project-item">
          <h3 class="item-title">Ord3rs</h3>
          <p class="item-description">
            Order, Inventory & Delivery Management APIs with Spring Boot Microservices. Streamlining operations.
          </p>
          <div class="chips">
            <div class="chip backend">Backend</div>
            <div class="chip microservices">Microservice</div>
          </div>
        </div> -->

        <!-- Project 3 -->
        <div class="project-item">
          <h3 class="item-title">Digilogue</h3>
          <p class="item-description">
            Full Stack MERN Tech Blog 
          </p>
          <div class="chips">
            <div class="chip backend">Backend</div>
            <div class="chip frontend">Frontend</div>
            <div class="chip db">NoSql DB</div>
          </div>
        </div>

        

        <!-- Project 3 -->
        <!-- <div class="project-item">
          <h3 class="item-title">SocialSphere</h3>
          <p class="item-description">
            Building Interactive Social Media Components
          </p>
          <p class="item-status">Status: In Progress</p>
        </div> -->

        <!-- Project 4 -->
        <!-- <div class="project-item">
          <h3 class="item-title">GitLearns</h3>
          <p class="item-description">
            Documentation after learning git commands
          </p>
          <p class="item-status">Status: In Progress</p>
        </div> -->

        <!-- Project 4 -->
        <div class="project-item">
          <h3 class="item-title">Automation Scaffolds</h3>
          <p class="item-description">
            Automating the building of different projects in Windows machine using Powershell scripts
          </p>
          <div class="chips">
            <div class="chip scripts">Scripting</div>
          </div>
        </div>

        <div class="project-item">
          <h3 class="item-title">RoadStar Ui</h3>
          <p class="item-description">
            Frontend Challenge for vehicle booking
          </p>
          <div class="chips">
            <div class="chip frontend">Frontend</div>
          </div>
        </div>

        <div class="project-item">
          <h3 class="item-title">Avatown</h3>
          <p class="item-description">
            E-Commerce UI with pagination, filtering
          </p>
          <div class="chips">
            <div class="chip frontend">Frontend</div>
          </div>
        </div>

        <div class="project-item">
          <h3 class="item-title">Personal Portfolio</h3>
          <p class="item-description">
            VueJS and CSS
          </p>
          <div class="chips">
            <div class="chip frontend">Frontend</div>
          </div>
        </div>

        <!-- Add more projects -->
      </div>
    </div>
  </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
   

.section-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 1px 1px magenta;
  }
  
  .projects {
  /* Adjust the background and color to match your theme */
        background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
        color: #fff;
        padding: 100px;
        text-align: center;
        font-weight: 400;
        font-style: normal;
        font-family: "Orelega One", sans-serif;
    }

    @media only screen and (max-width: 810px) { 
        .projects { 
            padding: 50px;
        }
    }

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

.project-item {
  background-color: #1a2937;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.project-item h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
  font-family: "Orelega One", sans-serif;
}

.project-item p {
  color: #c6c5b9;
}

.item-status {
  color: #6ca7b3;
  margin-top: 10px;
  font-style: italic;
}

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 5px;
  }

  .chip {
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    margin-right: 5px;
  }

  .frontend {
    background-color: #ffc107;
    color: #fff;
  }

  .backend {
    background-color: #007bff;
    color: #fff;
  }

  .microservices {
    background-color: #28a745;
    color: #fff;
  }

  .monolith {
    background-color: purple;
    color: #fff;
  }

  .rest {
    background-color: orangered;
    color: #fff;
  }

  .db {
    background-color: blue;
    color: #fff;
  }

  .scripts {
    background-color: yellowgreen;
    color: #fff;
  }
    
</style>
