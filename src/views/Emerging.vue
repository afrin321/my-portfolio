<script setup>
import { ref } from 'vue';

const topics = ref([
  {
    title: 'DevOps',
    description: 'Explore the synergy between development and operations, emphasizing automation, collaboration, and efficiency.',
    techChips: ['CI/CD', 'Infrastructure as Code', 'Containerization'],
    qoutes: [""],
    icon: '<i class="fas fa-cogs"></i>'
  },
  {
    title: 'Cloud Computing',
    description: 'Discover the benefits of cloud platforms for scalability, reliability, and cost-efficiency in modern applications.',
    techChips: ['AWS', 'Azure', 'Google Cloud'],
    icon: '<i class="fas fa-cloud"></i>'
  },
  {
    title: 'Security in Complex Architectures',
    description: 'Learn how to address security challenges in large and intricate system architectures.',
    techChips: ['Network Security', 'Identity and Access Management', 'Zero Trust'],
    icon: '<i class="fas fa-shield-alt"></i>'
  },
  {
    title: 'Blockchain',
    description: 'Explore the decentralized and tamper-resistant ledger technology with applications in finance, supply chain, and more.',
    techChips: ['Smart Contracts', 'Cryptocurrency', 'Decentralized Applications'],
    qoutes: ["Money is no longer a dumb entity, it is now Programmable!"],
    icon: '<i class="fas fa-link"></i>'
  },
  {
    title: 'AI and Machine Learning',
    description: 'Discover the power of AI and ML in data analysis, prediction, and automation.',
    techChips: ['Natural Language Processing', 'Computer Vision', 'Reinforcement Learning'],
    icon: '<i class="fas fa-brain"></i>'
  },
  {
    title: 'AIOps',
    description: 'Explore the integration of AI and automation in IT operations to enhance monitoring, analysis, and incident response.',
    techChips: ['Anomaly Detection', 'Predictive Analytics', 'Automated Remediation'],
    icon: '<i class="fas fa-robot"></i>'
  },
  {
    title: 'Cloud Native',
    description: 'Understand the principles of building and deploying applications that fully leverage cloud environments.',
    techChips: ['Microservices', 'Containers', 'Kubernetes'],
    icon: '<i class="fas fa-cloud-upload-alt"></i>'
  },
  // Add more topics here
]);


const selectedTopic = ref(null);

const showDetails = (index) => {
  selectedTopic.value = index;
};



</script>

<template>
  <section id="emerging-tech" class="emerging-tech">
    <div class="content">
      <h2 class="section-title">Emerging Technologies </h2>
      <br/>
      <p class="intro-text animation">
        Here are the emerging tech fields I take interest in and I am constantly exploring.
      </p>
      <div class="tech-grid">
        <div class="tech-item" v-for="(topic, index) in topics" :key="index" @click="showDetails(index)">
          <div class="tech-circle"  v-html="topic.icon"></div>
        </div>
      </div>
      <div class="details" v-if="selectedTopic !== null">
        <h3>{{ topics[selectedTopic].title }}</h3>
        <p class="qoute" v-for="(qoute, qouteIndex) in topics[selectedTopic].qoutes" :key="qouteIndex">"{{ qoute }}"</p>
        <p>{{ topics[selectedTopic].description }}</p>
        <div class="tech-chips">
          <div class="tech-chip" v-for="(chip, chipIndex) in topics[selectedTopic].techChips" :key="chipIndex">{{ chip }}</div>
        </div>
      </div>
      <div v-else>
        <!-- <p>It is fascinating to see how much tech advancement has changed in the last one decade.</p> -->
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

  .emerging-tech {
  /* Adjust the background and color to match your theme */
        background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
        color: #fff;
        padding: 100px;
        text-align: center;
        font-weight: 400;
        font-style: normal;
        font-family: "Orelega One", sans-serif;
    }

    .tech-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 20px;
    /* Your styling for the tech grid */
  }

  .qoute {
    font-family: "Martian Mono", monospace;
    font-size: medium;
    font-style: italic;
  }

  .tech-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    cursor: pointer;
    
    /* Your styling for each tech item */
  }

  .tech-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #1a2937; /* Customize the circle color */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Your styling for the tech circle */
  }

  .details {
    /* Your styling for the details container */
  }

  .intro-text {
  font-family: "Martian Mono", monospace;
  color: #c6c5b9;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.intro-text.animation {
  animation: fadeInText 1.5s ease-in-out forwards;
  opacity: 1;
}




    
</style>
