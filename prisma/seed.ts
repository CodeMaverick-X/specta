import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

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

    }
];

async function main() {

    const createPhone = await prisma.phone.createMany({
        data: phoneData
    });
    console.log('done seeding...');
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
