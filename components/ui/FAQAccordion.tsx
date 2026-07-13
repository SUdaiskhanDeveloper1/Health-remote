import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
export default function FAQAccordion() {
  const faqs = [
  [
    "How do I schedule an appointment?",
    "You can schedule an appointment online through our patient portal or by contacting our support team during business hours.",
  ],
  [
    "Can I reschedule or cancel my appointment?",
    "Yes. You can reschedule or cancel your appointment through your patient portal or by contacting our clinic in advance.",
  ],
  [
    "Do you offer telehealth appointments?",
    "Yes. Eligible patients can consult with healthcare providers securely through virtual video appointments.",
  ],
  [
    "How can I access my medical records?",
    "Patients can securely view their medical records, prescriptions, and visit history through the patient portal.",
  ],
  [
    "Will my health information remain private?",
    "Yes. We use industry-standard security practices to protect patient information and maintain data confidentiality.",
  ],
  [
    "Can I request prescription refills online?",
    "Yes. Prescription refill requests can be submitted through the patient portal and are reviewed by your healthcare provider.",
  ],
  [
    "What insurance plans do you accept?",
    "We accept a wide range of insurance providers. Please contact our office or check your patient portal for the latest list of accepted plans.",
  ],
  [
    "How can I contact my healthcare provider?",
    "You can send secure messages through the patient portal or contact the clinic directly during office hours.",
  ],
  [
    "What should I bring to my first appointment?",
    "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records or referral documents.",
  ],
  [
    "What should I do in a medical emergency?",
    "If you are experiencing a life-threatening medical emergency, call your local emergency services or go to the nearest emergency department immediately.",
  ],
];
  return (
    <Accordion allowToggle>
      {faqs.map(([q, a]) => (
        <AccordionItem key={q} borderColor="brand.border">
          <AccordionButton py={5}>
            <Box flex="1" textAlign="left" fontWeight="700">
              {q}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel color="brand.muted">{a}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
