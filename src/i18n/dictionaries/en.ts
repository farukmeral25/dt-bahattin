/**
 * English dictionary — copy taken from the design handoff (EN / DICT /
 * *_EN objects). Strings the handoff left untranslated are marked below.
 */
import type { Dictionary } from "./tr";
const en: Dictionary = {
  meta: {
    home: {
      title: "Dt. Bahattin Eraslan | Dentist in Pendik, Istanbul",
      description:
        "Dentist Bahattin Eraslan in Pendik, Istanbul: implants, smile design, zirconia crowns, veneers, root canal treatment and dental tourism. Book online or message us on WhatsApp.",
    },
    blog: {
      title: "Blog",
      description:
        "Plain-language articles on implants, cosmetic dentistry, oral surgery, children's dental health and everyday oral care.",
    },
    gallery: {
      title: "Gallery",
      description:
        "Before and after cases shared with our patients' consent, and photos from our clinic in Pendik, Istanbul.",
    },
    tourism: {
      title: "Dental Tourism in Istanbul",
      description:
        "Dental treatment in Istanbul for international patients: free video consultation, airport transfer, accommodation and follow-up after you return home.",
    },
    treatments: {
      title: "Treatments",
      description:
        "Dental treatments in Pendik, Istanbul: implants, smile design, zirconia crowns, veneers, whitening, orthodontics, root canal, paediatric and gum care.",
    },
    kvkk: {
      title: "Privacy Notice",
      description:
        "Privacy notice of Dt. Bahattin Eraslan's clinic under the Turkish Personal Data Protection Law (KVKK).",
    },
    notFound: {
      title: "Page not found",
      text: "The page you are looking for may have been moved or removed.",
      back: "Back to home",
    },
  },

  common: {
    navSub: "Dentist",
    nav: {
      doctor: "Doctor",
      treatments: "Treatments",
      gallery: "Gallery",
      reviews: "Reviews",
      tourism: "Dental Tourism",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
    },
    navCta: "Book Now",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Language",
    call: "Call",
    whatsapp: "WhatsApp",
    bookConsultation: "Book a consultation",
    hoursLabel: "Opening hours",
    readMore: "Read more",
    hours: ["Mon – Fri 09:00 – 19:00", "Saturday 09:00 – 19:00"],
    before: "Before",
    after: "After",
    footer: {
      instagram: "Instagram",
      google: "Google",
      kvkk: "Privacy Notice",
    },
    cookie: {
      text: "This site uses only essential and anonymous analytics cookies.",
      link: "Privacy notice",
      accept: "Accept",
    },
    backHome: "← Home",
    form: {
      required: "required",
      newRequest: "New request",
      sending: "Sending…",
      error:
        "Your request could not be sent. Please try again or give us a call.",
    },
  },

  home: {
    hero: {
      kicker: "Pendik · Istanbul",
      title: "Your smile, at its most natural.",
      text: "From implants to smile design, every treatment is planned around your facial features and expectations. Unhurried and transparent.",
      cta: "Book Online",
      portraitAlt: "Portrait of Dt. Bahattin Eraslan",
      stats: [
        { value: "11", label: "treatment areas" },
        { value: "1:1", label: "dentist follow-up" },
        { value: "Pendik", label: "easy access" },
      ],
    },
    marquee: [
      "Implants",
      "Smile Design",
      "Zirconia",
      "Veneers",
      "Whitening",
      "Orthodontics",
      "Root Canal",
      "Paediatric",
      "Gums",
      "Prosthetics",
      "Bruxism",
    ],
    doctor: {
      kicker: "Doctor",
      title: "Dt. Bahattin Eraslan",
      lead: "Every patient's mouth, expectations and time are different. That's why I listen first and get the diagnosis right, then lay out a clear plan aiming for the most lasting result with the least intervention.",
      text: [
        "After Gülizar Zeki Obdan Anatolian High School, I studied at Van Yüzüncü Yıl University Faculty of Dentistry and graduated with honours in 2023. I served on the organising committee of the 1st International Health Sciences Congress at Yüzüncü Yıl University, where my academic study also received an award.",
        "Since graduating I have been treating patients from Turkey and abroad in Pendik, with a particular focus on implant and oral surgery and prosthetic work.",
      ],
      photoAlt: "Dt. Bahattin Eraslan at the clinic",
      facts: [
        {
          label: "Education",
          value:
            "Van Yüzüncü Yıl University, Faculty of Dentistry · 2018 – 2023, with honours",
        },
        {
          label: "Academic",
          value:
            "1st International Health Sciences Congress · organising committee, award-winning paper",
        },
        {
          label: "Focus areas",
          value:
            "Implant surgery, surgical and wisdom tooth extractions, All-on-4 / All-on-6 implant prostheses, veneers, root canal",
        },
        {
          label: "Experience",
          value: "4 years of active clinical practice · Pendik",
        },
      ],
      credentials: {
        summary: "Congresses & certificates",
        congressesTitle: "Congresses",
        certificatesTitle: "Certificate programmes",
        congresses: [
          {
            org: "Van Yüzüncü Yıl University",
            title: "1st International Health Sciences Congress",
            note: "Organising committee member; award for presented study",
          },
          {
            org: "Hacettepe University Faculty of Dentistry",
            title: "International Student Congress",
          },
          {
            org: "Turkish Dental Association (TDB)",
            title: "TDB Online Student Congress",
          },
          { org: "APEX'21", title: "Dentistry Congress" },
        ],
        certificates: [
          {
            org: "The University of Hong Kong · Faculty of Dentistry",
            title: "Implant Dentistry",
          },
          {
            org: "The University of Hong Kong · Faculty of Dentistry",
            title: "Digital Biomaterials",
          },
          {
            org: "The University of Hong Kong · Faculty of Dentistry",
            title: "Minimal Intervention Dentistry for Paediatric Patients",
          },
        ],
      },
    },
    treatments: {
      kicker: "Treatments",
      title: "Complete dental care under one roof.",
      text: "From diagnosis to treatment, the whole process stays with the same dentist. Not sure what you need? We decide together at the consultation.",
      all: "All treatments →",
      ask: "Not sure which one you need?",
      askCta: "Free pre-consultation →",
    },
    why: {
      kicker: "Why us",
      title: "The process matters as much as the treatment.",
      items: [
        {
          title: "Transparent planning",
          text: "Before we start, we share the process, number of visits and cost in writing.",
        },
        {
          title: "Digital diagnosis",
          text: "Intraoral scanning and digital imaging let you see the result before we begin.",
        },
        {
          title: "Pain-free approach",
          text: "Slow-paced, comfort-first sessions for patients with dental anxiety.",
        },
        {
          title: "Sterilisation",
          text: "Single-use kits for every patient and a documented sterilisation cycle.",
        },
      ],
    },
    gallery: {
      kicker: "Before / After",
      title: "Let the results speak.",
      all: "All photos →",
      clinicOnly: {
        kicker: "Clinic",
        title: "Inside our clinic.",
      },
    },
    reviews: {
      kicker: "Patient reviews",
      items: [
        {
          quote:
            "“I finally finished the implant treatment I had put off for years, without any pain. He explained every step beforehand.”",
          name: "Ayşe K.",
          treatment: "Implant",
        },
        {
          quote:
            "“My veneers look so natural that nobody can tell. Exactly what I wanted.”",
          name: "Mert D.",
          treatment: "Smile design",
        },
        {
          quote:
            "“My daughter used to be terrified of dentists. Now she can't wait for her check-up.”",
          name: "Elif S.",
          treatment: "Paediatric",
        },
      ],
    },
    blog: {
      kicker: "Blog",
      title: "Notes on oral health.",
      all: "All articles →",
    },
    tourism: {
      kicker: "Dental Tourism",
      title: "Our patient in the clinic, our guest in Istanbul.",
      text: "For patients travelling from abroad we plan airport transfer, accommodation and the treatment calendar in one place. Before you fly, a free video consultation settles your treatment plan and cost.",
      steps: [
        {
          title: "Online pre-consultation",
          text: "Send your photos and X-rays; receive a written treatment plan and quote.",
        },
        {
          title: "Airport transfer",
          text: "We are 15 minutes from Sabiha Gökçen Airport. Our car waits according to your landing time.",
        },
        {
          title: "Stay and treatment",
          text: "Stay at our partner hotel within walking distance; sessions are compressed to fit your visit.",
        },
        {
          title: "Follow-up after you return",
          text: "Check-ups continue by video call once you are home, with your warranty certificate in hand.",
        },
      ],
      cta: "Request a video consultation",
      more: "See the full process →",
      imageAlts: ["The Bosphorus, Istanbul", "Clinic and airport transfer"],
      stats: [
        { value: "15 min", label: "to Sabiha Gökçen" },
        { value: "3–7", label: "days average stay" },
        { value: "EN", label: "English-speaking care" },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Common questions.",
      showAll: "Show all questions",
      text: "Can't find your answer here? Message us on WhatsApp.",
      items: [
        {
          question: "Is the first consultation free?",
          answer:
            "The initial consultation and intraoral assessment are free. You will be informed separately if an X-ray is needed.",
        },
        {
          question: "How long does implant treatment take?",
          answer:
            "Implant placement is a single session; the permanent crown is usually fitted 2–3 months later, depending on bone structure.",
        },
        {
          question: "Are the treatments painful?",
          answer:
            "All procedures are done under local anaesthesia. Extra comfort options are available for anxious patients.",
        },
        {
          question: "Do you offer instalments?",
          answer:
            "Yes, credit card instalment plans are available. We share the details during planning.",
        },
        {
          question: "When should my child have the first check-up?",
          answer:
            "After the first tooth erupts, ideally around the age of one.",
        },
        {
          question: "Where exactly is the clinic in Pendik?",
          answer:
            "We are at İstiklal Caddesi No:10/A, Güzelyalı, Pendik, Istanbul. Use the map at the bottom of the page or search “Diş Hekimi Bahattin Eraslan” on Google Maps for directions.",
        },
        {
          question: "Do you see patients from outside Pendik?",
          answer:
            "Of course. We welcome patients from every part of Istanbul and from outside the city. Booking ahead keeps waiting time to a minimum.",
        },
        {
          question: "Are you open on Saturdays?",
          answer:
            "Yes. We are open Monday to Friday 09:00–19:00 and Saturday 09:00–19:00. Book by phone, WhatsApp or the form on this site.",
        },
      ],
    },
    appointment: {
      kicker: "Appointment",
      title: "Let's take the first step together.",
      text: "Fill in the form and we'll call you the same day to find a suitable time. Or reach us directly by phone.",
      whatsapp: "Message on WhatsApp",
      form: {
        name: "Full name",
        phone: "Phone",
        phonePlaceholder: "+90 5__ ___ __ __",
        treatment: "Treatment",
        treatmentOptions: [
          "Not sure",
          "Implants",
          "Smile Design",
          "Zirconia",
          "Veneers",
          "Whitening",
          "Orthodontics",
          "Root Canal",
          "Paediatric",
          "Gums",
          "Prosthetics",
          "Botox / Bruxism",
        ],
        date: "Preferred day",
        note: "Note (optional)",
        consent:
          "I consent to my personal data being processed for appointment purposes.",
        consentLink: "Privacy notice",
        submit: "Send Appointment Request",
        privacy:
          "Your details are used only for booking and never shared with third parties.",
      },
      success: {
        title: "Thank you!",
        text: "We received your request and will call you the same day.",
      },
    },
    location: {
      kicker: "Location",
      title: "In Pendik.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      instagram: "Instagram",
      directions: "Get directions →",
      mapTitle: "Clinic location map",
    },
  },

  blog: {
    kicker: "Blog",
    title: "Notes on oral health.",
    text: "Short, plainly written articles on treatments, care and the questions we hear most.",
    all: "All",
    categories: {
      implant: "Implant",
      aesthetic: "Aesthetics",
      surgery: "Surgery",
      kids: "Children",
      care: "Care",
    },
    readTime: "min",
    readMore: "Read the article →",
    empty: "No articles in this category yet.",
    ctaTitle: "Have a question about what you read?",
    post: {
      back: "← All articles",
      readTime: "min read",
      ctaKicker: "Consultation",
      ctaText: "The first consultation and intraoral assessment are free.",
      cta: "Book now",
      related: "Related articles",
      coverAlt: "Article cover image",
      photo: "Photo:",
    },
  },

  treatments: {
    kicker: "Treatments",
    title: "Our treatments.",
    text: "From diagnosis to treatment, the whole process stays with the same dentist. Each treatment has its own page explaining how it works, who it suits and common questions.",
    ctaTitle: "Not sure which treatment you need?",
    detail: "Learn more →",
    page: {
      back: "← All treatments",
      faqTitle: "Frequently asked questions",
      related: "Related articles",
      others: "Other treatments",
      ctaKicker: "Consultation",
      ctaTitle: "First consultation is free",
      ctaText:
        "Book an oral examination and treatment plan; there is no obligation to decide.",
      cta: "Book an appointment",
    },
  },

  gallery: {
    kicker: "Gallery",
    title: "Let the results speak.",
    text: "Before / after cases shared with our patients' consent, and scenes from the clinic.",
    clinicOnly: {
      title: "Inside our clinic.",
      text: "Our clinic in Pendik: waiting area, treatment rooms and digital X-ray.",
      description:
        "Photos from our dental clinic in Pendik, Istanbul: waiting area, treatment rooms and digital panoramic X-ray.",
    },
    tabs: { all: "All", cases: "Before / After", clinic: "Clinic" },
    casesTitle: "Before / After",
    clinicTitle: "Scenes from the clinic",
    ctaTitle: "Let's plan your own smile.",
    // Not in the handoff — written for this build
    lightbox: {
      open: "Enlarge",
      prev: "Previous case",
      next: "Next case",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      close: "Close",
    },
    cases: [
      { title: "Smile design", detail: "8 veneers" },
      { title: "Implant", detail: "Single missing tooth" },
      { title: "Whitening", detail: "In-office, one session" },
      { title: "All-on-4", detail: "Upper jaw fixed prosthesis" },
      { title: "Zirconia crowns", detail: "Front 6 teeth" },
      { title: "Orthodontics", detail: "Clear aligners, 9 months" },
    ],
    // Not in the handoff (image placeholder labels) — written for this build
    clinic: [
      "Waiting area",
      "Treatment room",
      "Panoramic X-ray",
      "Entrance",
      "X-ray room",
      "Consultation room",
      "Treatment room 2",
    ],
  },

  tourism: {
    navCta: "Video Consultation",
    hero: {
      kicker: "Dental Tourism · Istanbul",
      title: "Come to Istanbul for your treatment, leave the rest to us.",
      text: "For patients living abroad we handle the planning end to end: pre-consultation, transfer, accommodation, treatment and follow-up after you return. Before you travel you know in writing what will be done and what you will pay.",
      cta: "Free video consultation",
      imageAlt: "Istanbul skyline and the Bosphorus",
    },
    stats: [
      { value: "15 min", label: "by car from Sabiha Gökçen Airport" },
      {
        value: "3–7 days",
        label: "average stay for implant and aesthetic treatments",
      },
      {
        value: "50–70%",
        label: "average saving versus Western European prices",
      },
      { value: "EN", label: "English-speaking dentist and team" },
    ],
    journey: {
      kicker: "Your journey",
      title: "Step by step, with no surprises.",
      steps: [
        {
          title: "Online pre-consultation and quote",
          text: "We review your photos and X-rays and explain the plan on a video call. Number of sessions, length of stay and total cost are sent to you in writing.",
          imageAlt: "Video consultation",
        },
        {
          title: "Airport pick-up",
          text: "Private transfer from Sabiha Gökçen to the clinic and hotel. Just share your flight details; our car is ready for your landing time.",
          imageAlt: "Airport transfer car",
        },
        {
          title: "Accommodation",
          text: "Discounted stays at partner hotels within walking distance of the clinic. You can also arrange your own booking if you prefer.",
          imageAlt: "Hotel room",
        },
        {
          title: "Treatment",
          text: "Sessions are compressed to fit your stay, leaving time to explore the Pendik seafront and Istanbul. The whole process stays with the same dentist.",
          imageAlt: "Treatment room",
        },
        {
          title: "Return and remote follow-up",
          text: "You leave with your warranty certificate and care instructions. Check-ups continue by video call; a second visit is planned if needed.",
          imageAlt: "Video check-up",
        },
      ],
    },
    treatments: {
      kicker: "Most requested",
      title: "Treatments that fit a single visit",
      all: "All treatments →",
      items: [
        {
          name: "All-on-4 / All-on-6",
          text: "Full-arch fixed prosthesis on implants. 2 visits, temporary teeth on the first.",
          duration: "5–7 days",
        },
        {
          name: "Smile Design",
          text: "Digitally planned aesthetic makeover with veneers or zirconia.",
          duration: "5–6 days",
        },
        {
          name: "Implant",
          text: "Single or multiple implant surgery; permanent teeth on the second visit.",
          duration: "3 days + 3 days",
        },
        {
          name: "Whitening + Cleaning",
          text: "A single-session treatment to go with your city visit.",
          duration: "1 day",
        },
      ],
    },
    consult: {
      kicker: "Free video consultation",
      title: "Let's settle the plan together before you travel.",
      steps: [
        {
          title: "Take photos of your teeth",
          text: "The biting surfaces of upper and lower teeth plus one smiling front shot are enough. Add your panoramic X-ray if you have one.",
        },
        {
          title: "Fill in the form",
          text: "Describe your complaint and expectations briefly; the more detail, the more accurate the plan.",
        },
        {
          title: "Receive your meeting link",
          text: "Within 48 hours we send an invitation for a time that suits you. You leave the call with a written plan and quote.",
        },
      ],
      form: {
        name: "Full name",
        country: "Country / City",
        email: "E-mail",
        phone: "WhatsApp number",
        treatment: "Treatment of interest",
        treatmentOptions: [
          "Not sure",
          "All-on-4 / All-on-6",
          "Implant",
          "Smile Design",
          "Zirconia / Veneers",
          "Whitening",
          "Other",
        ],
        date: "Planned date",
        files: "Photos / X-ray",
        filesNote:
          "After sending your request, you can share your photos and X-rays via WhatsApp.",
        message: "Your message",
        consent:
          "I consent to my personal data and the images I send being used for treatment planning.",
        submit: "Send Video Consultation Request",
      },
      success: {
        title: "Request received",
        text: "We'll e-mail you within 48 hours with a meeting invitation and time options.",
        sendPhotos: "Send photos via WhatsApp",
        photosMessage:
          "Hello, I've sent a video consultation request. Here are my photos and X-rays.",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "For patients travelling from abroad.",
      items: [
        {
          question: "How long does treatment take and how many visits?",
          answer:
            "Smile design and All-on-4 are usually completed in one visit (5–7 days). Single implants need a second short visit 2–3 months later for healing.",
        },
        {
          question: "Is the quote binding?",
          answer:
            "The written quote given after the video consultation stands unless the plan changes at the examination. Any change is approved by you before treatment.",
        },
        {
          question: "Are transfer and hotel included?",
          answer:
            "Airport transfer is included in the treatment package. Partner hotel rates are sent separately; payment is made directly to the hotel.",
        },
        {
          question: "Which languages can I communicate in?",
          answer:
            "The dentist and team speak English. Interpreter support can be arranged for other languages.",
        },
        {
          question: "What if something goes wrong after I return?",
          answer:
            "All implant and prosthetic work is under warranty. We assess first by video call; if needed we coordinate with a colleague in your country or plan your visit.",
        },
      ],
    },
  },
};

export default en;
