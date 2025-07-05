import { useState, useEffect } from 'react';
import { cmsService } from '../api/cmsService';
import { Contact } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getContacts();
        setContacts(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch contacts'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { contacts, isLoading, error };
}

export function useContactsByType(type: Contact['type']) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getContactsByType(type);
        setContacts(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`Failed to fetch ${type} contacts`));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [type]);
  
  return { contacts, isLoading, error };
}

// Helper hook to get localized contact content
export function useLocalizedContactContent(contact: Contact | null) {
  const { language } = useLanguage();
  
  if (!contact) return null;
  
  return {
    ...contact,
    localizedLabel: cmsService.getLocalizedContent(contact.label, language)
  };
}
