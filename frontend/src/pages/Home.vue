<template>
    <div class="text-white min-vh-100 py-5">
        <section class="text-center py-5 text-light hero-gradient">
            <div class="container">
                <h1 class="display-4 fw-bold mb-4">
                    Hi, I'm <span class="text-warning">Bred</span> 👋
                </h1>

                <p class="lead mb-4">
                    A <strong>Fullstack Developer</strong> who builds clean, efficient, and scalable web applications
                </p>

                <p class="fs-5 text-white-50 fst-italic mb-4">
                    "Learning From The Past, Looking To The Future"
                </p>

                <router-link to="/projects" class="btn btn-lg btn-light text-dark px-4 py-2 shadow-sm">
                    🚀 View My Work
                </router-link>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="py-5">
            <h2 class="text-center mb-3">Tech Stack & Skills</h2>

            <!-- Frontend -->
            <h4 class="text-center mb-3">Frontend</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in frontendSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Backend -->
            <h4 class="text-center mb-3">Backend</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in backendSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Database -->
            <h4 class="text-center mb-3">Database</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in databaseSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tools -->
            <h4 class="text-center mb-3">Tools</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in toolsSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other -->
            <h4 class="text-center mb-3">Other</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in otherSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Soft -->
            <h4 class="text-center mb-3">Soft</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in softSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Teaser -->
        <section class="py-5 bg-dark text-light rounded mt-4">
            <div class="text-center">
                <h2>Featured Projects</h2>
                <p>A sneak peek of what I've built</p>
                <router-link to="/projects" class="btn btn-outline-light mt-3">See All Projects</router-link>
            </div>
        </section>

        <!-- Contact CTA -->
        <section class="text-center py-5">
            <h3>Have a project or collaboration idea?</h3>
            <router-link to="/contact" class="btn btn-success mt-2">Contact Me</router-link>
        </section>
    </div>
</template>

<script setup>
const frontendSkills = [
    { name: 'Vue JS', icon: 'fab fa-vuejs' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
]

const backendSkills = [
    { name: 'Golang (Fiber)', icon: 'fab fa-golang' },
    { name: 'JavaScript (Node JS)', icon: 'fab fa-js' },
    { name: 'C#', icon: 'fa-solid fa-code' },
]

const databaseSkills = [
    { name: 'PostgreSQL', icon: 'fa fa-database' },
    { name: 'Microsoft SQL', icon: 'fa fa-database' },
]

const toolsSkills = [
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
]

const otherSkills = [
    { name: 'Internet of Things', icon: 'fa-solid fa-network-wired' },
    { name: 'Arduino', icon: 'fa-solid fa-microchip' },
]

const softSkills = [
    { name: 'Communication Skills', icon: 'fa-solid fa-people-arrows' },
    { name: 'Fast and Eager Learner', icon: 'fa-solid fa-chalkboard-user' },
    { name: 'Teamwork', icon: 'fa-solid fa-people-group' },
    { name: 'Highly Motivated and Dedicated', icon: 'fa-regular fa-face-smile' },
]
</script>

<style scoped>
.card {
    background-color: #1e1e1e;
    color: #e0e0e0;
    border: none;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.glowing-border {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
}

.hero-gradient {
    background: linear-gradient(135deg, #00427c, #000428, #007c42);
    background-size: 300% 300%;
    animation: gradientBG 12s ease infinite;
    color: #fff;
}

section {
    animation: fadeInDown 1s ease-in-out;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
