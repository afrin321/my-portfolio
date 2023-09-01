<script setup>
import { ref } from 'vue';

const emergingTech = ref([
  {
    title: 'DevOps',
    description: 'Explore the synergy between development and operations, emphasizing automation, collaboration, and efficiency.',
    techChips: ['CI/CD', 'Infrastructure as Code', 'Containerization'],
    icon: '<i class="fas fa-cogs"></i>',
    articleLinks: ['Link to DevOps article 1', 'Link to DevOps article 2'],
    hashtags: '🚀 #AgileOps #AutomateAllTheThings',
  },
  {
    title: 'Cloud Computing',
    description: 'Discover the benefits of cloud platforms for scalability, reliability, and cost-efficiency in modern applications.',
    techChips: ['AWS', 'Azure', 'Google Cloud'],
    icon: '<i class="fas fa-cloud"></i>',
    articleLinks: ['Link to Cloud Computing article 1', 'Link to Cloud Computing article 2'],
    hashtags: '☁️ #CloudScaling #CostEfficiency #CloudNative',
  },
  {
    title: 'Blockchain',
    description: 'Explore the decentralized and secure nature of blockchain technology and its potential applications.',
    techChips: ['Decentralization', 'Smart Contracts', 'Cryptocurrencies'],
    icon: '<i class="fas fa-link"></i>',
    articleLinks: ['Link to Blockchain article 1', 'Link to Blockchain article 2'],
    hashtags: '🔗 #DecentralizedRevolution #SecureTransactions #ProgrammableMoney',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Delve into the world of AI and ML, understanding how machines can learn from data and make intelligent decisions.',
    techChips: ['NeuralNetworks', 'DataAnalytics', 'Predictive Modeling'],
    icon: '<i class="fas fa-brain"></i>',
    articleLinks: ['Link to AI & ML article 1', 'Link to AI & ML article 2'],
    hashtags: '🧠 #AIInnovation #IntelligentDecisions #MattersOfContext',
  },
  {
    title: 'AIOps',
    description: 'Discover the fusion of AI and IT operations, leveraging automation for efficient incident response and problem-solving.',
    techChips: ['AnomalyDetection', 'Automated Remediation', 'Predictive Analysis'],
    icon: '<i class="fas fa-robot"></i>',
    articleLinks: ['Link to AIOps article 1', 'Link to AIOps article 2'],
    hashtags: '🤖 #EfficientOps #AIinIT #MonitorWithAI',
  },
  // Add more technologies here...
]);







</script>


<template>
    <section id="emerging-technologies" class="emerging-technologies">
      <div class="content">
        <h2 class="section-title animation">Emerging Technologies</h2>
        <p class="section-description animation">
          Here are the emerging tech fields I take interest in and I am constantly exploring:
        </p>
  
        <div class="tech-grid">
          <div v-for="tech in emergingTech" :key="tech.title" class="tech-item">
            <div class="tech-icon" v-html="tech.icon"></div>
            <h3 class="tech-title">{{ tech.title }}</h3>
            <p class="tech-description">{{ tech.description }}</p>
            <div class="tech-chips">
              <span v-for="chip in tech.techChips" :key="chip" class="tech-chip">{{ chip }}</span>
            </div>
            <div class="article-links" title="coming soon!">
              <p  title="coming soon!">Explore more:</p>
              <ul>
                <li v-for="link in tech.articleLinks" :key="link"><a :href="link">{{ link }}</a></li>
              </ul>
            </div>
            <div class="tech-hashtags">
              <span v-for="hashtag in tech.hashtags" :key="hashtag" class="tech-hashtag">{{ hashtag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

<style scoped>
/* ... Other styles ... */
.tech-hashtags {
  margin-top: 10px;
  font-size: 14px;
  color: magenta;
  text-align: right;
  font-family: "Martian Mono", monospace;
}

/* .tech-hashtags p {
  display: flex;
  background-color: #1a2937;
  padding: 5px 10px;
  border-radius: 5px;
} */
.emerging-technologies {
  background: linear-gradient(to right bottom, #0d1b2a, #1a2937);
  color: #fff;
  padding: 50px;
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

.section-description {
  margin-top: 10px;
  font-family: "Martian Mono", monospace;
  color: #c6c5b9;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
}

.tech-item {
  background-color: #1a2937;
  padding: 20px;
  border-radius: 10px;
}

.tech-icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.tech-title {
  font-size: 24px;
  color: #fff;
}

.tech-description {
  color: #c6c5b9;
}

.tech-chips {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.tech-chip {
  background-color: #c6c5b9;
  color: #1a2937;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 12px;
}

.article-links {
  margin-top: 10px;
  color: #c6c5b9;
}

.article-links ul {
  list-style: none;
  padding: 0;
}

.article-links a {
  color: #c6c5b9;
  text-decoration: none;
}

.tech-quotation {
  margin-top: 10px;
  color: #fff;
  font-style: italic;
  font-size: 14px;
  text-align: right;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
}

/* ... Other styles ... */
</style>