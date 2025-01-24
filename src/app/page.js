'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LanguageLoader() {
  const router = useRouter();
  const [loadingText, setLoadingText] = useState('Carregando...');

  useEffect(() => {
    const supportedLangs = ['pt', 'es', 'en'];
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    
    const loadingTexts = {
      pt: 'Carregando...',
      es: 'Cargando...',
      en: 'Loading...'
    };

    const selectedLang = supportedLangs.includes(browserLang) 
      ? browserLang 
      : 'pt';

    setLoadingText(loadingTexts[selectedLang]);
    router.push(`/${selectedLang}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#172554] via-[#3c99d9] to-[#74b3db] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-16 h-16 border-t-4 border-white rounded-full mx-auto mb-4"></div>
        <p className="text-white text-xl">{loadingText}</p>
      </div>
    </div>
  );
}