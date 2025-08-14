<template>
    <div class="text-white min-vh-100 py-5">
        <div class="container py-5">
            <h2 class="text-center mb-4 fw-bold">Project Portfolio</h2>
            <p class="text-center mb-5">
                The following are several projects that I have created or am currently creating using the Vue 3, Golang,
                and
                PostgreSQL stack.
            </p>

            <section>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                        <div class="card h-100 shadow-sm border-0">
                            <img :src="project.image" class="card-img-top object-fit-cover" style="height: 300px" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title fw-semibold">{{ project.name }}</h5>
                                <p class="card-text flex-grow-1">{{ project.description }}</p>
                                <div>
                                    <a v-if="project.demo" :href="project.demo" class="btn btn-primary btn-sm me-2 mb-2"
                                        target="_blank">
                                        Live Demo
                                    </a>
                                    <a v-if="project.github" :href="project.github"
                                        class="btn btn-outline-primary btn-sm mb-2" target="_blank">
                                        GitHub
                                    </a>
                                    <span v-if="!project.demo && !project.github" class="small fst-italic">
                                        No links available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = [
    {
        id: 1,
        name: 'Not Found Merch',
        description: 'Online store website for a brand.',
        image: '/assets/notfoundmerch.jpg',
        demo: 'https://demo-inventory.vercel.app',
        github: 'https://github.com/bredcool/inventory-app',
    },
    {
        id: 2,
        name: 'Karang Taruna RW.02',
        description: 'Company Profile: Suitable for local businesses, other freelancers, clinics, workshops, schools, etc.',
        image: '/assets/karang_taruna_rw02.jpg',
        demo: 'https://company-profile.bredmeepo.dev',
        github: 'https://github.com/bredcool/company-profile-app',
    },
    {
        id: 3,
        name: 'Cireng RR',
        description: 'Landing Page: Focus on one product or service. This can be for sales or promotional events.',
        image: '/assets/cireng_rr.jpg',
        demo: 'https://landing-page.bredmeepo.dev',
        github: 'https://github.com/bredcool/landing-page-app',
    },
    {
        id: 4,
        name: 'Dashboard Admin / CMS Custom',
        description: 'For internal company, such as managing data, transactions, users, etc.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://dashboard-admin.bredmeepo.dev',
        github: 'https://github.com/bredcool/dashboard-admin-app',
    },
    {
        id: 5,
        name: 'Mini AI',
        description: 'Mini AI assistant that resembles Chat GPT',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://demo-mini-ai.bredmeepo.dev',
        github: 'https://github.com/bredcool/ai-app',
    },
    {
        id: 6,
        name: 'Weather App',
        description: 'Realtime weather app that displays temperature and weather predictions.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://demo-weather.vercel.app',
        github: 'https://github.com/bredcool/weather-app',
    },
]
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
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
</style>
