import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Field({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}

function SuccessState({ message }: { message: string }) {
  return (
    <div className="success-state" role="status">
      <CheckCircle2 className="size-9 text-accent" />
      <div><h3 className="font-semibold">Message received</h3><p className="mt-1 text-sm text-muted-foreground">{message}</p></div>
    </div>
  );
}

function useSubmission() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  };
  return { submitted, submit };
}

export function BookingForm({ mode }: { mode: "guardian" | "self" }) {
  const { submitted, submit } = useSubmission();
  if (submitted) return <SuccessState message="Thank you for contacting EduHub42. Our team will get back to you as soon as possible." />;
  const guardian = mode === "guardian";
  return (
    <form onSubmit={submit} className="form-grid">
      <Field id={`${mode}-name`} label={guardian ? "Parent/Guardian Full Name" : "Full Name"}><Input id={`${mode}-name`} name="name" autoComplete="name" required minLength={2} /></Field>
      <Field id={`${mode}-phone`} label="Phone Number"><Input id={`${mode}-phone`} name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{8,}" /></Field>
      <Field id={`${mode}-email`} label="Email Address"><Input id={`${mode}-email`} name="email" type="email" autoComplete="email" required /></Field>
      {guardian && <Field id="learner-name" label="Learner's Name"><Input id="learner-name" name="learnerName" required minLength={2} /></Field>}
      {!guardian && <Field id="institution" label="School/Institution"><Input id="institution" name="institution" required /></Field>}
      <Field id={`${mode}-level`} label="Grade/Level of Study"><Input id={`${mode}-level`} name="level" required /></Field>
      <Field id={`${mode}-subjects`} label="Subject(s) Required"><Input id={`${mode}-subjects`} name="subjects" required /></Field>
      <Field id={`${mode}-format`} label="Preferred Tutoring Format">
        <select id={`${mode}-format`} name="format" className="form-select" required defaultValue="">
          <option value="" disabled>Select a format</option><option>Online</option><option>In Person</option><option>Either</option>
        </select>
      </Field>
      <div className="sm:col-span-2"><Field id={`${mode}-information`} label="Additional Information"><Textarea id={`${mode}-information`} name="information" rows={4} /></Field></div>
      <Button type="submit" size="lg" className="sm:col-span-2 sm:w-fit">Send Booking Request</Button>
    </form>
  );
}

export function ContactForm({ partnership = false }: { partnership?: boolean }) {
  const { submitted, submit } = useSubmission();
  if (submitted) return <SuccessState message="Thank you for contacting EduHub42. Our team will get back to you as soon as possible." />;
  return (
    <form onSubmit={submit} className="form-grid">
      <Field id="contact-name" label="Name"><Input id="contact-name" name="name" autoComplete="name" required /></Field>
      <Field id="contact-email" label="Email"><Input id="contact-email" name="email" type="email" autoComplete="email" required /></Field>
      <Field id="contact-phone" label="Phone"><Input id="contact-phone" name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{8,}" /></Field>
      <Field id="contact-subject" label="Subject"><Input id="contact-subject" name="subject" defaultValue={partnership ? "Partnership Enquiry" : ""} required /></Field>
      <div className="sm:col-span-2"><Field id="contact-message" label="Message"><Textarea id="contact-message" name="message" rows={6} minLength={10} required /></Field></div>
      <Button type="submit" size="lg" className="sm:col-span-2 sm:w-fit">Send Message</Button>
    </form>
  );
}

export function CareerForm({ position }: { position: string }) {
  const { submitted, submit } = useSubmission();
  if (submitted) return <SuccessState message="Thank you for your interest in EduHub42. Our team will review your application and contact you if there is a suitable next step." />;
  return (
    <form onSubmit={submit} className="form-grid">
      <Field id="career-name" label="Full Name"><Input id="career-name" name="name" autoComplete="name" required /></Field>
      <Field id="career-email" label="Email Address"><Input id="career-email" name="email" type="email" autoComplete="email" required /></Field>
      <Field id="career-phone" label="Phone Number"><Input id="career-phone" name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{8,}" /></Field>
      <Field id="career-position" label="Position Applying For"><Input id="career-position" name="position" value={position} readOnly /></Field>
      <div className="sm:col-span-2"><Field id="career-motivation" label="Short Motivation"><Textarea id="career-motivation" name="motivation" rows={5} minLength={40} required /></Field></div>
      <Field id="career-cv" label="CV Upload"><div className="file-field"><Upload className="size-4" /><Input id="career-cv" name="cv" type="file" accept=".pdf,.doc,.docx" required /></div></Field>
      <Field id="career-support" label="Supporting Document (optional)"><div className="file-field"><Upload className="size-4" /><Input id="career-support" name="support" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" /></div></Field>
      <Button type="submit" size="lg" className="sm:col-span-2 sm:w-fit">Submit Application</Button>
    </form>
  );
}