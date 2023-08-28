<script setup>
import { ref } from "vue"


const skillType = ref("")

const goToContact = () => {
    // alert("project")
    const el = document.getElementById('contact');
    el.scrollIntoView({behavior: "smooth"});
}


</script>

<template>
    <section id="skill" class="skill f-a-q">
        <h2 class="key-skills-expertise">Key Skills & Expertise</h2>
        <div class="stack">
            <div class="image"></div>
            <div class="divider"></div>
            <div class="questions-row" v-if="skillType == ``">
                <div>
                    <h2 class="subtitle"  v-on:click="() => {skillType = 'front'}">Software Development (Front-End)</h2>
                    <h2 class="subtext"  v-on:click="() => {skillType = 'front'}">Unleashing creativity to craft out-of-this-world experiences.</h2>
                </div>
                <div>
                    <h2 class="subtitle"  v-on:click="() => {skillType = 'back'}">Software Development (Back-End)</h2>
                    <h2 class="subtext"  v-on:click="() => {skillType = 'back'}">Block by Block, constructing robust systems from the ground up.</h2>
                </div>
                <div>
                    <h2 class="subtitle"  v-on:click="() => {skillType = 'cyber'}">Cybersecurity Enthusiast</h2>
                    <h2 class="subtext"  v-on:click="() => {skillType = 'cyber'}">Ever-vigilant, mastering cyber's edge through constant learning.</h2>
                </div>
            </div>
            <div class="questions-row" v-if="skillType == `front`">
                <div>
                    <h2 class="subtitle"  v-on:click="() => {skillType = ''}">Software Development (Front-End)</h2>
                   
                    <div class="skill-info" title="⭐⭐⭐ Confident in solving ANY front-end problem!"> 
                        <!-- <p>⭐⭐⭐⭐⭐</p> -->
                        <span><b>HTML/CSS </b></span>
                        <span>Flex/Grid</span>
                        <span>Responsive + Mobile Friendly</span>
                        <span>Animations & more</span>
                        <span><b>CSS Libraries/Preprocessors</b></span>
                        <span>Bootstrap, Tailwind CSS, MUI</span>
                        <span><b>Vanilla JavaScript Expert</b></span>
                        <span>DOM Manipulation/Interactiveness</span>
                        <span><b>JS Frameworks</b></span>
                        <span>React, Vue</span>
                        <span>Routing</span>
                        <span>Redux, Pinia</span>
                        <span><b>Component Libraries</b></span>
                        <span>BootstrapUI, MaterialUI, Vuetify</span>
                        <span><b>JS Libraries</b></span>
                        <span>JQuery, JQueryUI</span>
                        <span>PaperJs,ChartJs, P5Js</span>
                    </div>
                </div>
            </div>
            <div class="questions-row" v-if="skillType == `cyber`">
                <div>
                    <h2 class="subtitle" :class="skillType == 'cyber' ? 'center' : ''"  v-on:click="() => {skillType = ''}">Cybersecurity Enthusiast</h2>
                   
                    <div class="skill-info" title="Good Foundations Are Crucial For Any Field 🏗️"> 
                        <!-- <p>⭐⭐⭐⭐⭐</p> -->
                        <span><b>CISSP Prep.</b></span>
                        <span><i>Syllabus Completed. Now Reviewing.</i></span>
                        <hr/>
                        <span><b>RHEL 6,7,8/Linux Sys. Admin</b></span>
                        <span>Disk Partioning, Runlevels, User Management </span>
                        <span>Compression Tools, Network Configuration</span>
                        <span>File System repair, Cron Scheduling</span>
                        <hr/>
                        <span><b>Python + Bash Scripting</b></span>
                        <span><i>Ethical Hacking & Incident Response</i></span>
                        <span><b>Exploring Frameworks, Standards, Guidelines</b></span>
                        <span>ISO 27001, PCI DSS, CIS's Top 20</span>
                        <span>OWASP Top 10 Web Application Vulnerabilities</span>
                        <span>Python ML/Data Science</span>
                        <span v-on:click="goToContact" class="contact-link" ><b style="text-decoration: underline;">Contact</b> For Projects, Policy Writing/Auditing</span>
                        <hr/>
                        <span><b>~ Exploring DevOps & Cloud Computing ~</b></span>
                    </div>
                </div>
            </div>
            <div class="questions-row" v-if="skillType == `back`">
                <div>
                    <h2 class="subtitle"  v-on:click="() => {skillType = ''}">Software Development (Back-End)</h2>
                   
                    <div class="skill-info" title="Humble & ever-willling to learn ❤️"> 
                        <!-- <p>⭐⭐⭐⭐⭐</p> -->
                        <span><b>Programming Languages & Frameworks</b></span>
                        <span>Java</span>
                        <span><i>Spring Framework</i></span>
                        <span>JavaScript</span>
                        <span><i>Node/Express</i></span>
                        <span>PHP</span>
                        <span><i>Laravel</i></span>
                        <span><b>REST API Building + Testing</b></span>
                        <span>Monolithic expert</span>
                        <span>Postman</span>
                        <span>Version control: <i>Git, SVN</i></span>
                        <span><b>DB</b></span>
                        <i>Designs and writes complex queries</i>
                        <span>MySQL, MongoDB</span>
                        <hr/>
                        <span><b>~ Learning About ~</b></span>
                        <span>Microservices, Scalabilty, Deployment</span>
                    </div>
                </div>
            </div>
        </div>
    </section>  
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
   
    .f-a-q {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 100%;
        height: auto; /* 798px */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 100px 100px 100px 100px;
        background-color: #fdfdff;
        overflow: hidden;
        position: relative;
        align-content: center;
        flex-wrap: nowrap;
        border-radius: 0px 0px 0px 0px;
    }

    .key-skills-expertise {
        flex-shrink: 0;
        width: 100%;
        height: auto; /* 58px */
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        /* max-width: 1000px; */
        overflow: visible;
        position: relative;
        font-weight: 400;
        font-style: normal;
        font-family: "Orelega One", sans-serif;
        color: #000000;
        font-size: 48px;
        letter-spacing: 0em;
        line-height: 1.2;
        text-align: left;
    }

    .stack {
        flex-shrink: 0;
        width: 100%;
        height: min-content; /* 481px */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        overflow: hidden;
        position: relative;
        padding: 0px 0px 0px 0px;
        margin: 0px;
        align-content: center;
        flex-wrap: nowrap;
        border-radius: 0px 0px 0px 0px;
    }

    .image {
        flex-shrink: 0;
        /* flex: 1 0 0px; */
        width: 100%;
        height: 400px; 
        /* height: 200px */
        /* display: block; */
        display: flex;
        flex-basis: 50%;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        mix-blend-mode: luminosity;
        overflow: hidden;
        position: relative;
        /* aspect-ratio: 0.9779951100244498 / 1; */
        background-image: url(../assets/desktop.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 200px 200px 40px 40px;
        margin-right: 80px;
    }

    .questions-row {
        flex-shrink: 0;
        flex-basis: 50%;
        width: 100%;
        height: min-content; /* 384px */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        padding: 0px 0px 0px 0px;
        align-content: flex-start;
        flex-wrap: nowrap;
        /* margin-left: 50px;         */
    }

    .divider {
        flex-basis: 10%;
    }

    .subtitle {
        flex-shrink: 0;
        width: 100%;
        height: auto; /* 30px */
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        overflow: visible;
        position: relative;
        font-weight: 400;
        font-style: normal;
        font-family: "Martian Mono", monospace;
        color: #000000;
        font-size: 20px;
        letter-spacing: -0.025em;
        line-height: 1.5;
        text-align: left;
    }

    .subtitle:hover, .subtitle:active {
        text-decoration: underline;
        text-decoration-color: #62929e;
        cursor: pointer;
    }

    .subtext {
        flex-shrink: 0;
        width: 100%;
        height: auto; /* 48px */
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        max-width: 350px;
        overflow: visible;
        position: relative;
        font-weight: 400;
        font-style: normal;
        font-family: "Martian Mono", monospace;
        color: #000000;
        font-size: 16px;
        letter-spacing: 0em;
        line-height: 1.5;
        text-align: left;
        padding-right: 30px;
        padding-top: 2px;
        padding-bottom: 2px;
    }

    .subtext:hover, .subtext:active {
        background-color: lavenderblush;
        /* padding-left: 10px; */
        border-radius: 0px 40px 40px 0px;
        cursor: crosshair;
    }

    .skill-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-weight: 400;
        font-style: normal;
        font-family: "Martian Mono", monospace;
        color: #000000;
        font-size: 16px;
        align-items: center;
    }

    .contact-link:hover, .contact-link:active {
        background-color: lavenderblush;
    }

    

    @media only screen and (max-width: 810px) {

        .f-a-q {
            padding: 40px 20px;
        }
        .stack {
            flex-direction: column;
            
        }

        .image {
            min-height: 200px !important;
            min-width: auto;
            margin-right: 0px;
        }

        .questions-row {
            margin-top: 20px;
            align-items: center;
            text-align: center;
        }

        .center {align-items: center;
            text-align: center;}

        /* .subtitle {
            text-align: center;
        } */

        /* .skill-info {
            align-items: flex-start;
         } */
    }

</style>
