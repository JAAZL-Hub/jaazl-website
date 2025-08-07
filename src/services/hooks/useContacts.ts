import { useState, useEffect } from 'react';
import { Contact, LocalizedContent } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { contacts as contactsData } from '../api/mockData/contacts';

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent | undefined, language: string): string => {
  if (!content) return '';
  return language === 'en' ? content.en : content.ar;
};

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Use mock data directly
        setContacts(contactsData);
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
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Filter mock data by type
        const filteredData = contactsData.filter(contact => contact.type === type);
        setContacts(filteredData);
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
    localizedLabel: contact.label ? getLocalizedContent(contact.label, language) : ''
  };
}
