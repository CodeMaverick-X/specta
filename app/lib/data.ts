import prisma from "./db";
import { Prisma } from "@prisma/client";

/**
 * seed database - just for setting up and dev.
 */

export async function seedDatbase() {

    const phoneData: Prisma.PhoneCreateInput[] = [

        {
            name: 'samsung s24 ultra',
            model: ['SM-S928', 'SM-S928N', 'SM-S928U', 'SM-S928B'],
            brand: 'samsung',
            price: 1300,
            releaseDate: new Date("January 24, 2024"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 5000,
                        type: 'Li-Ion',
                        wattage: 45,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'Android 14, One UI 6.1',
                        chipset: 'Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm)',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'only front camera',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'Samsung DeX, Samsung Wireless DeX (desktop experience support)',
                        rating: 99,
                    },
                    build: {
                        dimensions: '162.3 x 79 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },

        {
            name: 'samsung s24 plus',
            model: ['SM-S926B', 'SM-S926U'],
            brand: 'samsung',
            price: 950,
            releaseDate: new Date("January 24, 2024"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4500,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'Android 14, One UI 6.1',
                        chipset: 'Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm)',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'only front camera',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'Samsung DeX, Samsung Wireless DeX (desktop experience support)',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'iphone 15 pro',
            model: ['A3108', 'A3105', 'A2849', 'A3106'],
            brand: 'iphone',
            price: 1350,
            releaseDate: new Date("December 2, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4500,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'ios',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'iphone 15',
            model: ['A3092', 'A3089', 'A2846', 'A3090'],
            brand: 'iphone',
            price: 1100,
            releaseDate: new Date("December 2, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4500,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'ios',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'nothing phone 2',
            model: ['A065'],
            brand: 'nothing',
            price: 1150,
            releaseDate: new Date("December 2, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4000,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'nothing os',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'nothing phone 1',
            model: ['A055'],
            brand: 'nothing',
            price: 1150,
            releaseDate: new Date("December 2, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4000,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'nothing os',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'infinix hot 40i',
            model: ['X6528B'],
            brand: 'infinix',
            price: 190,
            releaseDate: new Date("December 2, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4000,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'xios',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'infinix hot 40',
            model: ['X65289'],
            brand: 'infinix',
            price: 400,
            releaseDate: new Date("April 7, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4000,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'xios',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        },
        {
            name: 'tecno povour 3',
            model: ['X65289'],
            brand: 'tecno',
            price: 200,
            releaseDate: new Date("April 7, 2023"),
            featured: false,
            newRelease: true,
            isAvailable: true,


            spec: {
                create: {
                    camera: {
                        frontCamera: '12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF',
                        backCamera: `200 MP, f/1.7, 24mm (wide), 1/1.3", 0.6µm, multi-directional PDAF, Laser AF, OIS
                    50 MP, f/3.4, 111mm (periscope telephoto), PDAF, OIS, 5x optical zoom
                    10 MP, f/2.4, 67mm (telephoto), 1/3.52", 1.12µm, Dual Pixel PDAF, OIS, 3x optical zoom
                    12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, Dual Pixel PDAF, Super Steady video`,
                        features: '3x, 5x optical zoom',
                        rating: 96,
                    },
                    battery: {
                        capacity: 4000,
                        type: 'Li-Ion',
                        wattage: 40,
                        wirelessCharging: true,
                        features: 'reverse wireless charging',
                        rating: 98,
                    },
                    screen: {
                        size: 6.8,
                        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
                        peakBrightness: 2600,
                        resolution: '1440 x 3120',
                        protection: 'Corning Gorilla Glass Armor',
                        features: 'supports Spen',
                        rating: 99,
                    },
                    platform: {
                        os: 'xios',
                        chipset: 'a bionic 17',
                        cpu: '8-core (1x3.39GHz Cortex-X4 & 3x3.1GHz Cortex-A720 & 2x2.9GHz Cortex-A720 & 2x2.2GHz Cortex-A520)',
                        gpu: 'Adreno 750 (1 GHz)',
                        memory: '256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM',
                        benchmark: '2,300 7,249',
                        features: 'galaxy AI',
                        rating: 96,
                    },
                    sensor: {
                        fingerprint: 'Fingerprint (under display, ultrasonic)',
                        faceRecognition: 'ir sensor',
                        accelerometer: true,
                        gyroscope: true,
                        magnetometer: true,
                        proximity: true,
                        ambientLight: true,
                        barometer: true,

                        features: 'cool lidar',
                        rating: 99,
                    },
                    build: {
                        dimensions: '152.3 x 69 x 8.6 mm (6.39 x 3.11 x 0.34 in)',
                        frameMaterial: 'titanium frame',
                        backMaterail: 'glass back (Gorilla Glass)',
                        weight: 232,
                        features: 'same old',
                        rating: 88,
                    }
                }
            }

        }
    ];

    for (let phone of phoneData) {

        await prisma.phone.create({
            data: phone
        });
    }

    console.log('done seeding...');


}

/**
 * 
 * @param query  query string from the search bar
 * @param currentPgae corrent page to know what page to query (pagination)
 */

export async function fetchFilteredPhone(query: string, currentPage: number) {
    let maybePrice;
    let maybeDate;
    try {
        maybePrice = Number(query) || 0;
    } catch (error) {
        maybePrice = 0;
    }
    const itemPerPage = 4;
    const skipNum = (currentPage - 1) * itemPerPage
    const phones = prisma.phone.findMany({
        skip: skipNum,
        take: itemPerPage,
        where: {
            OR: [
                {
                    name: {
                        contains: query
                    },
                },
                {
                    brand: {
                        contains: query
                    },
                },
                {
                    price: {
                        lte: maybePrice
                    },
                },
                {
                    model: {
                        has: query
                    }
                }

            ]
        }
    });

    return phones;

}

/**
 * 
 * @param query query string to search by string price or model or brand
 * @returns total number of pages found [not the pages just the number]
 */
export async function fetchPhonePages(query: string) {
    const itemsPerPage = 4;

    let maybePrice;
    let maybeDate;
    try {
        maybePrice = Number(query) || 0;
    } catch (error) {
        maybePrice = 0;
    }

    let totalPages = await prisma.phone.count({
        where: {
            OR: [
                {
                    name: {
                        contains: query
                    },
                },
                {
                    brand: {
                        contains: query
                    },
                },
                {
                    price: {
                        lte: maybePrice
                    },
                },
                {
                    model: {
                        has: query
                    }
                }

            ]
        }
    });

    totalPages = Math.ceil(Number(totalPages) / itemsPerPage)
    return totalPages;

}

/**
 * 
 * @param id fetch specific phone based on id
 * @returns phone object
 */
export async function fetchPhoneWithSpec(id: string) {
    const phone = await prisma.phone.findUnique({
        where: {
            id: id,
        },
        include: {
            spec: true
        }
    })
    return phone;
}

/**
 * 
 * @param code the country code to fetch rate
 * @returns code obj containing code and rate
 */

export async function getExhangeRate(code: string) {
    const codeVal = await prisma.rates.findUnique({
        where: {
            code: code
        }
    })

    return codeVal
}


/**
 * 
 * @param userObject userobject that contains username and string
 * @returns user object created
 */
export async function createUser(userObject: {
    username: string,
    password: string,
}) {
    const user = await prisma.users.create({
        data: {
            username: userObject.username,
            password: userObject.password,
            is_admin: false,
            expert: false,
        }
    })

    return user

}

/**
 * 
 * @param username username for check if its unigue
 * @returns boolean to confirm if a match was found
 */
export async function usernameIsUnique(username: string) {
    const isUnique = await prisma.users.findUnique({
        where: {
            username: username
        }
    })

    return !!isUnique
}

/**
 * 
 * @param username username to find user
 * @returns user object
 */
export async function getUser(username: string) {
    const user = await prisma.users.findUnique({
        where: {
            username: username
        }
    })

    return user
}