<script setup>

const angles = ['0', '30', '60', '90', '-60', '-30']

const goToProject = () => {
    // alert("project")
    const el = document.getElementById('project');
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
        <div class="h-div" >
            <h1 class="afrin-haque bulge-onload">Afrin Haque, <b class="fade-in-text" >Software Engineer</b></h1>
            <p class="brand-statement">Exploring the Intersection of Web Development, Cybersecurity, and Emerging Technologies.</p>
            <div class="buttons">
                <button class="project-showcase button" v-on:click="goToProject">Explore My Work</button>
                <button class="get-in-touch button" v-on:click="goToContact">Connect With Me</button>
            </div>
        </div>
        
        <div style="width: 100%; height: 100%; display: flex; justify-content: center;">
            <div class="decoration-1" ></div>
            <div style="display: flex; width: 60%; justify-content: space-around;">
                <div class="images"> 
                    <div class="image"></div>
                    <div class="image-2">
                        
                    </div>
                </div>
                <div class="image-3">
                    In the dynamic landscape of software engineering, the fusion of front-end prowess and JavaScript expertise powers microservices architecture, shifting from monolithic structures towards cloud-native paradigms. The vigilance of OWASP WSTG and ISO 27001 certification ensures ironclad security. Agile methodologies, Jira, and Confluence streamline user stories, while DevOps, Docker, and CI/CD pipelines orchestrate seamless deployment. Python, R, and TensorFlow orchestrate AI and data science, harmonizing machine learning insights. As software engineering advances, responsive UIs, CSS artistry, and web designs captivate users, propelling innovation through a symphony of technologies.
                </div>
            </div>
            
            
        </div>

        <div class="decoration-2" style="display: flex; flex-direction: column; height: 100%; position: absolute; right: 0px; justify-content:flex-end; padding-bottom: 300px;">
            <hr v-for="index in 6" :key="index" class="frame" :style="{'transform': 'rotate(' + angles[index] + 'deg)'}" />
        </div>
        
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
        padding: 100px 100px 100px 100px;
        background-color: #62929e;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        top: 0px;
        align-content: center;
        flex-wrap: nowrap;
        border-radius: 0px 0px 0px 0px;
    }

    .h-div {
        display: flex;
        flex-direction: column;
        flex-basis: 55%;
        /* border: solid 3px red; */
        
    }

    .h-div-lg {
        /* border: solid 13px #000000; */
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 810px) {
        .hero {
            flex-direction: column;
            overflow: hidden;
            padding: 50px 50px 50px 50px;
            /* justify-content: space-between; */
        }

        .h-div {
            display: flex;
            flex-direction: column;
            flex-basis: 30%;
            margin-bottom: 100px;            
        }

        .buttons {
            flex-direction: column;
            text-align: center;
        }

        .buttons {
            width: 100%;
            flex-direction: column;
            justify-content: space-between;
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

    .afrin-haque, .sub-intro {
        width: 100%;
        height: auto; /* 70px */
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        z-index: 1;
        position: relative;
        font-weight: 400;
        font-style: normal;
        font-family: "Orelega One", sans-serif;
        color: #000000;
        font-size: 24px;
        letter-spacing: 0em;
        line-height: 1.1;
        text-align: left;
    }

    .brand-statement {
        font-family: "Orelega One", sans-serif;
        color: #000000;
        font-size: 44px;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        z-index: 1;
        position: relative;
        font-weight: 400;
        font-style: normal;
        color:#fff;
        white-space: pre-wrap;
        text-shadow: 1px 1px black;

    }

    .buttons {
        display: flex;
        justify-content: flex-start;
        z-index: 1000;
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

    /* .decoration-2 {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    } */

    

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


    .decoration-1 {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 578px;
        height: 406px;
        display: block;
        overflow: hidden;
        transform: rotate(-50deg);
        z-index: 0;
        position: absolute;
        border-radius: 100%;
        border: 1px solid #000000;

    }



    

    .decoration-2 {
        flex-shrink: 0;
        width: 296px;
        min-height: 296px;
        height: 100%;
        display: block;
        overflow: hidden;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    /* Define the continuous rotation animation */
    @keyframes rotate360 {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }

    /* .decoration-2:hover {
        animation: rotate360 10s linear infinite; 
        animation-play-state: paused;
        transform-origin: 50% 67%;
    } */

    .frame {
        width: 296px;
        height: 0em;
        display: block;
        /* background-color: #000000; */
        overflow: hidden;
        position: absolute;
        color: #000000;
        border: solid 0.01em black;
        z-index: 2;
        aspect-ratio: 0.9966329966329966 / 1;
        /* border-radius: 0px 0px 0px 0px; */
        
    }

    .images {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        left: 0%;
    }

    .image {
        flex-shrink: 0;
        height: 200px;
        display: block;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        mix-blend-mode: luminosity;
        overflow: hidden;
        z-index: 10;
        position: relative;
        justify-self: start;
        align-self: start;
        aspect-ratio: 1 / 1;
        background-image: url(../assets/image-1.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 0px 200px 0px 0px;
        margin-bottom: 40px;
    }

    .image-2 {
        flex-shrink: 0;
        height: 200px;
        display: block;
        background-color: #c6c5b9;
        overflow: hidden;
        z-index: 1;
        position: relative;
        justify-self: start;
        align-self: start;
        aspect-ratio: 1 / 1;
        border-radius: 200px 200px 0px 200px;
    }

    .image-3 {
        height: 440px;
        width: 215px;
        min-width: 200px;
        /* border: solid 5px red; */
        -webkit-filter: grayscale(1);
        mix-blend-mode: luminosity;        
        overflow: hidden;
        z-index: 10;
        background-image: url(./../assets/keyboard.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 0px 0px 0px 0px;
        position: relative;
        right: 0%;

        
        color: #ffffff;
        font-family: "Martian Mono", monospace;
        font-weight: 400;
        font-style: normal;
    }

    .image-4 {
        height: 440px;
        width: 215px;
        min-width: 200px;
        /* border: solid 5px red; */
        -webkit-filter: grayscale(1);
        mix-blend-mode: luminosity;    
        z-index: 11;
        /* background-image: url(./../assets/keyboard.jpg); */
        background: #c6c5b9;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 0px 0px 0px 0px;
        position: relative;
        left: -180px;
        top: 20px;
        opacity: 0.8;

        /* padding: 10px 20px;
        color: #ffffff;
        font-family: "Martian Mono", monospace;
        font-weight: 400;
        font-style: normal;
        overflow: auto; */
    }

    .image-3 > p {
        position: relative;
        width: 215px;
        min-width: 200px;
        z-index: 20;
        padding: 2px;
    }

    @media only screen and (max-width: 810px) {
        .images {
            margin-right: 10px;
        }

        .image-3 {
            margin-left: 10px;
        }
    }

    

    /* .images .image, .image-2 {
        animation: float 2s ease-in-out infinite;
    }

    .image-3 {
        animation: floatreverse 2s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @keyframes floatreverse {
        0%, 100% {
            transform: translateY(-10px);
        }
        50% {
            transform: translateY(0px);
        }
    } */

    /* @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    #hero {
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;
    } */

    /* .decoration-2 {
        animation: parallax 5s alternate infinite;
    }

    @keyframes parallax {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-20px);
        }
    } */

    .fade-in-text {
    animation: fadeInText 1s ease-in-out forwards;
}

    @keyframes fadeInText {
        to {
            text-shadow: 2px 2px #c6c5b9;
            font-size: 24px;
        }
    }

    .bulge-onload {
        animation: bulgeName 1s ease-out;
        transform-origin: center;
    }

    @keyframes bulgeName {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .highlight {
        color: #c6c5b9; /* Your desired color */
        font-weight: bold;
    }

    

    

    

</style>
