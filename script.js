/* ===== Supabase (same project as Sweet Flowers Garden) ===== */
const SUPABASE_URL = "https://dvyboakfwecqnjqjczur.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__bL-cHZPo4AejqQXtf0HTg_x5TjXPDe";

const products = [
    { id: 1, name: "Amoxicillin & Clavulanate 625mg", category: "Prescription", brand: "GSK", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 1200, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 2, name: "Panadol Extra Paracetamol 500mg", category: "OTC Medicine", brand: "GSK", form: "Tablets", rx: "OTC", rating: 5, basePrice: 250, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 3, name: "Seven Seas Cod Liver Oil + Omega 3", category: "Vitamins", brand: "Seven Seas", form: "Capsules", rx: "OTC", rating: 5, basePrice: 2800, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 4, name: "Digital Infrared Blood Pressure Monitor", category: "First Aid", brand: "Bayer", form: "Device", rx: "OTC", rating: 4, basePrice: 4500, discount: 15, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 5, name: "Pfizer Lipitor Atorvastatin 20mg", category: "Prescription", brand: "Pfizer", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 3400, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 6, name: "Hydrocortisone Skin Relief Cream 1%", category: "OTC Medicine", brand: "Novartis", form: "Cream", rx: "OTC", rating: 4, basePrice: 650, discount: 5, inStock: false, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 7, name: "Centrum Multivitamin Adult 100 Tablets", category: "Vitamins", brand: "Pfizer", form: "Tablets", rx: "OTC", rating: 5, basePrice: 2200, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 8, name: "Ibuprofen Pain Relief 400mg", category: "OTC Medicine", brand: "Advil", form: "Capsules", rx: "OTC", rating: 4, basePrice: 350, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 9, name: "Omeprazole Acid Reflux 20mg", category: "Prescription", brand: "AstraZeneca", form: "Capsules", rx: "Rx Required", rating: 4, basePrice: 1500, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 10, name: "Cetirizine Allergy Relief 10mg", category: "OTC Medicine", brand: "GSK", form: "Tablets", rx: "OTC", rating: 5, basePrice: 300, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 11, name: "Metformin Hydrochloride 500mg", category: "Prescription", brand: "Merck", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 850, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 12, name: "Aspirin Low Dose 81mg", category: "OTC Medicine", brand: "Bayer", form: "Tablets", rx: "OTC", rating: 4, basePrice: 400, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 13, name: "Vitamin C 1000mg Effervescent Tablets", category: "Vitamins", brand: "Redoxon", form: "Tablets", rx: "OTC", rating: 5, basePrice: 950, discount: 12, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 14, name: "Digital Clinical Thermometer", category: "First Aid", brand: "Omron", form: "Device", rx: "OTC", rating: 5, basePrice: 1100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 15, name: "Glucerna Nutritional Powder 850g", category: "Vitamins", brand: "Abbott", form: "Powder", rx: "OTC", rating: 5, basePrice: 4200, discount: 8, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 16, name: "Saline Nasal Spray 50ml", category: "OTC Medicine", brand: "Sterimar", form: "Spray", rx: "OTC", rating: 4, basePrice: 750, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 17, name: "Azithromycin 500mg Tablets", category: "Prescription", brand: "Pfizer", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 1800, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 18, name: "Diclofenac Sodium Gel 1%", category: "OTC Medicine", brand: "Voltaren", form: "Gel", rx: "OTC", rating: 5, basePrice: 900, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 19, name: "Calcium + Vitamin D3 Tablets", category: "Vitamins", brand: "Caltrate", form: "Tablets", rx: "OTC", rating: 4, basePrice: 1600, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 20, name: "First Aid Emergency Trauma Kit", category: "First Aid", brand: "Johnson & Johnson", form: "Kit", rx: "OTC", rating: 5, basePrice: 3500, discount: 20, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 21, name: "Losartan Potassium 50mg", category: "Prescription", brand: "Merck", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 22, name: "Cough Syrup Expectorant 100ml", category: "OTC Medicine", brand: "Benylin", form: "Syrup", rx: "OTC", rating: 4, basePrice: 550, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 23, name: "Zinc Gluconate 50mg Tablets", category: "Vitamins", brand: "Nature's Bounty", form: "Tablets", rx: "OTC", rating: 4, basePrice: 800, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 24, name: "Pulse Oximeter Fingertip", category: "First Aid", brand: "Bayer", form: "Device", rx: "OTC", rating: 5, basePrice: 2400, discount: 15, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 25, name: "Amlodipine Besylate 5mg", category: "Prescription", brand: "Pfizer", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 900, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 26, name: "Antacid Chewable Tablets 100s", category: "OTC Medicine", brand: "Tums", form: "Tablets", rx: "OTC", rating: 4, basePrice: 600, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 27, name: "Iron Supplement Ferrous Sulfate", category: "Vitamins", brand: "Nature Made", form: "Tablets", rx: "OTC", rating: 4, basePrice: 700, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 28, name: "Elastic Adhesive Bandage 3 inch", category: "First Aid", brand: "Elastoplast", form: "Bandage", rx: "OTC", rating: 5, basePrice: 250, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 29, name: "Prednisone 5mg Tablets", category: "Prescription", brand: "Novartis", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 600, discount: 0, inStock: false, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 30, name: "Loperamide Anti-Diarrheal Capsules", category: "OTC Medicine", brand: "Imodium", form: "Capsules", rx: "OTC", rating: 5, basePrice: 450, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 31, name: "Magnesium Citrate 500mg", category: "Vitamins", brand: "NOW Foods", form: "Capsules", rx: "OTC", rating: 4, basePrice: 1400, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 32, name: "Medical Face Masks 50pcs Box", category: "First Aid", brand: "3M", form: "Mask", rx: "OTC", rating: 5, basePrice: 500, discount: 25, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 33, name: "Sertraline Hydrochloride 50mg", category: "Prescription", brand: "Pfizer", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 1900, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 34, name: "Throat Lozenges Honey Lemon 24s", category: "OTC Medicine", brand: "Strepsils", form: "Lozenges", rx: "OTC", rating: 5, basePrice: 300, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 35, name: "Vitamin B Complex High Potency", category: "Vitamins", brand: "Nature's Bounty", form: "Tablets", rx: "OTC", rating: 4, basePrice: 1100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 36, name: "Antiseptic Disinfectant Liquid 500ml", category: "First Aid", brand: "Dettol", form: "Liquid", rx: "OTC", rating: 5, basePrice: 650, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 37, name: "Montelukast Sodium 10mg", category: "Prescription", brand: "Merck", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 2100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 38, name: "Soothe Eye Drops Lubricant 15ml", category: "OTC Medicine", brand: "Visine", form: "Drops", rx: "OTC", rating: 4, basePrice: 700, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 39, name: "Fish Oil Omega 3 1000mg 120s", category: "Vitamins", brand: "Kirkland Signature", form: "Capsules", rx: "OTC", rating: 5, basePrice: 2400, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 40, name: "Digital Non-Contact Infrared Thermometer", category: "First Aid", brand: "Omron", form: "Device", rx: "OTC", rating: 5, basePrice: 3800, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 41, name: "Escitalopram Oxalate 10mg", category: "Prescription", brand: "Forest Labs", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1750, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 42, name: "Hydrocortisone Cream Plus 15g", category: "OTC Medicine", brand: "Canesten", form: "Cream", rx: "OTC", rating: 4, basePrice: 550, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 43, name: "Biotin 10000mcg Hair Skin Nails", category: "Vitamins", brand: "Natrol", form: "Tablets", rx: "OTC", rating: 5, basePrice: 2100, discount: 15, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 44, name: "Sterile Gauze Swabs 10cm x 10cm", category: "First Aid", brand: "Smith & Nephew", form: "Bandage", rx: "OTC", rating: 4, basePrice: 300, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 45, name: "Ciprofloxacin 500mg Tablets", category: "Prescription", brand: "Bayer", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 1400, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 46, name: "Vapor Rub Chest Decongestant 50g", category: "OTC Medicine", brand: "Vicks", form: "Ointment", rx: "OTC", rating: 5, basePrice: 480, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 47, name: "CoQ10 100mg Heart Health", category: "Vitamins", brand: "Doctor's Best", form: "Capsules", rx: "OTC", rating: 5, basePrice: 3100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 48, name: "Neosporin Original First Aid Antibiotic Ointment", category: "First Aid", brand: "Johnson & Johnson", form: "Ointment", rx: "OTC", rating: 5, basePrice: 850, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 49, name: "Pantoprazole Sodium 40mg", category: "Prescription", brand: "Takeda", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1650, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 50, name: "Clotrimazole Antifungal Cream 1%", category: "OTC Medicine", brand: "Canesten", form: "Cream", rx: "OTC", rating: 5, basePrice: 750, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 51, name: "Glucosamine Chondroitin Joint Support", category: "Vitamins", brand: "Osteo Bi-Flex", form: "Tablets", rx: "OTC", rating: 5, basePrice: 3600, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 52, name: "Medical Paper Tape 1 inch", category: "First Aid", brand: "3M", form: "Tape", rx: "OTC", rating: 4, basePrice: 200, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 53, name: "Levothyroxine Sodium 50mcg", category: "Prescription", brand: "AbbVie", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 950, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 54, name: "Simethicone Gas Relief 80mg", category: "OTC Medicine", brand: "Gas-X", form: "Capsules", rx: "OTC", rating: 4, basePrice: 500, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 55, name: "Melatonin 5mg Sleep Aid", category: "Vitamins", brand: "Nature Made", form: "Tablets", rx: "OTC", rating: 5, basePrice: 1250, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 56, name: "Instant Cold Pack Disposable", category: "First Aid", brand: "Elastoplast", form: "Device", rx: "OTC", rating: 4, basePrice: 350, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 57, name: "Prednisolone Eye Drops 5ml", category: "Prescription", brand: "Allergan", form: "Drops", rx: "Rx Required", rating: 4, basePrice: 1300, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 58, name: "Hydrogen Peroxide Antiseptic 200ml", category: "OTC Medicine", brand: "Cura", form: "Liquid", rx: "OTC", rating: 4, basePrice: 250, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 59, name: "Pregnancy Test Kit One Step", category: "First Aid", brand: "Clearblue", form: "Device", rx: "OTC", rating: 5, basePrice: 900, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 60, name: "Multivitamin Liquid for Children 250ml", category: "Vitamins", brand: "Abbott", form: "Syrup", rx: "OTC", rating: 5, basePrice: 1450, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 61, name: "Rosuvastatin Calcium 10mg", category: "Prescription", brand: "AstraZeneca", form: "Tablets", rx: "Rx Required", rating: 5, basePrice: 2600, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 62, name: "Isopropyl Alcohol Rubbing 70% 500ml", category: "OTC Medicine", brand: "Derma", form: "Liquid", rx: "OTC", rating: 5, basePrice: 400, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 63, name: "Collagen Peptides Powder 400g", category: "Vitamins", brand: "Vital Proteins", form: "Powder", rx: "OTC", rating: 5, basePrice: 4500, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 64, name: "Compression Knee Brace Support", category: "First Aid", brand: "Futuro", form: "Device", rx: "OTC", rating: 4, basePrice: 2200, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 65, name: "Gabapentin 300mg Capsules", category: "Prescription", brand: "Pfizer", form: "Capsules", rx: "Rx Required", rating: 4, basePrice: 2000, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 66, name: "Wart Remover Gel 10ml", category: "OTC Medicine", brand: "Compound W", form: "Gel", rx: "OTC", rating: 4, basePrice: 1100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 67, name: "Probiotics 50 Billion CFU Capsules", category: "Vitamins", brand: "Garden of Life", form: "Capsules", rx: "OTC", rating: 5, basePrice: 3900, discount: 15, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 68, name: "Waterproof Adhesive Plasters Assorted 100s", category: "First Aid", brand: "Elastoplast", form: "Bandage", rx: "OTC", rating: 5, basePrice: 450, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 69, name: "Tramadol Hydrochloride 50mg", category: "Prescription", brand: "Grunenthal", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1600, discount: 0, inStock: false, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 70, name: "Eczema Relief Soothing Cream 200ml", category: "OTC Medicine", brand: "Cetaphil", form: "Cream", rx: "OTC", rating: 5, basePrice: 1800, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 71, name: "Vitamin D3 5000 IU Softgels", category: "Vitamins", brand: "NOW Foods", form: "Capsules", rx: "OTC", rating: 5, basePrice: 1500, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 72, name: "Digital Blood Glucose Meter Kit", category: "First Aid", brand: "Accu-Chek", form: "Device", rx: "OTC", rating: 5, basePrice: 3200, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 73, name: "Meloxicam 15mg Tablets", category: "Prescription", brand: "Boehringer Ingelheim", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1150, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 74, name: "Nicotine Replacement Gum 2mg", category: "OTC Medicine", brand: "Nicorette", form: "Gum", rx: "OTC", rating: 4, basePrice: 2500, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 75, name: "Super B-Complex with Vitamin C", category: "Vitamins", brand: "Nature Made", form: "Tablets", rx: "OTC", rating: 4, basePrice: 1350, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 76, name: "Medical Latex Examination Gloves 100s", category: "First Aid", brand: "Ansell", form: "Gloves", rx: "OTC", rating: 5, basePrice: 1200, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 77, name: "Furosemide 40mg Tablets", category: "Prescription", brand: "Sanofi", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 700, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 78, name: "Hemorrhoid Relief Ointment 30g", category: "OTC Medicine", brand: "Preparation H", form: "Ointment", rx: "OTC", rating: 4, basePrice: 950, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 79, name: "Prenatal Multivitamin Softgels", category: "Vitamins", brand: "One A Day", form: "Capsules", rx: "OTC", rating: 5, basePrice: 2900, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 80, name: "Hot Water Bottle Rubber 2L", category: "First Aid", brand: "Cura", form: "Device", rx: "OTC", rating: 4, basePrice: 650, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 81, name: "Spiriva Respimat Inhaler 2.5mcg", category: "Prescription", brand: "Boehringer Ingelheim", form: "Inhaler", rx: "Rx Required", rating: 5, basePrice: 6500, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 82, name: "Ear Wax Removal Drops 15ml", category: "OTC Medicine", brand: "Debrox", form: "Drops", rx: "OTC", rating: 4, basePrice: 800, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 83, name: "L-Carnitine 1000mg Liquid Energy", category: "Vitamins", brand: "Dymatize", form: "Liquid", rx: "OTC", rating: 4, basePrice: 3400, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 84, name: "Cervical Neck Collar Support", category: "First Aid", brand: "Futuro", form: "Device", rx: "OTC", rating: 4, basePrice: 1500, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 85, name: "Valsartan 80mg Tablets", category: "Prescription", brand: "Novartis", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1700, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 86, name: "Dandruff Medicated Shampoo 200ml", category: "OTC Medicine", brand: "Nizoral", form: "Liquid", rx: "OTC", rating: 5, basePrice: 1400, discount: 5, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 87, name: "Organic Flaxseed Oil 1000mg", category: "Vitamins", brand: "Nature's Bounty", form: "Capsules", rx: "OTC", rating: 4, basePrice: 1900, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 88, name: "Medical Ice Bag Reusable", category: "First Aid", brand: "Elastoplast", form: "Device", rx: "OTC", rating: 5, basePrice: 550, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 89, name: "Allopurinol 100mg Tablets", category: "Prescription", brand: "GSK", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 850, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 90, name: "Motion Sickness Relief Meclizine", category: "OTC Medicine", brand: "Dramamine", form: "Tablets", rx: "OTC", rating: 4, basePrice: 600, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1550572017-edf7e100d024?q=80&w=1000"] },
    { id: 91, name: "L-Glutamine Powder 500g", category: "Vitamins", brand: "Optimum Nutrition", form: "Powder", rx: "OTC", rating: 5, basePrice: 3800, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 92, name: "Walking Cane Adjustable Aluminum", category: "First Aid", brand: "Nova", form: "Device", rx: "OTC", rating: 4, basePrice: 2500, discount: 10, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 93, name: "Meloxicam 7.5mg Tablets", category: "Prescription", brand: "Boehringer Ingelheim", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 900, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000"] },
    { id: 94, name: "Burn Jel Antiseptic Pain Reliever 3.5g", category: "OTC Medicine", brand: "Water-Jel", form: "Gel", rx: "OTC", rating: 5, basePrice: 200, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 95, name: "Turmeric Curcumin 1500mg with BioPerine", category: "Vitamins", brand: "Cosmo Naturals", form: "Capsules", rx: "OTC", rating: 5, basePrice: 2700, discount: 15, inStock: true, images: ["https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1000"] },
    { id: 96, name: "Digital Body Weight Bathroom Scale", category: "First Aid", brand: "Eatsmart", form: "Device", rx: "OTC", rating: 4, basePrice: 2800, discount: 12, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] },
    { id: 97, name: "Spironolactone 25mg Tablets", category: "Prescription", brand: "Pfizer", form: "Tablets", rx: "Rx Required", rating: 4, basePrice: 1100, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"] },
    { id: 98, name: "Lip Balm Medicated SPF 15", category: "OTC Medicine", brand: "Blistex", form: "Ointment", rx: "OTC", rating: 5, basePrice: 250, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000"] },
    { id: 99, name: "Super Vitamin E 400 IU", category: "Vitamins", brand: "Nature's Bounty", form: "Capsules", rx: "OTC", rating: 4, basePrice: 1600, discount: 0, inStock: true, images: ["https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1000"] },
    { id: 100, name: "Nebulizer Compressor Machine Portable", category: "First Aid", brand: "Omron", form: "Device", rx: "OTC", rating: 5, basePrice: 5500, discount: 15, inStock: true, images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000"] }
];

const employees = [
    { name: "Dr. Mary Omondi", email: "mary@apexpharmacy.com", role: "Pharmacist", rate: 4.0 },
    { name: "John Kamau", email: "john@apexpharmacy.com", role: "Pharmacy Assistant", rate: 2.5 }
];

let invoices = [
    { id: "RX-5001", customer: "David Njuguna", product: "Amoxicillin 625mg (Rx)", salesRep: "Dr. Mary Omondi", amount: 1200, status: "Paid" },
    { id: "RX-5002", customer: "Alice Chebet", product: "Atorvastatin 20mg", salesRep: "John Kamau", amount: 3400, status: "Pending Verification" }
];

let cart = [];
let selectedPaymentMethod = 'mpesa';

function getEffectivePrice(item) {
    return Math.round(item.basePrice * (1 - (item.discount || 0) / 100));
}

function renderProducts(list){
    const grid = document.getElementById("itemGrid");
    if(!grid) return;
    grid.innerHTML = "";
    if(list.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align:center; color:#888;">No pharmaceutical products match your filter parameters.</div>`;
        return;
    }
    list.forEach((item) => {
        const isRx = item.rx === "Rx Required";
        const effPrice = getEffectivePrice(item);
        const hasDiscount = item.discount > 0;

        grid.innerHTML += `
        <div class="item-card">
            ${hasDiscount ? `<div class="sale-badge">-${item.discount}% OFF</div>` : ''}
            <img src="${item.images[0]}" class="item-image">
            <div class="card-body">
                <div class="item-title">${item.name}</div>
                <div class="stars">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>
                <div style="margin-bottom:10px;">
                    <span style="font-size:18px; font-weight:bold; color:#00a884;">KSh ${effPrice.toLocaleString()}</span>
                    ${hasDiscount ? `<span style="font-size:13px; color:#888; text-decoration:line-through; margin-left:8px;">KSh ${item.basePrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="item-info">
                    <div><i class="fa fa-folder"></i> ${item.category}</div>
                    <div><i class="fa fa-industry"></i> ${item.brand}</div>
                    <div><i class="fa fa-pills"></i> ${item.form}</div>
                    <div><span class="rx-badge ${isRx ? 'rx-required' : 'rx-otc'}">${item.rx}</span></div>
                </div>
                <div class="card-buttons">
                    <button class="add-cart-btn" onclick="addToCart(${item.id})"><i class="fa fa-cart-plus"></i> Cart</button>
                    <button class="inquiry-btn" onclick="openModal(${item.id})">Consult</button>
                    <button class="view-btn" onclick="openModal(${item.id})">Details</button>
                </div>
            </div>
        </div>`;
    });
}

function showPage(page, navElement) {
    if(navElement) {
        document.querySelectorAll('.nav a').forEach(el => el.classList.remove('active-nav'));
        navElement.classList.add('active-nav');
    }

    const catalogSec = document.getElementById("catalogSection");
    const topSearchSec = document.getElementById("topSearchSection");
    const filterSidebar = document.getElementById("mainFilterSidebar");
    const deliverySec = document.getElementById("deliverySection");
    const contactSec = document.getElementById("contactSection");
    const pageTitle = document.getElementById("pageSectionTitle");

    catalogSec.style.display = "none";
    topSearchSec.style.display = "none";
    filterSidebar.style.display = "none";
    deliverySec.style.display = "none";
    contactSec.style.display = "none";

    if (page === 'storefront') {
        catalogSec.style.display = "block";
        topSearchSec.style.display = "flex";
        filterSidebar.style.display = "block";
        pageTitle.innerText = "Verified Pharmaceutical Products";
        renderProducts(products);
    } else if (page === 'prescription') {
        catalogSec.style.display = "block";
        topSearchSec.style.display = "flex";
        filterSidebar.style.display = "block";
        pageTitle.innerText = "Prescription Drugs (Doctor Note Required)";
        renderProducts(products.filter(p => p.category === "Prescription"));
    } else if (page === 'otc') {
        catalogSec.style.display = "block";
        topSearchSec.style.display = "flex";
        filterSidebar.style.display = "block";
        pageTitle.innerText = "Over-The-Counter (OTC) Medicines";
        renderProducts(products.filter(p => p.category === "OTC Medicine"));
    } else if (page === 'supplements') {
        catalogSec.style.display = "block";
        topSearchSec.style.display = "flex";
        filterSidebar.style.display = "block";
        pageTitle.innerText = "Vitamins & Nutritional Supplements";
        renderProducts(products.filter(p => p.category === "Vitamins"));
    } else if (page === 'firstaid') {
        catalogSec.style.display = "block";
        topSearchSec.style.display = "flex";
        filterSidebar.style.display = "block";
        pageTitle.innerText = "First Aid & Medical Equipment";
        renderProducts(products.filter(p => p.category === "First Aid"));
    } else if (page === 'delivery') {
        deliverySec.style.display = "block";
    } else if (page === 'contact') {
        contactSec.style.display = "block";
    }
}

function openModal(id){
    const item = products.find(p => p.id === id);
    document.getElementById("itemModal").style.display = "flex";
    document.getElementById("modalMainImage").src = item.images[0];
    document.getElementById("modalTitle").innerText = item.name;
    document.getElementById("modalStars").innerText = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
    
    const effPrice = getEffectivePrice(item);
    const hasDiscount = item.discount > 0;
    document.getElementById("modalPriceBox").innerHTML = `
        <span style="font-size:22px; font-weight:bold; color: #00a884;">KSh ${effPrice.toLocaleString()}</span>
        ${hasDiscount ? `<span style="font-size:14px; color:#888; text-decoration:line-through; margin-left:10px;">KSh ${item.basePrice.toLocaleString()} (-${item.discount}%)</span>` : ''}
    `;

    document.getElementById("modalItemInfo").innerHTML = `
        <div>Category: <b>${item.category}</b></div>
        <div>Brand: <b>${item.brand}</b></div>
        <div>Form: <b>${item.form}</b></div>
        <div>Requirement: <b>${item.rx}</b></div>`;

    const related = products.filter(p => p.category === item.category && p.id !== item.id);
    const relatedGrid = document.getElementById("relatedGrid");
    relatedGrid.innerHTML = "";
    if(related.length === 0) {
        relatedGrid.innerHTML = "<p style='font-size:13px; color:#777;'>No direct alternatives found in this category.</p>";
    } else {
        related.forEach(rel => {
            const relEff = getEffectivePrice(rel);
            relatedGrid.innerHTML += `
            <div class="related-card" onclick="openModal(${rel.id})">
                <img src="${rel.images[0]}">
                <div style="font-size:12px; font-weight:bold; margin-top:5px;">${rel.name}</div>
                <div style="font-size:12px; color:#00a884;">KSh ${relEff.toLocaleString()}</div>
            </div>`;
        });
    }
}

function closeModal(id){ document.getElementById(id).style.display = "none"; }

/* Cart & Checkout */
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);
    if(existing) { existing.qty += 1; }
    else { cart.push({ ...item, qty: 1 }); }
    updateCartUI();
    alert(`${item.name} added to cart!`);
}

function updateCartUI() {
    document.getElementById("cartCount").innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartList = document.getElementById("cartItemsList");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item, idx) => {
        const effPrice = getEffectivePrice(item);
        const itemTotal = effPrice * item.qty;
        total += itemTotal;
        cartList.innerHTML += `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #eee;">
            <div>
                <b>${item.name}</b><br>
                <small>KSh ${effPrice.toLocaleString()} x ${item.qty}</small>
            </div>
            <div>
                <b>KSh ${itemTotal.toLocaleString()}</b>
                <button onclick="removeFromCart(${idx})" style="background:none; border:none; color:red; margin-left:8px; cursor:pointer;"><i class="fa fa-trash"></i></button>
            </div>
        </div>`;
    });
    document.getElementById("cartTotalPrice").innerText = `KSh ${total.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function openCartModal() {
    updateCartUI();
    document.getElementById("cartModal").style.display = "flex";
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-method-card').forEach(el => el.classList.remove('active'));
    if(method === 'mpesa') {
        document.getElementById('payMpesa').classList.add('active');
        document.getElementById('mpesaFields').style.display = 'block';
        document.getElementById('cardFields').style.display = 'none';
    } else if(method === 'card') {
        document.getElementById('payCard').classList.add('active');
        document.getElementById('mpesaFields').style.display = 'none';
        document.getElementById('cardFields').style.display = 'grid';
    } else {
        document.getElementById('payCod').classList.add('active');
        document.getElementById('mpesaFields').style.display = 'none';
        document.getElementById('cardFields').style.display = 'none';
    }
}

function processPayment(e) {
    e.preventDefault();
    if(cart.length === 0) { alert("Your medical cart is empty!"); return; }
    if(selectedPaymentMethod === 'mpesa') {
        alert("M-Pesa payment prompt sent to mobile phone. Please enter PIN to complete payment.");
    } else {
        alert("Order successfully placed! A pharmacist will process your delivery.");
    }
    cart = [];
    updateCartUI();
    closeModal("cartModal");
}

/* Admin Logic */
document.getElementById("mainLogo").addEventListener("click", () => {
    document.getElementById("adminLoginModal").style.display = "flex";
});

document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("adminEmail").value.trim();
    const pwd = document.getElementById("adminPassword").value;

    /* 1) Normal login: Supabase account + a row in apex_profiles */
    if (sb) {
        try {
            const { error } = await sb.auth.signInWithPassword({ email, password: pwd });
            if (!error) {
                const { data: { session } } = await sb.auth.getSession();
                const { data: prof, error: profError } = await sb.from("apex_profiles").select("*").eq("id", session.user.id).maybeSingle();
                if (profError || !prof) {
                    await sb.auth.signOut();
                    alert("This login has no Pharmacy Portal access yet. Ask an admin to add you, or run the setup SQL.");
                    return;
                }
                syncOn = true;
                currentProfile = prof;
                closeModal("adminLoginModal");
                activateAdminDashboard();
                await loadPortalData();
                subscribePortal();
                return;
            }
        } catch (err) { console.warn("Supabase login unavailable:", err); }
    }

    /* 2) Offline fallback (original behaviour): works, but nothing is synced */
    const emailKey = email.toLowerCase();
    const isMainAdmin = emailKey === "adminacaciabooks@gmail.com" && pwd === "admin123";
    const isAddedUser = portalUsers.some(u => u.email === emailKey && u.password === pwd);
    if(isMainAdmin || isAddedUser) {
        closeModal("adminLoginModal");
        activateAdminDashboard();
        alert("Offline mode: you are not signed in to Supabase, so changes will NOT be synced.");
    } else {
        alert("Invalid credentials. Access denied.");
    }
});

function activateAdminDashboard() {
    document.getElementById("publicContainer").style.display = "none";
    document.getElementById("adminContainer").style.display = "flex";
    const siteFooter = document.querySelector("footer");
    if (siteFooter) siteFooter.style.display = "none";
    document.getElementById("mainNavbar").innerHTML = `
        <span style="color:#00a884; font-weight:bold;"><i class="fa fa-user-md"></i> Pharmacist Portal <small id="syncBadge" style="opacity:.8"></small></span>
        <a href="#" onclick="portalLogout()" style="background:#00a884; padding:6px 12px; border-radius:4px; margin-left:10px;"><i class="fa fa-sign-out-alt"></i> Logout</a>`;
    applyRoleUI();
    renderAdminTables();
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-panel-card').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.admin-sidebar-menu li').forEach(el => el.classList.remove('active-admin-tab'));
    document.getElementById(`panel-${tab}`).style.display = 'block';
    event.currentTarget.classList.add('active-admin-tab');
}

function renderAdminTables() {
    // Render Invoices Table
    const invTable = document.getElementById("adminInvoiceTableBody");
    invTable.innerHTML = "";
    let grossSales = 0;

    invoices.forEach(inv => {
        if(inv.status === "Paid") grossSales += inv.amount;
        invTable.innerHTML += `
        <tr>
            <td><b>${inv.id}</b></td>
            <td>${inv.customer}</td>
            <td>${inv.product}</td>
            <td>${inv.salesRep}</td>
            <td>KSh ${inv.amount.toLocaleString()}</td>
            <td><span class="status-badge ${inv.status === 'Paid' ? 'status-success' : 'status-pending'}">${inv.status}</span></td>
            <td>
                <button class="action-btn btn-edit" onclick="editInvoice('${inv.id}')"><i class="fa fa-edit"></i> Edit</button>
                <button class="action-btn btn-delete" onclick="deleteInvoice('${inv.id}')"><i class="fa fa-trash"></i> Delete</button>
            </td>
        </tr>`;
    });

    document.getElementById("revenueGrossSales").innerText = "KSh " + grossSales.toLocaleString();

    // Render Products Table
    const prodTable = document.getElementById("adminProductsTableBody");
    prodTable.innerHTML = "";
    products.forEach(p => {
        const eff = getEffectivePrice(p);
        prodTable.innerHTML += `
        <tr>
            <td><b>${p.name}</b></td>
            <td>${p.category}</td>
            <td>KSh ${p.basePrice.toLocaleString()}</td>
            <td><span style="color: ${p.discount > 0 ? '#e74c3c':'#333'}; font-weight: bold;">${p.discount}%</span></td>
            <td><b style="color:#00a884;">KSh ${eff.toLocaleString()}</b></td>
            <td><span class="status-badge ${p.inStock ? 'status-success':'status-pending'}">${p.inStock ? 'In Stock':'Out'}</span></td>
            <td>
                <button class="action-btn btn-edit" onclick="openDiscountModal(${p.id})"><i class="fa fa-percent"></i> Discount</button>
            </td>
        </tr>`;
    });

    // Render Employees and Commissions Table
    const empTable = document.getElementById("adminEmployeesTableBody");
    const commTable = document.getElementById("adminCommissionTableBody");
    empTable.innerHTML = ""; commTable.innerHTML = "";
    let totalComm = 0;
    
    employees.forEach(e => {
        const salesVolume = invoices
            .filter(i => i.salesRep === e.name && i.status === "Paid")
            .reduce((sum, i) => sum + i.amount, 0);
        const commissionEarned = (salesVolume * e.rate) / 100;
        totalComm += commissionEarned;

        empTable.innerHTML += `<tr><td><b>${e.name}</b></td><td>${e.role}</td><td>${e.rate}%</td></tr>`;
        commTable.innerHTML += `<tr><td><b>${e.name}</b></td><td>${e.role}</td><td>KSh ${salesVolume.toLocaleString()}</td><td>${e.rate}%</td><td style="color:#137333; font-weight:bold;">KSh ${commissionEarned.toLocaleString()}</td></tr>`;
    });

    document.getElementById("revenueCommissionsPaid").innerText = "KSh " + totalComm.toLocaleString();
}

/* Discount Manager */
function openDiscountModal(id) {
    const item = products.find(p => p.id === id);
    document.getElementById("discProdId").value = item.id;
    document.getElementById("discProdNameDisplay").innerText = item.name;
    document.getElementById("discValue").value = item.discount;
    document.getElementById("discountModal").style.display = "flex";
}

document.getElementById("discountForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById("discProdId").value);
    const newDisc = parseFloat(document.getElementById("discValue").value);

    const item = products.find(p => p.id === id);
    if(item) {
        if (syncOn) {
            try { await db(sb.from("apex_products").update({ discount: newDisc }).eq("id", id)); } catch (err) { return; }
        }
        item.discount = newDisc;
    }

    renderAdminTables();
    renderProducts(products);
    closeModal("discountModal");
    alert("Discount updated successfully!");
});

/* Invoice Operations */
function openInvoiceModal(invId = null) {
    const repSelect = document.getElementById("invSalesRep");
    repSelect.innerHTML = employees.map(e => `<option value="${e.name}">${e.name}</option>`).join("");

    if(invId) {
        const inv = invoices.find(i => i.id === invId);
        document.getElementById("invoiceModalTitle").innerText = "Edit Rx Invoice (" + inv.id + ")";
        document.getElementById("invId").value = inv.id;
        document.getElementById("invCustomer").value = inv.customer;
        document.getElementById("invProduct").value = inv.product;
        document.getElementById("invSalesRep").value = inv.salesRep;
        document.getElementById("invAmount").value = inv.amount;
        document.getElementById("invStatus").value = inv.status;
    } else {
        document.getElementById("invoiceModalTitle").innerText = "Create Rx Invoice";
        document.getElementById("invoiceForm").reset();
        document.getElementById("invId").value = "";
    }
    document.getElementById("invoiceModal").style.display = "flex";
}

function editInvoice(id) { openInvoiceModal(id); }

async function deleteInvoice(id) {
    if(confirm(`Delete invoice ${id}?`)) {
        if (syncOn) {
            try { await db(sb.from("apex_invoices").delete().eq("id", id)); } catch (err) { return; }
            await loadPortalData();
            return;
        }
        invoices = invoices.filter(i => i.id !== id);
        renderAdminTables();
    }
}

function nextInvoiceId() {
    const nums = invoices.map(i => parseInt(String(i.id).replace(/\D/g, ""), 10)).filter(n => !isNaN(n));
    return "RX-" + (Math.max(5000, ...nums) + 1);
}

document.getElementById("invoiceForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.getElementById("invId").value;
    const customer = document.getElementById("invCustomer").value;
    const product = document.getElementById("invProduct").value;
    const salesRep = document.getElementById("invSalesRep").value;
    const amount = parseFloat(document.getElementById("invAmount").value);
    const status = document.getElementById("invStatus").value;

    if (syncOn) {
        try {
            if (id) { await db(sb.from("apex_invoices").update({ customer, product, sales_rep: salesRep, amount, status }).eq("id", id)); }
            else { await db(sb.from("apex_invoices").insert({ id: nextInvoiceId(), customer, product, sales_rep: salesRep, amount, status })); }
        } catch (err) { return; }
        await loadPortalData();
        closeModal("invoiceModal");
        return;
    }

    if(id) {
        const index = invoices.findIndex(i => i.id === id);
        if(index !== -1) { invoices[index] = { id, customer, product, salesRep, amount, status }; }
    } else {
        const newId = `RX-${5000 + invoices.length + 1}`;
        invoices.push({ id: newId, customer, product, salesRep, amount, status });
    }

    renderAdminTables();
    closeModal("invoiceModal");
});

/* Product Operations */
function openAddProductModal(){ document.getElementById("addProductModal").style.display = "flex"; }

document.getElementById("addProductForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("addProdName").value;
    const cat = document.getElementById("addProdCat").value;
    const basePrice = parseFloat(document.getElementById("addProdPrice").value);
    const discount = parseFloat(document.getElementById("addProdDiscount").value) || 0;
    const brand = document.getElementById("addProdBrand").value || "Generic";
    const form = document.getElementById("addProdForm").value;
    const rx = document.getElementById("addProdRx").value;
    const img = document.getElementById("addProdImage").value || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000";

    if (syncOn) {
        try {
            await db(sb.from("apex_products").insert({ name, category: cat, brand, form, rx, rating: 5, base_price: basePrice, discount, in_stock: true, images: [img] }));
        } catch (err) { return; }
        await loadProducts();
        renderAdminTables();
        closeModal("addProductModal");
        return;
    }

    const newId = products.length + 1;
    products.push({ id: newId, name, category: cat, brand, form, rx, rating: 5, basePrice, discount, inStock: true, images: [img] });
    renderProducts(products);
    renderAdminTables();
    closeModal("addProductModal");
});

/* Filters */
function applyFilters() {
    const kw = document.getElementById("filterKeyword").value.toLowerCase();
    const cat = document.getElementById("filterCategory").value;
    const minPrice = parseFloat(document.getElementById("filterMinPrice").value) || 0;
    const maxPrice = parseFloat(document.getElementById("filterMaxPrice").value) || Infinity;
    const brand = document.getElementById("filterBrand").value;
    const form = document.getElementById("filterForm").value;
    const rxType = document.getElementById("filterRxType").value;
    const inStockOnly = document.getElementById("filterInStockOnly").checked;

    const filtered = products.filter(p => {
        const eff = getEffectivePrice(p);
        const matchesKw = p.name.toLowerCase().includes(kw);
        const matchesCat = cat === "All" || p.category === cat;
        const matchesPrice = eff >= minPrice && eff <= maxPrice;
        const matchesBrand = brand === "All" || p.brand === brand;
        const matchesForm = form === "All" || p.form === form;
        const matchesRx = rxType === "All" || p.rx === rxType;
        const matchesStock = !inStockOnly || p.inStock;

        return matchesKw && matchesCat && matchesPrice && matchesBrand && matchesForm && matchesRx && matchesStock;
    });

    renderProducts(filtered);
}

function resetFilters() {
    document.getElementById("filterKeyword").value = "";
    document.getElementById("filterCategory").value = "All";
    document.getElementById("filterMinPrice").value = "";
    document.getElementById("filterMaxPrice").value = "";
    document.getElementById("filterBrand").value = "All";
    document.getElementById("filterForm").value = "All";
    document.getElementById("filterRxType").value = "All";
    document.getElementById("filterInStockOnly").checked = false;
    renderProducts(products);
}

function topSearch() {
    const val = document.getElementById("topSearchBar").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(val));
    renderProducts(filtered);
}

renderProducts(products);

/* ===== Clinic modules: Patient Visits, Pharmacy & Sales, History Log, Dashboard ===== */
const clinicState = { visits: [], inventory: [], logs: [] };
(function loadClinic(){
    try {
        clinicState.visits = JSON.parse(localStorage.getItem('hospital_visits')) || [];
        clinicState.inventory = JSON.parse(localStorage.getItem('pharmacy_inventory')) || [];
        clinicState.logs = JSON.parse(localStorage.getItem('system_logs')) || [];
    } catch (e) { /* storage unavailable or corrupt: start empty */ }
})();

function clinicEsc(v) {
    return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function clinicSave() {
    if (!syncOn) try {
        localStorage.setItem('hospital_visits', JSON.stringify(clinicState.visits));
        localStorage.setItem('pharmacy_inventory', JSON.stringify(clinicState.inventory));
        localStorage.setItem('system_logs', JSON.stringify(clinicState.logs));
    } catch (e) { /* ignore */ }
    clinicRenderAll();
}

async function clinicLog(category, description) {
    if (syncOn) {
        await db(sb.from("apex_logs").insert({ category, description }));
        await loadPortalData();
        return;
    }
    clinicState.logs.unshift({ id: Date.now(), timestamp: new Date().toLocaleString(), category, description });
    clinicSave();
}

function clinicRenderAll() {
    clinicRenderDashboard();
    clinicRenderVisits();
    clinicRenderMeds();
    clinicRenderLogs();
}

function clinicRenderDashboard() {
    document.getElementById('clinicStatVisits').textContent = clinicState.visits.length;
    document.getElementById('clinicStatMeds').textContent = clinicState.inventory.length;
    document.getElementById('clinicStatLow').textContent = clinicState.inventory.filter(m => m.stock <= 5).length;
    document.getElementById('clinicStatLogs').textContent = clinicState.logs.length;
    const body = document.getElementById('clinicRecentLogs');
    const recent = clinicState.logs.slice(0, 5);
    body.innerHTML = recent.length ? recent.map(l =>
        `<tr><td>${clinicEsc(l.timestamp)}</td><td><b>${clinicEsc(l.category)}</b></td><td>${clinicEsc(l.description)}</td></tr>`
    ).join('') : `<tr><td colspan="3" class="clinic-empty">No activity recorded yet.</td></tr>`;
}

function clinicRenderVisits() {
    const body = document.getElementById('clinicVisitsBody');
    body.innerHTML = clinicState.visits.length ? clinicState.visits.map(v => `
        <tr>
            <td>${clinicEsc(v.date)}</td>
            <td><b>${clinicEsc(v.name)}</b></td>
            <td>${clinicEsc(v.age)} Yrs / ${clinicEsc(v.gender)}</td>
            <td>Dr. ${clinicEsc(v.doctor)}</td>
            <td>${clinicEsc(v.diagnosis)}</td>
            <td>${clinicEsc(v.prescription)}</td>
        </tr>`).join('') : `<tr><td colspan="6" class="clinic-empty">No patient visits recorded yet.</td></tr>`;
}

function clinicRenderMeds() {
    const body = document.getElementById('clinicMedsBody');
    body.innerHTML = clinicState.inventory.length ? clinicState.inventory.map(m => {
        const low = m.stock <= 5;
        return `
        <tr>
            <td><b>${clinicEsc(m.name)}</b></td>
            <td>${m.stock} units</td>
            <td>KSh ${m.price.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
            <td><span class="status-badge ${low ? 'status-pending' : 'status-success'}">${low ? 'Low Stock' : 'In Stock'}</span></td>
            <td><button class="action-btn btn-edit" onclick="clinicDispense(${m.id})"><i class="fa fa-hand-holding-medical"></i> Dispense (1)</button></td>
        </tr>`;
    }).join('') : `<tr><td colspan="5" class="clinic-empty">No inventory items available.</td></tr>`;
}

function clinicFilteredLogs() {
    const q = (document.getElementById('clinicLogSearch').value || '').toLowerCase();
    const cat = document.getElementById('clinicLogCategory').value;
    return clinicState.logs.filter(l =>
        (cat === 'ALL' || l.category === cat) &&
        (l.description.toLowerCase().includes(q) || l.timestamp.toLowerCase().includes(q)));
}

function clinicRenderLogs() {
    const body = document.getElementById('clinicLogsBody');
    const logs = clinicFilteredLogs();
    body.innerHTML = logs.length ? logs.map(l =>
        `<tr><td>${clinicEsc(l.timestamp)}</td><td><b>${clinicEsc(l.category)}</b></td><td>${clinicEsc(l.description)}</td></tr>`
    ).join('') : `<tr><td colspan="3" class="clinic-empty">${clinicState.logs.length ? 'No matching history logs found.' : 'No event history logged yet.'}</td></tr>`;
}

async function clinicDispense(id) {
    const med = clinicState.inventory.find(m => m.id === id);
    if (!med) return;
    if (syncOn) {
        try { await db(sb.rpc("apex_dispense", { p_id: id })); } catch (err) { await loadPortalData(); return; }
        await clinicLog('PHARMACY_SALE', `Dispensed 1 unit of ${med.name} for KSh ${med.price.toFixed(2)}.`);
        return;
    }
    if (med.stock > 0) {
        med.stock -= 1;
        clinicLog('PHARMACY_SALE', `Dispensed 1 unit of ${med.name} for KSh ${med.price.toFixed(2)}.`);
    } else {
        alert(`Out of stock! Cannot dispense ${med.name}.`);
    }
}

function clinicExportLogs() {
    if (!clinicState.logs.length) { alert('No history records to export.'); return; }
    const q = v => '"' + String(v).replace(/"/g, '""') + '"';
    const rows = ['ID,Timestamp,Category,Description'].concat(
        clinicState.logs.map(l => [l.id, q(l.timestamp), l.category, q(l.description)].join(',')));
    const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'system_history_log.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(a.href);
}

document.getElementById('clinicVisitForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const g = id => document.getElementById(id).value.trim();
    const visit = {
        id: Date.now(), date: new Date().toLocaleString(),
        name: g('cvName'), age: g('cvAge'), gender: document.getElementById('cvGender').value,
        doctor: g('cvDoctor'), symptoms: g('cvSymptoms'), diagnosis: g('cvDiagnosis'), prescription: g('cvPrescription')
    };
    if (syncOn) {
        try {
            await db(sb.from("apex_visits").insert({ name: visit.name, age: parseInt(visit.age, 10), gender: visit.gender, doctor: visit.doctor, symptoms: visit.symptoms, diagnosis: visit.diagnosis, prescription: visit.prescription }));
        } catch (err) { return; }
    } else {
        clinicState.visits.unshift(visit);
    }
    await clinicLog('PATIENT_VISIT', `Recorded consultation for patient: ${visit.name} (Doctor: Dr. ${visit.doctor})`);
    this.reset();
});

document.getElementById('clinicMedForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('cmName').value.trim();
    const stock = parseInt(document.getElementById('cmStock').value, 10);
    const price = parseFloat(document.getElementById('cmPrice').value);
    const existing = clinicState.inventory.find(m => m.name.toLowerCase() === name.toLowerCase());
    try {
        if (existing) {
            if (syncOn) await db(sb.from("apex_medicines").update({ stock: existing.stock + stock, price }).eq("id", existing.id));
            else { existing.stock += stock; existing.price = price; }
            await clinicLog('INVENTORY', `Updated stock for ${name}. Added +${stock} units.`);
        } else {
            if (syncOn) await db(sb.from("apex_medicines").insert({ name, stock, price }));
            else clinicState.inventory.push({ id: Date.now(), name, stock, price });
            await clinicLog('INVENTORY', `Added new medicine: ${name} with ${stock} initial units at KSh ${price.toFixed(2)}.`);
        }
    } catch (err) { return; }
    this.reset();
});

clinicRenderAll();

/* ===== Supabase sync: login, shared data, realtime ===== */
const sb = (window.supabase && window.supabase.createClient)
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
let syncOn = false;        // true while a staff member is signed in through Supabase
let currentProfile = null; // that staff member's apex_profiles row
let portalProfiles = [];   // all portal users (apex_profiles)
let portalChannel = null, reloadTimer = null;
const ROLE_LABEL = { admin: "Admin", pharmacist: "Pharmacist", assistant: "Pharmacy Assistant" };

async function db(query) {
    const { data, error } = await query;
    if (error) { alert("Sync error: " + error.message); throw error; }
    return data;
}

const mapProduct = r => ({ id: r.id, name: r.name, category: r.category, brand: r.brand, form: r.form, rx: r.rx, rating: r.rating,
    basePrice: Number(r.base_price), discount: Number(r.discount), inStock: r.in_stock, images: r.images });

/* Storefront products (public read) */
async function loadProducts() {
    if (!sb) return;
    const { data, error } = await sb.from("apex_products").select("*").order("id");
    if (error || !data || !data.length) return;
    products.splice(0, products.length, ...data.map(mapProduct));
    renderProducts(products);
    if (syncOn) renderAdminTables();
}

/* Portal data (staff only) */
async function loadPortalData() {
    if (!syncOn) return;
    const [emp, inv, vis, med, logs, profs] = await Promise.all([
        sb.from("apex_employees").select("*").order("id"),
        sb.from("apex_invoices").select("*").order("created_at"),
        sb.from("apex_visits").select("*").order("visit_date", { ascending: false }),
        sb.from("apex_medicines").select("*").order("name"),
        sb.from("apex_logs").select("*").order("created_at", { ascending: false }).limit(500),
        sb.from("apex_profiles").select("*").order("created_at")
    ]);
    const failed = [emp, inv, vis, med, logs, profs].find(r => r.error);
    if (failed) { console.error(failed.error); alert("Could not load synced data: " + failed.error.message + "\nHave you run the setup SQL?"); return; }
    employees.splice(0, employees.length, ...emp.data.map(r => ({ id: r.id, name: r.name, email: r.email, role: r.role, rate: Number(r.rate) })));
    invoices = inv.data.map(r => ({ id: r.id, customer: r.customer, product: r.product, salesRep: r.sales_rep, amount: Number(r.amount), status: r.status }));
    clinicState.visits = vis.data.map(r => ({ id: r.id, date: new Date(r.visit_date).toLocaleString(), name: r.name, age: r.age, gender: r.gender,
        doctor: r.doctor, symptoms: r.symptoms, diagnosis: r.diagnosis, prescription: r.prescription }));
    clinicState.inventory = med.data.map(r => ({ id: r.id, name: r.name, stock: r.stock, price: Number(r.price) }));
    clinicState.logs = logs.data.map(r => ({ id: r.id, timestamp: new Date(r.created_at).toLocaleString(), category: r.category, description: r.description }));
    portalProfiles = profs.data;
    renderAdminTables();
    clinicRenderAll();
    renderPortalUsers();
}

function queueReload() {
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(() => { loadProducts(); loadPortalData(); }, 400);
}

function subscribePortal() {
    if (!sb || portalChannel) return;
    portalChannel = sb.channel("apex-portal");
    ["apex_products", "apex_employees", "apex_invoices", "apex_visits", "apex_medicines", "apex_logs", "apex_profiles"]
        .forEach(t => portalChannel.on("postgres_changes", { event: "*", schema: "public", table: t }, queueReload));
    portalChannel.subscribe();
}

async function portalLogout() {
    try { if (sb && syncOn) await sb.auth.signOut(); } catch (e) { /* ignore */ }
    location.reload();
}

function applyRoleUI() {
    const isAdmin = !syncOn || (currentProfile && currentProfile.role === "admin");
    ["addUserForm", "addEmployeeForm"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = isAdmin ? "" : "none";
    });
    const badge = document.getElementById("syncBadge");
    if (badge) badge.textContent = syncOn ? "● Synced" : "○ Offline (not synced)";
}

/* Staff roster (Settings) */
document.getElementById("addEmployeeForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const emp = {
        name: document.getElementById("empName").value.trim(),
        email: document.getElementById("empEmail").value.trim().toLowerCase(),
        role: document.getElementById("empRole").value,
        rate: parseFloat(document.getElementById("empCommRate").value) || 0
    };
    if (syncOn) {
        try { await db(sb.from("apex_employees").insert(emp)); } catch (err) { return; }
        await loadPortalData();
    } else {
        employees.push(emp);
        renderAdminTables();
    }
    this.reset();
});

