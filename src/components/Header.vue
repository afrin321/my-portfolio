<script setup>

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
    <header id="header">
        <div >
            <span><a href="https://www.instagram.com/cyberdev_in/" target="_blank">@Insta</a></span>
            <span><a href="https://twitter.com/afrinhaque193" target="_blank">@X</a></span>
            <span><a href="https://medium.com/@afrinhaque19" target="_blank">@Medium</a></span>
            <span><a href="https://github.com/afrin321" target="_blank">@GitHub</a></span>
            <span><a href="https://www.linkedin.com/in/afrin-haque-dev/" target="_blank">@LinkedIn</a></span>
        </div>
        <div >
            <span v-on:click="() => goToProject()">Project Showcase</span>
            <span v-on:click="() => goToContact()">Contact</span>
        </div>
    </header>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
   
    header {
        position: fixed;
        top: 0px;
        margin: 0px;
        padding: 5px 55px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        color: #393d3f;
        font-family: "Martian Mono", monospace;
        z-index: 2000;
        background-color: #a1cbd7;
        opacity: 0.7;
    }

    span {
        margin-right: 60px;
        cursor: pointer;
        text-decoration: none;
        color: #393d3f;
    }

    a {
        text-decoration: none;
        color: #393d3f;
    }

    header > div:last-of-type {
        display: flex; 
        justify-content: flex-end; 
        margin-left: 120px;
    }

    

    @media only screen and (max-width: 810px) {
        header {
            display: flex;
            position: fixed;
            top: 0px;
            height: min-content;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px;

        }

        header > div:first {
            display: flex;
            justify-content: flex-start;
            width: 100%;
        }

        header > div:last-of-type {
            display: none;
            /* justify-content:flex-start;
            width: 100%;
            margin: auto; */
        }

        span {
            margin-right: auto;
            padding: 10px 10px !important;
            cursor: pointer;
            text-decoration: none;
            color: #393d3f;
         }
    }


    
    

    

    

</style>
