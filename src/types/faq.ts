export type faqOptions = {
  type: 'General' | 'Payments' | 'Returns' | 'Refunds';
};
export interface FAQProp {
  type?: string | faqOptions['type'];
  question: string;
  answer: string;
}

export interface Categories {
  Returns: FAQProp[];
  Refunds: FAQProp[];
  General: FAQProp[];
  Payments: FAQProp[];
}

export type Comments = {
  name: string;
  review: string;
};
