export interface LeadFormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentOccupation: string;
  childName: string;
  childAge: string;
  childGender: string;
  concerns: string[];
  otherConcern: string;
  situationDescription: string;
  desiredOutcome: string;
  preferredConsultation: string;
  preferredContactMethod: string;
  preferredTime: string;
  consentAccuracy: boolean;
  consentRequestOnly: boolean;
  consentContact: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  tag?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CorePillar {
  title: string;
  description: string;
  iconName: string;
}
