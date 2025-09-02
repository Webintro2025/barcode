// No 'use client' here; this must be a server component for metadata export
import metadata from './metadata';
export { metadata };

import ContactClient from './ContactClient';

export default function Contact() {
  return <ContactClient />;
}