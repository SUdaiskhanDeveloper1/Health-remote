"use client";
import { Card, CardBody, Checkbox, Heading, Stack } from '@chakra-ui/react';
export default function MedicationReminderCard(){return <Card bg="white"><CardBody><Heading size="md" mb={4}>Medication Reminders</Heading><Stack><Checkbox defaultChecked>Lisinopril · 8:00 AM</Checkbox><Checkbox>Metformin · 6:00 PM</Checkbox><Checkbox>Weekly care check-in</Checkbox></Stack></CardBody></Card>}
