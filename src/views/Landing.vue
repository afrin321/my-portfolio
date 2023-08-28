<script setup>
import Home from "./NewHome.vue"
import Emerging from "./EmergingTech.vue"
import Skills from "./Skills.vue"
import Projects from "./Projects.vue"
import Contact from "./Contact.vue"
import FooterSec from "./Footer.vue"
import Header from "../components/Header.vue"
import Webdevelopment from "./Webdevelopment.vue"
import Cybersecurity from "./Cybersecurity.vue"

</script>

<template>
    <div class="container">
        <!-- <Header /> -->
        <main>
            <Home/>
            <Webdevelopment/>
            <Cybersecurity />
            <Projects />
            <Emerging />
            <Contact />
            <FooterSec />
        </main>
        
    </div>
    
  
</template>

<style scoped>
    .container {
        margin: 0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    main {
        position: relative;
        top: 0px;
    }
</style>
