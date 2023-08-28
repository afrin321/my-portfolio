<script setup>




</script>

<template>
    <section class="project-display">
        <h2 class="title">My Projects</h2>
        <h3 class="project-name">RoadStars</h3>

        <!-- <img class="image" src="../../assets/project2.PNG" /> -->

        <div class="info">
            <span class="link">Project Link</span>
            <span class="skill">Frontend Design, DOM Manipulation</span>
        </div>

        <p class="tools">Tech Used: HTML, CSS, JavaScript, JQuery</p>
        <p class="info description">UI designed for vehicle booking system. Calender dates can be dragged and dropped into the grid based on selected date.</p>
    </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
   
    .project-display {
        width: 100%;
        height: auto;
        align-items: flex-start;
        background-color: #393d3f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 100px;
    }

    .title {
        font-weight: 400;
        font-style: normal;
        font-family: "Orelega One", sans-serif;
        color: #c6c5b9;
        font-size: 48px;
        letter-spacing: 0em;
        line-height: 1.2;
    }

    .project-name, .link, .skill, .tools, .description {
        font-weight: 400;
        font-style: normal;
        font-family: "Martian Mono", monospace;
        color: #ffffff;
        font-size: 20px;
        letter-spacing: 0em;
        line-height: 1.5;
        text-align: left;
    }

    .image {
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        width: 850px;
    }

    .tools {
        width: 850px;
        text-align: right;
    }
   
   
   



   
</style>