/* ===== Portal users (Settings > User Accounts) ===== */
const portalUsers = (function () {   // offline-mode users only
    try { return JSON.parse(localStorage.getItem("apex_portal_users")) || []; } catch (e) { return []; }
})();

function savePortalUsers() {
    try { localStorage.setItem("apex_portal_users", JSON.stringify(portalUsers)); } catch (e) { /* ignore */ }
    renderPortalUsers();
}

function renderPortalUsers() {
    const body = document.getElementById("usersTableBody");
    if (!body) return;
    if (syncOn) {
        const isAdmin = currentProfile && currentProfile.role === "admin";
        body.innerHTML = portalProfiles.length ? portalProfiles.map(u => `
            <tr>
                <td><b>${clinicEsc(u.name || "-")}</b></td>
                <td>${clinicEsc(u.email)}</td>
                <td>${clinicEsc(ROLE_LABEL[u.role] || u.role)}</td>
                <td>${isAdmin && u.id !== currentProfile.id ? `<button type="button" class="action-btn btn-delete" onclick="removePortalUser('${u.id}')"><i class="fa fa-trash"></i> Remove</button>` : ""}</td>
            </tr>`).join("") : `<tr><td colspan="4" class="clinic-empty">No portal users yet.</td></tr>`;
        return;
    }
    body.innerHTML = portalUsers.length ? portalUsers.map((u, i) => `
        <tr>
            <td><b>${clinicEsc(u.name)}</b></td>
            <td>${clinicEsc(u.email)}</td>
            <td>${clinicEsc(u.role)}</td>
            <td><button type="button" class="action-btn btn-delete" onclick="removePortalUser(${i})"><i class="fa fa-trash"></i> Remove</button></td>
        </tr>`).join("") : `<tr><td colspan="4" class="clinic-empty">No extra users added yet.</td></tr>`;
}

