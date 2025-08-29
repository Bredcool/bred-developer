<template>
    <div class="text-white min-vh-100 py-5">
        <div class="container py-5">
            <h1 class="mb-4 fw-bold text-center">💰 Price List</h1>

            <!-- Pilihan Project -->
            <div class="mb-3">
                <label class="form-label">Select Project</label>
                <select v-model="selectedProject" class="form-select">
                    <option disabled value="">-- Select Project --</option>
                    <option v-for="(packages, project) in dataList" :key="project" :value="project">
                        {{ project }}
                    </option>
                </select>
            </div>

            <!-- Pilihan Paket -->
            <div class="mb-3" v-if="selectedProject">
                <label class="form-label">Select Package</label>
                <select v-model="selectedPackage" class="form-select">
                    <option disabled value="">-- Select Package --</option>
                    <option v-for="(data, pkg) in dataList[selectedProject]" :key="pkg" :value="pkg">
                        {{ pkg }}
                    </option>
                </select>
            </div>

            <!-- Opsi Hosting -->
            <div class="mb-3" v-if="selectedPackage">
                <label class="form-label">Select Hosting</label>
                <select v-model="selectedHosting" class="form-select">
                    <option value="">No Hosting Required</option>
                    <option value="vps">VPS</option>
                </select>
            </div>

            <!-- Opsi Maintenance -->
            <div class="mb-3" v-if="selectedPackage">
                <label class="form-label">Select Maintenance</label>
                <select v-model="selectedMaintenance" class="form-select">
                    <option value="0">No need</option>
                    <option :value="maintenancePrices.perbulan">Each Month - {{ formatRupiah(maintenancePrices.perbulan)
                    }}
                    </option>
                    <option :value="maintenancePrices.minor">Every Minor Revision - {{ formatRupiah(maintenancePrices.minor)
                    }}
                    </option>
                    <option :value="maintenancePrices.major">Every Major Revision - {{ formatRupiah(maintenancePrices.major)
                    }}
                    </option>
                </select>
            </div>

            <!-- Hasil Pilihan -->
            <div v-if="selectedPackage" class="mt-4">
                <h3 class="text-center fw-bold">
                    {{ selectedProject }} - {{ selectedPackage }}
                </h3>

                <div class="row mt-3">
                    <!-- Card Fitur -->
                    <div class="col-md-6 mb-3">
                        <div class="card h-100 shadow-sm">
                            <div class="card-header bg-primary text-white fw-bold">📋 Feature</div>
                            <ul class="list-group list-group-flush">
                                <li v-for="feature in dataList[selectedProject][selectedPackage].features"
                                    :key="feature" class="list-group-item">
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Card Biaya -->
                    <div class="col-md-6 mb-3">
                        <div class="card h-100 shadow-sm">
                            <div class="card-header bg-success text-white fw-bold">💵 Cost breakdown</div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Package: {{ formatRupiah(basePrice) }}</li>
                                <li v-if="hostingPrice > 0" class="list-group-item">Hosting: {{
                                    formatRupiah(hostingPrice)
                                }} / tahun</li>
                                <li v-if="Number(selectedMaintenance) > 0" class="list-group-item">Maintenance: {{
                                    formatRupiah(selectedMaintenance) }}</li>
                                <li class="list-group-item fw-bold">Total: {{ formatRupiah(totalPrice) }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn btn-success w-100 btn-lg mt-2">Order now</button>

                <h5 class="text-center fw-bold mt-9">
                    Note: Prices may change according to needs
                </h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedProject = ref("");
const selectedPackage = ref("");
const selectedHosting = ref("");
const selectedMaintenance = ref("0");

const maintenancePrices = {
    perbulan: 200000,
    minor: 150000,
    major: 300000
};

// Data price list dengan hosting price per paket
const dataList = {
    "Portofolio": {
        "Basic": {
            features: ["Desain responsif", "Halaman profil & kontak", "Optimasi ringan"],
            price: 500000,
            hosting: 500000
        },
        "Standard": {
            features: ["Semua fitur Basic", "Animasi interaktif", "Custom section tambahan"],
            price: 1000000,
            hosting: 750000
        },
        "Premium": {
            features: ["Semua fitur Standard", "Desain eksklusif", "Optimasi SEO"],
            price: 1500000,
            hosting: 1000000
        }
    },
    "Landing Page": {
        "Basic": {
            features: ["Desain responsif", "1 Halaman", "Optimasi ringan"],
            price: 400000,
            hosting: 250000
        },
        "Standard": {
            features: ["Semua fitur Basic", "Integrasi form", "Animasi interaktif"],
            price: 800000,
            hosting: 500000
        },
        "Premium": {
            features: ["Semua fitur Standard", "Custom desain", "Optimasi SEO"],
            price: 1200000,
            hosting: 750000
        }
    },
    "Company Profile": {
        "Basic": {
            features: ["Desain responsif", "Halaman profil & kontak", "Optimasi ringan"],
            price: 1000000,
            hosting: 750000
        },
        "Standard": {
            features: ["Semua fitur Basic", "Animasi interaktif", "Custom section tambahan"],
            price: 1500000,
            hosting: 1000000
        },
        "Premium": {
            features: ["Semua fitur Standard", "Desain eksklusif", "Optimasi SEO"],
            price: 2000000,
            hosting: 1500000
        }
    },
    "Online Shop": {
        "Basic": {
            features: ["Desain responsif", "Halaman profil & kontak", "Optimasi ringan"],
            price: 5000000,
            hosting: 1000000
        },
        "Standard": {
            features: ["Semua fitur Basic", "Animasi interaktif", "Custom section tambahan"],
            price: 7500000,
            hosting: 2000000
        },
        "Premium": {
            features: ["Semua fitur Standard", "Desain eksklusif", "Optimasi SEO"],
            price: 10000000,
            hosting: 3000000
        }
    },
};

const basePrice = computed(() => {
    return selectedProject.value && selectedPackage.value
        ? dataList[selectedProject.value][selectedPackage.value].price
        : 0;
});

const hostingPrice = computed(() => {
    if (selectedHosting.value === "vps" && selectedProject.value && selectedPackage.value) {
        return dataList[selectedProject.value][selectedPackage.value].hosting;
    }
    return 0;
});

const totalPrice = computed(() => {
    return (
        basePrice.value +
        hostingPrice.value +
        Number(selectedMaintenance.value)
    );
});

const formatRupiah = (angka) => {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
</script>

<style scoped>
.container {
    max-width: 700px;
}

.card {
    border-radius: 12px;
}

.card-header {
    font-size: 1.1rem;
}
</style>
