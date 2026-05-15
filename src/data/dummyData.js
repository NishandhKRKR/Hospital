import { HeartPulse, Brain, Bone, Baby, Syringe, Ambulance, Stethoscope, Microscope } from 'lucide-react';

export const statsData = [
  { id: 1, label: 'Expert Doctors', value: 150, suffix: '+' },
  { id: 2, label: 'Departments', value: 25, suffix: '' },
  { id: 3, label: 'Satisfied Patients', value: 50, suffix: 'k+' },
  { id: 4, label: 'Ambulances', value: 40, suffix: '' },
];

export const departmentsData = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: HeartPulse,
    description: 'Advanced heart care with state-of-the-art technology.',
    treatments: ['ECG', 'Angioplasty', 'Heart Bypass', 'Pacemaker Implantation'],
    specialists: 12,
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: Brain,
    description: 'Comprehensive care for brain and nervous system disorders.',
    treatments: ['Brain Surgery', 'Stroke Management', 'Epilepsy Treatment'],
    specialists: 8,
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    description: 'Expert care for bones, joints, ligaments, and muscles.',
    treatments: ['Joint Replacement', 'Sports Injuries', 'Spine Surgery'],
    specialists: 15,
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    description: 'Compassionate healthcare for infants, children, and adolescents.',
    treatments: ['Vaccination', 'Child Psychology', 'Neonatal Care'],
    specialists: 10,
  },
  {
    id: 'oncology',
    name: 'Oncology',
    icon: Syringe,
    description: 'Pioneering cancer treatments and personalized care.',
    treatments: ['Chemotherapy', 'Radiation Therapy', 'Tumor Surgery'],
    specialists: 14,
  },
  {
    id: 'emergency',
    name: 'Emergency Care',
    icon: Ambulance,
    description: '24/7 critical care and trauma center.',
    treatments: ['Trauma Care', 'Poisoning', 'Cardiac Arrest'],
    specialists: 20,
  },
];

const doctorImages = {
  male: ['/images/3d_doctor_male.png'],
  female: ['/images/3d_doctor_female.png']
};

const firstNames = ['James', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'Robert', 'Lisa', 'William', 'Karen', 'Richard', 'Nancy', 'Joseph', 'Betty', 'Thomas', 'Margaret'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson'];

let doctorIdCounter = 1;
export const doctorsData = departmentsData.flatMap(dept => {
  const count = dept.specialists;
  return Array.from({ length: count }).map((_, i) => {
    // 50% chance for male or female
    const isMale = Math.random() > 0.5;
    
    // Select name array and image array based on gender
    const namesArray = isMale ? firstNames.slice(0, 7).concat(['William', 'Richard', 'Joseph', 'Thomas']) : firstNames.slice(7).concat(['Sarah', 'Emily', 'Jessica', 'Nancy']);
    
    // In our simplified list, we'll just pick randomly from all names to avoid complex logic if we don't have separate arrays initially, but since we want image to somewhat match name if possible, let's just assign them.
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const experience = Math.floor(Math.random() * 20) + 5;
    
    // Simple heuristic: if name ends with a, y, e, or is in known female names, it's female
    const knownFemale = ['Sarah', 'Emily', 'Jessica', 'Lisa', 'Karen', 'Nancy', 'Betty', 'Margaret'];
    const isFemaleName = knownFemale.includes(firstName);
    const image = isFemaleName ? doctorImages.female[0] : doctorImages.male[0];
    
    return {
      id: doctorIdCounter++,
      name: `Dr. ${firstName} ${lastName}`,
      specialty: dept.name === 'Emergency Care' ? 'Emergency Physician' : `${dept.name.slice(0, -1)} Specialist`,
      experience: `${experience}+ Years`,
      image: image,
      availability: 'Mon - Fri, 9:00 AM - 5:00 PM',
      department: dept.id,
    };
  });
});

export const testimonialsData = [
  {
    id: 1,
    name: 'John Davis',
    text: 'The care I received at MedCare Prime was exceptional. The doctors were attentive and the facilities are world-class.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    text: 'My daughter’s pediatric team went above and beyond. We felt safe and incredibly well cared for throughout her stay.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Smith',
    text: 'Efficient emergency services. They saved my life during a heart attack. I am forever grateful to the cardiology team.',
    rating: 5,
  },
];

export const faqData = [
  {
    question: 'Do you accept international insurance?',
    answer: 'Yes, we partner with most major international health insurance providers. Please contact our billing department for specific inquiries.',
  },
  {
    question: 'What are the visiting hours?',
    answer: 'General visiting hours are from 10:00 AM to 8:00 PM. ICU visiting hours are restricted to immediate family members for limited periods.',
  },
  {
    question: 'Can I book an appointment online?',
    answer: 'Absolutely. You can use our online appointment portal to select your preferred doctor and time slot instantly.',
  },
  {
    question: 'Is there parking available on-site?',
    answer: 'Yes, we offer a 24/7 multi-level parking facility with valet services available at the main entrance.',
  },
];