async function removePortalUser(ref) {
    if (syncOn) {
        const u = portalProfiles.find(p => p.id === ref);
        if (!u || !confirm("Remove portal access for " + (u.name || u.email) + "?")) return;
        try { await db(sb.from("apex_profiles").delete().eq("id", ref)); } catch (err) { return; }
        await loadPortalData();
        return;
    }
    const u = portalUsers[ref];
    if (!u || !confirm("Remove user " + u.name + "?")) return;
    portalUsers.splice(ref, 1);
    savePortalUsers();
}

document.getElementById("addUserForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim().toLowerCase();
    const password = document.getElementById("userPassword").value;
    const role = document.getElementById("userRole").value;

    if (syncOn) {
        if (!currentProfile || currentProfile.role !== "admin") { alert("Only an admin can add users."); return; }
        const iso = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
            auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false, storageKey: "apex-isolated" }
        });
        const roleKey = role === "Admin" ? "admin" : role === "Pharmacy Assistant" ? "assistant" : "pharmacist";
        const { data, error } = await iso.auth.signUp({ email, password, options: { data: { name } } });
        let existing = false;
        if (error) {
            if (!/already/i.test(error.message)) { alert(error.message); return; }
            existing = true;
        } else if (data.user && data.user.identities && data.user.identities.length === 0) {
            existing = true;
        }
        try { await db(sb.rpc("apex_grant_access", { p_email: email, p_name: name, p_role: roleKey })); } catch (err) { return; }
        await loadPortalData();
        alert(existing
            ? "That email already had a login (maybe from another site), so portal access was granted. They sign in with their existing password."
            : "User added. They can sign in with that email and password.");
        this.reset();
        return;
    }

    if (email === "adminacaciabooks@gmail.com" || portalUsers.some(u => u.email === email)) {
        alert("A user with this email already exists.");
        return;
    }
    portalUsers.push({ name, email, password, role });
    savePortalUsers();
    this.reset();
});

