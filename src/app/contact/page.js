import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Form from "@/components/form";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, LinkedInIcon } from "@/components/icons";

const SocialIcon = ({ children, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-grey-950 hover:text-gray-600 transition-colors duration-300 mx-4"
    aria-label={label}
  >
    {children}
  </a>
);

const WaveSVG = () => (
    <svg viewBox="0 0 1428 174" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
          <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
          <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
          <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003" />
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
          <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
        </g>
      </g>
    </svg>
);

const ContactInfo = () => (
  <div className="p-6 bg-white text-blue-950 mx-auto">
    <h3 className="text-3xl font-bold mb-6">Informações de Contato</h3>
    <div className="space-y-4">
      <p className="flex items-center">
        <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        Rua Example, 123 - São Paulo, SP
      </p>
      <p className="flex items-center">
        <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        contato@escolaportugues.com
      </p>
      <p className="flex items-center">
        <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        (11) 9999-9999
      </p>
    </div>
    <div>
    <div className="mt-8">
      <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
      <div className="flex">
        <SocialIcon href="https://instagram.com" label="Siga-nos no Instagram">
          <InstagramIcon className="h-8 w-8" />
        </SocialIcon>
        <SocialIcon href="https://facebook.com" label="Curta nossa página no Facebook">
          <FacebookIcon className="h-8 w-8" />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" label="Conecte-se conosco no LinkedIn">
          <LinkedInIcon className="h-8 w-8" />
        </SocialIcon>
        <SocialIcon href="https://whatsapp.com" label="Fale conosco no WhatsApp">
          <WhatsAppIcon className="h-8 w-8" />
        </SocialIcon>
      </div>
    </div>
  </div>
    </div>
);

export default function Contact() {
  return (
    <div className="leading-normal tracking-normal text-white gradient font-sans">
      <Navbar />
      <main className="bg-gradient-to-r from-[#172554] via-[#3c99d9] to-[#74b3db]">
        <div className="container mx-auto px-4 pt-28">
          <h1 className="text-5xl font-bold text-center mb-12">Entre em Contato</h1>
          <p className="leading-normal tracking-normal text-center text-xl mb-8">Gostaria de estudar conosco? Entre em contato e tire todas as suas dúvidas! Estamos aqui para ajudar você a dar o primeiro passo na sua jornada de aprendizado do português.</p>

        </div>
        <WaveSVG /> 
        <div className="flex flex-wrap w-full bg-white">
            <ContactInfo />
          </div>
        <Footer>
        <Form />
        </Footer>
      </main>
    </div>
  );
}