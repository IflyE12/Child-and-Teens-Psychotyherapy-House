import { Testimonial, ServiceItem, CorePillar } from '../types';

export const WHATSAPP_NUMBER = '08073327207';
export const WHATSAPP_INTL = '2348073327207';

export const TRUST_BADGES = [
  'Confidential & Professional Care',
  'Evidence-Based Psychological Support',
  'Child & Teen Mental Health Specialist',
  'Parent-Centred Guidance',
  'Safe & Welcoming Environment',
  'Personalized Care Plans',
];

export const AGE_OPTIONS = [
  '2–5 Years',
  '6–9 Years',
  '10–12 Years',
  '13–15 Years',
  '16–19 Years',
];

export const GENDER_OPTIONS = ['Male', 'Female', 'Prefer not to say'];

export const CONCERNS_OPTIONS = [
  'Behavioural Challenges',
  'Academic or Learning Difficulties',
  'Anxiety or Excessive Worry',
  'Emotional Outbursts',
  'Low Self-Esteem',
  'Social Skills or Friendship Challenges',
  'Family or Parenting Concerns',
  'Bullying',
  'Trauma or Grief',
  'Anger Management',
  'Attention or Concentration Difficulties',
];

export const CONSULTATION_TYPES = [
  'Physical Appointment',
  'Virtual Consultation',
  'Either Option',
];

export const CONTACT_METHODS = ['Phone Call', 'Email', 'WhatsApp'];

export const CONSULTATION_TIMES = ['Morning', 'Afternoon', 'Evening'];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'behavioural',
    title: 'Behavioural Challenges',
    description: 'Guiding children through emotional outbursts, defiance, and defiance triggers toward positive self-regulation.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'academic',
    title: 'Academic & Learning Difficulties',
    description: 'Uncovering underlying anxieties or focus barriers affecting school performance and learning enjoyment.',
    iconName: 'GraduationCap',
  },
  {
    id: 'anxiety',
    title: 'Anxiety and Excessive Worry',
    description: 'Equipping young minds with practical grounding techniques to manage stress, panic, and overwhelming thoughts.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'emotional',
    title: 'Emotional Regulation',
    description: 'Helping children identify, articulate, and process intense feelings in healthy, constructive ways.',
    iconName: 'Smile',
  },
  {
    id: 'self-esteem',
    title: 'Low Self-Esteem & Confidence',
    description: 'Building strong inner confidence and self-worth so young people believe in their own capabilities.',
    iconName: 'Sparkles',
  },
  {
    id: 'social',
    title: 'Social Skills & Peer Relationships',
    description: 'Developing communication, empathy, and boundary-setting skills for meaningful, supportive friendships.',
    iconName: 'Users',
  },
  {
    id: 'parenting',
    title: 'Family & Parenting Support',
    description: 'Partnering with parents to create calmer household dynamics and consistent emotional support at home.',
    iconName: 'Home',
  },
  {
    id: 'stress',
    title: 'Stress Management',
    description: 'Teaching children and teens healthy coping strategies for academic pressure, transitions, and daily life.',
    iconName: 'Sun',
  },
  {
    id: 'teen',
    title: 'Teenage Emotional & Behavioural Concerns',
    description: 'Navigating identity, independence, mood swings, and peer pressure with non-judgmental professional care.',
    iconName: 'Compass',
  },
  {
    id: 'growth',
    title: 'Personal Growth & Emotional Well-being',
    description: 'Nurturing holistic resilience and self-awareness for long-term psychological strength and happiness.',
    iconName: 'TrendingUp',
  },
];

export const WHY_CHOOSE_US: CorePillar[] = [
  {
    title: 'Compassionate Care',
    description: 'Your child will be welcomed into a safe, warm, and confidential environment where they can feel comfortable expressing themselves.',
    iconName: 'Heart',
  },
  {
    title: 'Evidence-Based Therapy',
    description: 'Our approach combines professional psychological expertise with proven therapeutic techniques designed to achieve meaningful, lasting results.',
    iconName: 'Award',
  },
  {
    title: 'Child-Centred Approach',
    description: 'We understand that every child learns, communicates, and grows differently. That’s why every session is personalized to their unique personality and needs.',
    iconName: 'UserCheck',
  },
  {
    title: 'Partnership with Parents',
    description: 'Healing doesn’t happen in isolation. We work closely with parents, providing guidance and practical strategies that reinforce progress at home.',
    iconName: 'UsersTwosome',
  },
  {
    title: 'A Focus on Long-Term Success',
    description: 'Our goal isn’t simply to solve today’s challenges—we help children build lifelong emotional resilience, healthy relationships, confidence, and the skills they need to succeed throughout life.',
    iconName: 'Target',
  },
];

export const IMAGINE_DIFFERENCE = [
  'Feeling happier and emotionally secure.',
  'Managing emotions with confidence.',
  'Building healthy friendships.',
  'Performing better academically.',
  'Communicating more effectively.',
  'Becoming resilient in the face of life’s challenges.',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "The support my son received has been life-changing. He's more confident, calm, and his grades have improved tremendously. We are so grateful!",
    author: 'Mrs. Adeola Johnson',
    role: 'Mother of 10-year-old Daniel',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Parent Experience',
  },
  {
    id: '2',
    quote: 'My daughter used to struggle with anxiety and would withdraw from people. Therapy helped her open up, express herself, and build real friendships.',
    author: 'Mr. Tunde Bakare',
    role: 'Father of 13-year-old Zara',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Anxiety & Social Support',
  },
  {
    id: '3',
    quote: "I've learned how to manage my emotions and speak up for myself. I feel happier and more confident now. I look forward to every session!",
    author: 'Jessica, 15',
    role: 'Teen Client',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Teen Growth',
  },
  {
    id: '4',
    quote: "My 3-year-old was having severe tantrums and difficulty adjusting to preschool. The strategies and support we received made a huge difference. She's calmer, happier, and thriving!",
    author: 'Mrs. Blessing Ibekwe',
    role: 'Mother of 3-year-old Nia',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Early Childhood',
  },
  {
    id: '5',
    quote: 'Our 2-year-old had speech delay and was very withdrawn. With the guidance and therapy we received, he is now communicating more and engaging with everyone around him. We are so thankful!',
    author: 'Mr. and Mrs. Okonkwo',
    role: 'Parents of 2-year-old Ifeanyi',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Speech & Social Development',
  },
  {
    id: '6',
    quote: 'The guidance I received as a parent has been priceless. I now understand how to support my child better and our home is more peaceful.',
    author: 'Mrs. Chidinma Okafor',
    role: 'Mother of 8-year-old Chisom',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Parenting Guidance',
  },
  {
    id: '7',
    quote: 'Before, I used to get angry easily and had problems in school. Now, I can focus better and handle things in a better way.',
    author: 'David, 14',
    role: 'Teen Client',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250&h=250',
    tag: 'Anger & Focus',
  },
];