renderPortalUsers();
loadProducts();
if (sb) {
    sb.channel("apex-products")
        .on("postgres_changes", { event: "*", schema: "public", table: "apex_products" }, queueReload)
        .subscribe();
}

/* ===== Appearance (from acacia-inventory): sidebar colour, text colour, font, font size ===== */
/* Acacia Appearance - sidebar colour, sidebar text colour, font and font size.
 * Same feature as the Appearance card in the Developer site, shared by every module.
 *
 * Each site sets, BEFORE loading this file:
 *   window.ACACIA_APPEARANCE = { sidebar: '.sidebar', items: '.sidebar .nav-item' };
 * and puts <div data-acacia-appearance></div> wherever the Appearance card should show.
 * Settings are saved in localStorage ("acacia_appearance") and applied on every page load.
 * The right-hand tools bar (#acxsbBar from acacia-sidebar.js, or Plans' own #rightSidebar) follows the same
 * sidebar colour / text colour / font / font size. Override with window.ACACIA_APPEARANCE.rightbar / rightitems.
 * Anything left unset keeps the site's original look.
 */
(function () {
  var CFG = { sidebar: '#adminContainer .sidebar', items: '#adminContainer .admin-sidebar-menu li' };
  var KEY = "acacia_appearance";
  var SB = CFG.sidebar || ".sidebar";
  var IT = CFG.items || (SB + " button, " + SB + " a, " + SB + " .nav-item");
  var RB = CFG.rightbar || "#acxsbBar, #rightSidebar";
  var RBI = CFG.rightitems || "#acxsbBar button, #rightSidebar button, #rightSidebar a";
  function sel(list, suffix) { return list.split(",").map(function (x) { return x.trim() + (suffix || ""); }).join(","); }
  var PRESETS = [
    ["#0A1615", "#E7ECEB"], ["#0E2B29", "#E7ECEB"], ["#22615D", "#F1F7F6"], ["#1e3a8a", "#E8EEFF"],
    ["#4c1d95", "#F1E9FF"], ["#7f1d1d", "#FFEDED"], ["#374151", "#F3F4F6"], ["#ffffff", "#0e2b29"]
  ];
  var FONTS = [
    ["Default", [["", "Site default"]]],
    ["Sans-serif (web fonts)", [
      ["'Inter', system-ui, sans-serif", "Inter"], ["'Roboto', system-ui, sans-serif", "Roboto"], ["'Open Sans', system-ui, sans-serif", "Open Sans"],
      ["'Lato', system-ui, sans-serif", "Lato"], ["'Poppins', system-ui, sans-serif", "Poppins"], ["'Montserrat', system-ui, sans-serif", "Montserrat"],
      ["'Nunito', system-ui, sans-serif", "Nunito"], ["'Source Sans 3', system-ui, sans-serif", "Source Sans Pro"], ["'Raleway', system-ui, sans-serif", "Raleway"],
      ["'Work Sans', system-ui, sans-serif", "Work Sans"], ["'Rubik', system-ui, sans-serif", "Rubik"], ["'Mulish', system-ui, sans-serif", "Mulish"],
      ["'Quicksand', system-ui, sans-serif", "Quicksand"], ["'Karla', system-ui, sans-serif", "Karla"], ["'DM Sans', system-ui, sans-serif", "DM Sans"],
      ["'Manrope', system-ui, sans-serif", "Manrope"], ["'Josefin Sans', system-ui, sans-serif", "Josefin Sans"], ["'Oswald', system-ui, sans-serif", "Oswald"],
      ["'PT Sans', system-ui, sans-serif", "PT Sans"], ["'Ubuntu', system-ui, sans-serif", "Ubuntu"], ["'Fira Sans', system-ui, sans-serif", "Fira Sans"],
      ["'Noto Sans', system-ui, sans-serif", "Noto Sans"], ["'Space Grotesk', system-ui, sans-serif", "Space Grotesk"], ["'Barlow', system-ui, sans-serif", "Barlow"],
      ["'Cabin', system-ui, sans-serif", "Cabin"]]],
    ["Serif (web fonts)", [
      ["'Merriweather', Georgia, serif", "Merriweather"], ["'Playfair Display', Georgia, serif", "Playfair Display"], ["'Crimson Text', Georgia, serif", "Crimson Text"],
      ["'Lora', Georgia, serif", "Lora"], ["'EB Garamond', Georgia, serif", "EB Garamond"], ["'Libre Baskerville', Georgia, serif", "Libre Baskerville"],
      ["'PT Serif', Georgia, serif", "PT Serif"]]],
    ["Monospace (web fonts)", [
      ["'Roboto Mono', ui-monospace, 'Courier New', monospace", "Roboto Mono"], ["'JetBrains Mono', monospace", "JetBrains Mono"],
      ["'Fira Code', monospace", "Fira Code"], ["'Source Code Pro', monospace", "Source Code Pro"]]],
    ["System fonts", [
      ["Cambria, 'Hoefler Text', 'Liberation Serif', Georgia, serif", "Cambria"], ["Georgia, 'Times New Roman', serif", "Georgia"], ["'Times New Roman', Times, serif", "Times New Roman"],
      ["'Palatino Linotype', Palatino, serif", "Palatino"], ["Garamond, serif", "Garamond"], ["Arial, Helvetica, sans-serif", "Arial"],
      ["Verdana, Geneva, sans-serif", "Verdana"], ["Tahoma, Geneva, sans-serif", "Tahoma"], ["'Trebuchet MS', sans-serif", "Trebuchet MS"],
      ["'Segoe UI', Roboto, sans-serif", "Segoe UI"], ["Calibri, Candara, sans-serif", "Calibri"], ["system-ui, -apple-system, sans-serif", "System default"],
      ["'Courier New', ui-monospace, monospace", "Courier New"]]]
  ];
  var SIZES = [["", "Site default"], ["0.7rem", "Extra small"], ["0.8rem", "Small"], ["1rem", "Large"], ["1.125rem", "Extra large"], ["1.25rem", "Huge"]];
  var WEBFONT_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600;700&family=Lato:wght@400;700&family=Poppins:wght@400;500;600&family=Montserrat:wght@400;500;600&family=Nunito:wght@400;600;700&family=Source+Sans+3:wght@400;600&family=Raleway:wght@400;500;600&family=Work+Sans:wght@400;500;600&family=Rubik:wght@400;500;600&family=Mulish:wght@400;600;700&family=Quicksand:wght@400;500;600&family=Karla:wght@400;500;700&family=DM+Sans:wght@400;500;700&family=Manrope:wght@400;500;700&family=Josefin+Sans:wght@400;600&family=Oswald:wght@400;500&family=PT+Sans:wght@400;700&family=Ubuntu:wght@400;500;700&family=Fira+Sans:wght@400;500;600&family=Noto+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Barlow:wght@400;500;600&family=Cabin:wght@400;500;600&family=Merriweather:wght@400;700&family=Playfair+Display:wght@400;600&family=Crimson+Text:wght@400;600&family=Lora:wght@400;600&family=EB+Garamond:wght@400;500;600&family=Libre+Baskerville:wght@400;700&family=PT+Serif:wght@400;700&family=Roboto+Mono:wght@400;500&family=JetBrains+Mono:wght@400;600&family=Fira+Code:wght@400;500&family=Source+Code+Pro:wght@400;600&display=swap";

  function get() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }

  function loadWebFont(font) {
    if (!font || /^(Georgia|'Times|'Palatino|Garamond|Cambria|Arial|Verdana|Tahoma|'Trebuchet|'Segoe|Calibri|system-ui|'Courier)/.test(font)) return;
    if (document.getElementById("acap-fonts")) return;
    var l = document.createElement("link");
    l.id = "acap-fonts"; l.rel = "stylesheet"; l.href = WEBFONT_URL;
    document.head.appendChild(l);
  }

  /* ---------- apply ---------- */
  function css(a) {
    var out = [];
    var bg = a.sbBg, tx = a.sbText;
    if (bg && !tx) {
      var m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(bg);
      if (m) { var L = (0.299 * parseInt(m[1], 16) + 0.587 * parseInt(m[2], 16) + 0.114 * parseInt(m[3], 16)) / 255; tx = L > 0.6 ? "#0e2b29" : "#f3f6f5"; }
    }
    if (bg) out.push(SB + "," + RB + "{background:" + bg + " !important;}");
    if (tx) {
      out.push(SB + "," + SB + " *:not(svg):not(svg *){color:" + tx + " !important;}");
      out.push(RB.split(",").map(function (x) { x = x.trim(); return x + "," + x + " *:not(svg):not(svg *):not(#acxsbBadge)"; }).join(",") + "{color:" + tx + " !important;}");
      out.push(SB + " .disabled{opacity:.5;}");
      out.push(sel(RBI) + "{background:transparent !important;}");
      out.push(sel(RBI, ":hover") + "," + sel(RBI, ".on") + "{background:color-mix(in srgb," + tx + " 18%,transparent) !important;}");
      out.push(IT + "{background:transparent !important;}");
      out.push(IT.split(",").map(function (s) { return s.trim() + ":hover"; }).join(",") + "{background:color-mix(in srgb," + tx + " 14%,transparent) !important;}");
      out.push(IT.split(",").map(function (s) { s = s.trim(); return s + ".active," + s + ".sb-active," + s + ".active-admin-tab"; }).join(",") + "{background:color-mix(in srgb," + tx + " 24%,transparent) !important;}");
    } else if (bg) {
      /* background changed but text left alone: keep a readable default */
    }
    if (a.font) out.push("body,body *:not(i):not(.fa):not(svg):not(svg *){font-family:" + a.font + " !important;}");
    if (a.fs) {
      out.push("body p,body td,body th,body li,body label,body input,body select,body textarea,body button,body a,body small," + SB + " *:not(svg):not(svg *)," + RB.split(",").map(function (x) { return x.trim() + " *:not(svg):not(svg *)"; }).join(",") + "{font-size:" + a.fs + " !important;}");
    }
    return out.join("\n");
  }
  function apply() {
    var a = get();
    var st = document.getElementById("acap-style");
    if (!st) { st = document.createElement("style"); st.id = "acap-style"; (document.head || document.documentElement).appendChild(st); }
    st.textContent = css(a);
    if (a.font) loadWebFont(a.font);
    syncControls();
  }

  /* ---------- UI ---------- */
  function toHex(c) {
    var m = /rgba?\((\d+)[ ,]+(\d+)[ ,]+(\d+)/.exec(c || "");
    if (!m) return null;
    return "#" + [m[1], m[2], m[3]].map(function (n) { return ("0" + (+n).toString(16)).slice(-2); }).join("");
  }
  function siteDefaults() {
    var d = { bg: "#0a1615", text: "#e7eceb" };
    try {
      var s = document.querySelector(SB.split(",")[0]);
      if (s) {
        /* temporarily read the original look: computed values already include overrides only if set */
        var cs = getComputedStyle(s);
        d.bg = toHex(cs.backgroundColor) || d.bg;
        d.text = toHex(cs.color) || d.text;
        var it = document.querySelector(IT.split(",")[0]);
        if (it) d.text = toHex(getComputedStyle(it).color) || d.text;
      }
    } catch (e) {}
    return d;
  }
  function esc(s) { return String(s).replace(/"/g, "&quot;"); }
  function cardHTML() {
    var fonts = FONTS.map(function (g) {
      return '<optgroup label="' + g[0] + '">' + g[1].map(function (o) { return '<option value="' + esc(o[0]) + '">' + o[1] + "</option>"; }).join("") + "</optgroup>";
    }).join("");
    var sizes = SIZES.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + "</option>"; }).join("");
    var sw = PRESETS.map(function (p, i) { return '<button type="button" class="acap-sw" data-acap-preset="' + i + '" title="' + p[0] + '" style="background:' + p[0] + '"></button>'; }).join("");
    return '' +
      '<div class="acap-card">' +
      '<div class="acap-head"><h3>🎨 Appearance</h3><span class="acap-tag">Theme</span></div>' +
      '<div class="acap-body">' +
      '<div><label class="acap-l">Sidebar colour</label><div class="acap-row"><input type="color" data-acap="sbBg"><span class="acap-v" data-acap-val="sbBg"></span></div><div class="acap-sws">' + sw + '</div></div>' +
      '<div><label class="acap-l">Sidebar text colour</label><div class="acap-row"><input type="color" data-acap="sbText"><span class="acap-v" data-acap-val="sbText"></span></div></div>' +
      '<div><label class="acap-l">Font</label><select data-acap="font">' + fonts + '</select></div>' +
      '<div><label class="acap-l">Font size</label><select data-acap="fs">' + sizes + '</select></div>' +
      '<button type="button" class="acap-reset" data-acap-reset>Reset appearance</button>' +
      '<p class="acap-note">Changes apply instantly and are remembered on this device.</p>' +
      '</div></div>';
  }
  function syncControls() {
    var a = get(), d = null;
    document.querySelectorAll("[data-acap]").forEach(function (el) {
      var k = el.getAttribute("data-acap"), v = a[k];
      if (el.type === "color") {
        if (!v) { d = d || siteDefaults(); v = k === "sbBg" ? d.bg : d.text; }
        el.value = v;
      } else { el.value = v || ""; }
    });
    document.querySelectorAll("[data-acap-val]").forEach(function (el) {
      var k = el.getAttribute("data-acap-val");
      el.textContent = a[k] || "site default";
    });
  }
  function mount() {
    document.querySelectorAll("[data-acacia-appearance]:not([data-acap-ready])").forEach(function (el) {
      el.setAttribute("data-acap-ready", "1");
      el.innerHTML = cardHTML();
    });
    syncControls();
  }
  function setKey(k, v) {
    var a = get();
    if (v) a[k] = v; else delete a[k];
    save(a); apply();
  }

  document.addEventListener("input", function (e) {
    var el = e.target; if (!el || !el.getAttribute) return;
    var k = el.getAttribute("data-acap");
    if (k && el.type === "color") setKey(k, el.value);
  });
  document.addEventListener("change", function (e) {
    var el = e.target; if (!el || !el.getAttribute) return;
    var k = el.getAttribute("data-acap");
    if (k && el.tagName === "SELECT") setKey(k, el.value);
  });
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-acap-preset],[data-acap-reset]") : null;
    if (!t) return;
    if (t.hasAttribute("data-acap-reset")) { try { localStorage.removeItem(KEY); } catch (x) {} apply(); return; }
    var p = PRESETS[+t.getAttribute("data-acap-preset")];
    var a = get(); a.sbBg = p[0]; a.sbText = p[1]; save(a); apply();
  });

  /* ---------- styles for the card (neutral, works on any site/theme) ---------- */
  var base = document.createElement("style");
  base.id = "acap-base";
  base.textContent =
    ".acap-card{border:1px solid rgba(128,128,128,.28);border-radius:10px;padding:18px 20px;max-width:560px;background:transparent;color:inherit;margin-bottom:16px}" +
    ".acap-head{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(128,128,128,.22);padding-bottom:10px;margin-bottom:14px}" +
    ".acap-head h3{margin:0;font-size:15px;font-weight:700}" +
    ".acap-tag{font-size:11px;padding:2px 8px;border-radius:5px;background:rgba(128,128,128,.16)}" +
    ".acap-body{display:flex;flex-direction:column;gap:14px}" +
    ".acap-l{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;opacity:.7;margin-bottom:5px}" +
    ".acap-row{display:flex;align-items:center;gap:10px}" +
    ".acap-row input[type=color]{width:56px;height:36px;padding:2px;border:1px solid rgba(128,128,128,.4);border-radius:6px;background:transparent;cursor:pointer}" +
    ".acap-v{font-size:12px;opacity:.65}" +
    ".acap-sws{display:flex;flex-wrap:wrap;gap:7px;margin-top:8px}" +
    ".acap-sw{width:26px;height:26px;border-radius:50%;border:2px solid rgba(128,128,128,.45);padding:0;cursor:pointer}" +
    ".acap-sw:hover{transform:scale(1.12)}" +
    ".acap-card select{width:100%;padding:8px 10px;border:1px solid rgba(128,128,128,.4);border-radius:7px;background:transparent;color:inherit;font-size:13px}" +
    ".acap-card select option,.acap-card select optgroup{color:#222;background:#fff}" +
    ".acap-reset{width:100%;padding:9px 12px;border:1px solid rgba(128,128,128,.45);border-radius:7px;background:transparent;color:inherit;font-size:13px;cursor:pointer}" +
    ".acap-reset:hover{background:rgba(128,128,128,.12)}" +
    ".acap-note{margin:0;font-size:11.5px;opacity:.6}";
  (document.head || document.documentElement).appendChild(base);

  /* ---------- boot ---------- */
  apply();
  function boot() {
    mount(); apply();
    try {
      new MutationObserver(function () {
        if (document.querySelector("[data-acacia-appearance]:not([data-acap-ready])")) mount();
      }).observe(document.body, { childList: true, subtree: true });
    } catch (e) {}
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();

  window.AcaciaAppearance = { apply: apply, mount: mount, reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} apply(); } };
})();

