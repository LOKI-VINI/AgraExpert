interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translation = {
  en: {
    // Navigation
    home: "Home",
    soilxpert: "SoilXpert",
    greenvita: "GreenVita",
    skycast: "SkyCast",
    agrigear: "AgriGear",
    yieldmart: "YieldMart",
    agriverse: "AgriVerse",
    
    // Hero section
    heroTitle: "Revolutionizing Agriculture with AI",
    heroTagline: "Smarter farming, better yields, sustainable future",
    heroDescription: "AgroXpert combines cutting-edge AI technology with agricultural expertise to help farmers optimize their yields, reduce costs, and practice sustainable farming.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Feature sections
    soilxpertTitle: "SoilXpert",
    soilxpertDescription: "Advanced soil testing, personalized crop recommendations, and yield prediction using AI-driven analysis.",
    greenvitaTitle: "GreenVita",
    greenvitaDescription: "AI-Powered Plant Disease Detection & Care",
    greenvitaTagline: "Upload images of your plants to identify diseases, get treatment recommendations, and protect your crops.",
    skycastTitle: "SkyCast",
    skycastDescription: "Hyperlocal real-time weather forecasting and alerts designed specifically for agricultural planning.",
    agrigearTitle: "AgriGear",
    agrigearDescription: "Smart equipment training and cost-effective rental services for modern agricultural machinery.",
    yieldmartTitle: "YieldMart",
    yieldmartDescription: "Digital marketplace connecting farmers directly with buyers for better prices and reduced waste.",
    agriverseTitle: "AgriVerse",
    agriverseDescription: "Community-driven knowledge sharing platform for farmers to connect, discuss and grow together.",
    exploreFeature: "Explore",
    
    // Footer
    contactUs: "Contact Us",
    followUs: "Follow Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    copyright: "© 2023 AgroXpert. All rights reserved.",
    emailUs: "Email Us",
    callUs: "Call Us",
    
    // Language
    language: "Language",
    english: "English",
    hindi: "Hindi",
    tamil: "Tamil",
    telugu: "Telugu",
    bengali: "Bengali",
    marathi: "Marathi",
    gujarati: "Gujarati",
    kannada: "Kannada",
    malayalam: "Malayalam",
    punjabi: "Punjabi",
    
    // Feedback Form
    feedbackTitle: "Send Us Your Feedback",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    submit: "Submit",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faq1Title: "What is AgroXpert?",
    faq1Answer: "AgroXpert is an AI-powered agricultural platform offering end-to-end solutions for farmers, including soil testing, disease detection, weather forecasting, equipment renting, and yield sales.",
    faq2Title: "What features does AgroXpert include?",
    faq2Answer: "AgroXpert includes SoilXpert, GreenVita, SkyCast, AgriGear, YieldMart, and AgriVerse—covering all farming needs.",
    faq3Title: "What is SoilXpert?",
    faq3Answer: "SoilXpert provides soil testing, crop recommendations, seed selection, and yield sales for maximum profitability.",
    faq4Title: "What is GreenVita?",
    faq4Answer: "GreenVita offers AI-based disease detection with remedies, precautions, and pesticide recommendations.",
    faq5Title: "What is SkyCast?",
    faq5Answer: "SkyCast provides real-time weather forecasts and automated alerts for farmers.",
    faq6Title: "What is AgriGear?",
    faq6Answer: "AgriGear offers smart equipment training and renting with video demos.",
    faq7Title: "What is YieldMart?",
    faq7Answer: "YieldMart is a marketplace for farmers to list their yields and connect with buyers.",
    faq8Title: "What is AgriVerse?",
    faq8Answer: "AgriVerse is a discussion forum and social platform where farmers share expertise and experiences.",
    faq9Title: "Is AgroXpert multilingual?",
    faq9Answer: "Yes, AgroXpert offers multilingual support for wider accessibility.",
    
    // GreenVita specific translations
    uploadImage: "Upload Plant Image",
    dragAndDrop: "Drag and drop your image here",
    orClickToUpload: "or click to upload (max. 5MB)",
    detectDisease: "Detect Disease",
    newDetection: "Start New Detection",
    detectionResults: "Detection Results",
    processingImage: "Processing your image",
    aiAnalysing: "Our AI is analyzing your plant image to identify any diseases and recommend treatments...",
    detectionError: "Detection Error",
    tryAgain: "Please try uploading a different image or try again later.",
    noImageUploaded: "No results yet",
    uploadToDetect: "Upload a plant image and click 'Detect Disease' to get analysis results.",
    analysingImage: "Analyzing image...",
    disease: "Disease",
    confidence: "Confidence",
    cause: "Cause",
    remedies: "Remedies & Prevention",
    recommendedPesticides: "Recommended Pesticides",
    pleaseUploadImage: "Please upload an image first",
    errorDetecting: "An error occurred during disease detection. Please try again.",
    onlyImageFiles: "Please upload only image files",
    fileTooLarge: "File is too large. Maximum size is 5MB"
  },
  hi: {
    // Navigation
    home: "होम",
    soilxpert: "सॉइलएक्सपर्ट",
    greenvita: "ग्रीनविटा",
    skycast: "स्काईकास्ट",
    agrigear: "एग्रीगियर",
    yieldmart: "यील्डमार्ट",
    agriverse: "एग्रीवर्स",
    
    // Hero section
    heroTitle: "कृषि में क्रांति लाना AI के साथ",
    heroTagline: "स्मार्ट खेती, बेहतर उपज, स्थायी भविष्य",
    heroDescription: "एग्रोएक्सपर्ट उन्नत AI तकनीक को कृषि विशेषज्ञता के साथ जोड़कर किसानों को उनकी उपज को अनुकूलित करने, लागत कम करने और स्थायी खेती करने में मदद करता है।",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    
    // Feature sections
    soilxpertTitle: "सॉइलएक्सपर्ट",
    soilxpertDescription: "AI-संचालित विश्लेषण का उपयोग करके उन्नत मिट्टी परीक्षण, व्यक्तिगत फसल सिफारिशें और उपज भविष्यवाणी।",
    greenvitaTitle: "ग्रीनविटा",
    greenvitaDescription: "पौधों के रोगों का जल्दी पता लगाएं और अपनी फसलों को स्वस्थ रखने के लिए कस्टम कीटनाशक सिफारिशें प्राप्त करें।",
    skycastTitle: "स्काईकास्ट",
    skycastDescription: "कृषि योजना के लिए विशेष रूप से डिज़ाइन किए गए हाइपरलोकल रीयल-टाइम मौसम पूर्वानुमान और अलर्ट।",
    agrigearTitle: "एग्रीगियर",
    agrigearDescription: "आधुनिक कृषि मशीनरी के लिए स्मार्ट उपकरण प्रशिक्षण और लागत प्रभावी किराये की सेवाएं।",
    yieldmartTitle: "यील्डमार्ट",
    yieldmartDescription: "बेहतर कीमतों और कम अपशिष्ट के लिए किसानों को सीधे खरीदारों से जोड़ने वाला डिजिटल बाजार।",
    agriverseTitle: "एग्रीवर्स",
    agriverseDescription: "किसानों के लिए समुदाय-संचालित ज्ञान साझाकरण मंच जहां वे जुड़ सकते हैं, चर्चा कर सकते हैं और साथ बढ़ सकते हैं।",
    exploreFeature: "एक्सप्लोर",
    
    // Footer
    contactUs: "संपर्क करें",
    followUs: "फॉलो करें",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    copyright: "© 2023 एग्रोएक्सपर्ट। सर्वाधिकार सुरक्षित।",
    emailUs: "हमें ईमेल करें",
    callUs: "हमें कॉल करें",
    
    // Language
    language: "भाषा",
    english: "अंग्रेजी",
    hindi: "हिंदी",
    tamil: "तमिल",
    telugu: "तेलुगु",
    bengali: "बंगाली",
    marathi: "मराठी",
    gujarati: "गुजराती",
    kannada: "कन्नड़",
    malayalam: "मलयालम",
    punjabi: "पंजाबी",
    
    // Feedback Form
    feedbackTitle: "अपनी प्रतिक्रिया भेजें",
    yourName: "आपका नाम",
    yourEmail: "आपका ईमेल",
    yourMessage: "आपका संदेश",
    submit: "सबमिट करें",
    
    // FAQ Section
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faq1Title: "एग्रोएक्सपर्ट क्या है?",
    faq1Answer: "एग्रोएक्सपर्ट एक AI-संचालित कृषि प्लेटफॉर्म है जो किसानों के लिए मिट्टी परीक्षण, रोग पहचान, मौसम पूर्वानुमान, उपकरण किराए और उपज बिक्री सहित एंड-टू-एंड समाधान प्रदान करता है।",
    faq2Title: "एग्रोएक्सपर्ट में कौन से फीचर्स शामिल हैं?",
    faq2Answer: "एग्रोएक्सपर्ट में सॉइलएक्सपर्ट, ग्रीनविटा, स्काईकास्ट, एग्रीगियर, यील्डमार्ट और एग्रीवर्स शामिल हैं - सभी कृषि जरूरतों को कवर करते हैं।",
    faq3Title: "सॉइलएक्सपर्ट क्या है?",
    faq3Answer: "सॉइलएक्सपर्ट अधिकतम लाभप्रदता के लिए मिट्टी परीक्षण, फसल सिफारिशें, बीज चयन और उपज बिक्री प्रदान करता है।",
    faq4Title: "ग्रीनविटा क्या है?",
    faq4Answer: "ग्रीनविटा उपचार, सावधानियों और कीटनाशक सिफारिशों के साथ AI-आधारित रोग पहचान प्रदान करता है।",
    faq5Title: "स्काईकास्ट क्या है?",
    faq5Answer: "स्काईकास्ट किसानों के लिए रीयल-टाइम मौसम पूर्वानुमान और स्वचालित अलर्ट प्रदान करता है।",
    faq6Title: "एग्रीगियर क्या है?",
    faq6Answer: "एग्रीगियर वीडियो डेमो के साथ स्मार्ट उपकरण प्रशिक्षण और किराए की सेवाएं प्रदान करता है।",
    faq7Title: "यील्डमार्ट क्या है?",
    faq7Answer: "यील्डमार्ट किसानों के लिए अपनी उपज सूचीबद्ध करने और खरीदारों से जुड़ने के लिए एक बाजार है।",
    faq8Title: "एग्रीवर्स क्या है?",
    faq8Answer: "एग्रीवर्स एक चर्चा मंच और सामाजिक प्लेटफॉर्म है जहां किसान विशेषज्ञता और अनुभव साझा करते हैं।",
    faq9Title: "क्या एग्रोएक्सपर्ट बहुभाषी है?",
    faq9Answer: "हां, एग्रोएक्सपर्ट व्यापक पहुंच के लिए बहुभाषी समर्थन प्रदान करता है।",
    
    // GreenVita specific translations for Hindi
    uploadImage: "पौधे की छवि अपलोड करें",
    dragAndDrop: "अपनी छवि यहां खींचें और छोड़ें",
    orClickToUpload: "या अपलोड करने के लिए क्लिक करें (अधिकतम 5MB)",
    detectDisease: "रोग का पता लगाएं",
    newDetection: "नई जांच शुरू करें",
    detectionResults: "जांच के परिणाम",
    processingImage: "आपकी छवि प्रोसेसिंग हो रही है",
    aiAnalysing: "हमारी AI आपके पौधे की छवि का विश्लेषण करके रोगों की पहचान और उपचार की सिफारिशें कर रही है...",
    detectionError: "जांच में त्रुटि",
    tryAgain: "कृपया एक अलग छवि अपलोड करें या बाद में पुनः प्रयास करें।",
    noImageUploaded: "अभी तक कोई परिणाम नहीं",
    uploadToDetect: "विश्लेषण परिणाम प्राप्त करने के लिए एक पौधे की छवि अपलोड करें और 'रोग का पता लगाएं' पर क्लिक करें।",
    analysingImage: "छवि का विश्लेषण हो रहा है...",
    disease: "रोग",
    confidence: "विश्वास",
    cause: "कारण",
    remedies: "उपचार और रोकथाम",
    recommendedPesticides: "अनुशंसित कीटनाशक",
    pleaseUploadImage: "कृपया पहले एक छवि अपलोड करें",
    errorDetecting: "रोग का पता लगाने के दौरान एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
    onlyImageFiles: "कृपया केवल छवि फ़ाइलें अपलोड करें",
    fileTooLarge: "फ़ाइल बहुत बड़ी है। अधिकतम आकार 5MB है"
  },
  ta: {
    // Basic translations for Tamil
    language: "மொழி",
    english: "ஆங்கிலம்",
    hindi: "இந்தி",
    tamil: "தமிழ்",
    telugu: "தெலுங்கு",
    bengali: "வங்காளம்",
    marathi: "மராத்தி",
    gujarati: "गुजराती",
    kannada: "ಕನ್ನಡ",
    malayalam: "மலையாளம்",
    punjabi: "பஞ்சாபி",
    
    // Navigation (basic placeholders)
    home: "முகப்பு",
    contactUs: "தொடர்பு கொள்ளவும்",
    
    // FAQ Section
    faqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    
    // GreenVita specific translations
    uploadImage: "தாவர படத்தை பதிவேற்றவும்",
    dragAndDrop: "உங்கள் படத்தை இங்கே இழுத்து விடவும்",
    detectDisease: "நோயைக் கண்டறியவும்",
    detectionResults: "கண்டறிதல் முடிவுகள்",
    disease: "நோய்",
    confidence: "நம்பிக்கை",
    cause: "காரணம்",
    remedies: "தீர்வுகள் & தடுப்பு"
  },
  te: {
    // Basic translations for Telugu
    language: "భాష",
    english: "ఆంగ్లం",
    hindi: "హిందీ",
    tamil: "తమిళం",
    telugu: "తెలుగు",
    bengali: "బెంగాలీ",
    marathi: "మరాఠీ",
    gujarati: "గుజరాతీ",
    kannada: "కన్నడ",
    malayalam: "మలయాళం",
    punjabi: "పంజాబీ",
    
    // Navigation (basic placeholders)
    home: "హోమ్",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    
    // FAQ Section
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
    
    // Basic GreenVita specific translations
    uploadImage: "మొక్క చిత్రాన్ని అప్‌లోడ్ చేయండి",
    detectDisease: "వ్యాధిని కనుగొనండి",
    disease: "వ్యాధి",
    remedies: "చికిత్సలు"
  },
  bn: {
    // Basic translations for Bengali 
    language: "ভাষা",
    english: "ইংরেজি",
    hindi: "হিন্দি",
    tamil: "তামিল",
    telugu: "তেলুগু",
    bengali: "বাংলা",
    marathi: "মারাঠি",
    gujarati: "গুজরাটি",
    kannada: "কন্নড়",
    malayalam: "মালায়ালাম",
    punjabi: "পাঞ্জাবি",
    
    // Navigation (basic placeholders)
    home: "হোম",
    contactUs: "যোগাযোগ করুন",
    
    // FAQ Section
    faqTitle: "সাধারণত জিজ্ঞাসিত প্রশ্নাবলী",
    
    // Basic GreenVita specific translations
    uploadImage: "গাছের ছবি আপলোড করুন",
    detectDisease: "রোগ সনাক্ত করুন",
    disease: "রোগ"
  },
  mr: {
    // Basic translations for Marathi
    language: "भाषा",
    english: "इंग्रजी",
    hindi: "हिंदी",
    tamil: "तमिळ",
    telugu: "तेलुगू",
    bengali: "बंगाली",
    marathi: "मराठी",
    gujarati: "गुजराती",
    kannada: "कन्नड",
    malayalam: "मल्याळम",
    punjabi: "पंजाबी",
    
    // Navigation (basic placeholders)
    home: "मुख्यपृष्ठ",
    contactUs: "संपर्क करा",
    
    // FAQ Section
    faqTitle: "वारंवार विचारले जाणारे प्रश्न",
    
    // Basic GreenVita specific translations
    uploadImage: "वनस्पतीची प्रतिमा अपलोड करा",
    detectDisease: "रोग शोधा",
    disease: "रोग",
    remedies: "उपचार"
  },
  kn: {
    // Navigation
    home: "ಮುಖಪುಟ",
    soilxpert: "ಸಾಯಿಲ್​ಎಕ್ಸ್​ಪರ್ಟ್",
    greenvita: "ಗ್ರೀನ್​ವಿಟಾ",
    skycast: "ಸ್ಕೈಕಾಸ್ಟ್",
    agrigear: "ಅಗ್ರಿಗಿಯರ್",
    yieldmart: "ಯೀಲ್ಡ್​ಮಾರ್ಟ್",
    agriverse: "ಅಗ್ರಿವರ್ಸ್",
    
    // Hero section
    heroTitle: "ಎಐ ಜೊತೆಗೆ ಕೃಷಿಯಲ್ಲಿ ಕ್ರಾಂತಿ",
    heroTagline: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ, ಉತ್ತಮ ಇಳುವರಿ, ಸುಸ್ಥಿರ ಭವಿಷ್ಯ",
    heroDescription: "ಅಗ್ರೋಎಕ್ಸ್ಪರ್ಟ್ ಆಧುನಿಕ ಎಐ ತಂತ್ರಜ್ಞಾನವನ್ನು ಕೃಷಿ ತಜ್ಞತೆಯೊಂದಿಗೆ ಸಂಯೋಜಿಸಿ ರೈತರು ತಮ್ಮ ಇಳುವರಿಯನ್ನು ಅನುಕೂಲಿಸಲು, ವೆಚ್ಚ ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಅಭ್ಯಾಸ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    getStarted: "ಆರಂಭಿಸಿ",
    learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
    
    // Feature sections
    soilxpertTitle: "ಸಾಯಿಲ್​ಎಕ್ಸ್​ಪರ್ಟ್",
    soilxpertDescription: "ಎಐ-ಆಧಾರಿತ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಬಳಸಿ ಆಧುನಿಕ ಮಣ್ಣು ಪರೀಕ್ಷೆ, ವೈಯಕ್ತಿಕ ಬೆಳೆ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಇಳುವರಿ ಮುನ್ಸೂಚನೆ.",
    
    // Language
    language: "ಭಾಷೆ",
    english: "ಇಂಗ್ಲಿಷ್",
    hindi: "ಹಿಂದಿ",
    tamil: "ತಮಿಳು",
    telugu: "ತೆಲುಗು",
    bengali: "ಬಂಗಾಳಿ",
    marathi: "ಮರಾಠಿ",
    gujarati: "ಗುಜರಾತಿ",
    kannada: "ಕನ್ನಡ",
    malayalam: "ಮಲಯಾಳಂ",
    punjabi: "ಪಂಜಾಬಿ",
    
    // Footer
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
    
    // FAQ Section
    faqTitle: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    
    // Feedback Form
    feedbackTitle: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಕಳುಹಿಸಿ",
    yourName: "ನಿಮ್ಮ ಹೆಸರು",
    yourEmail: "ನಿಮ್ಮ ಇಮೇಲ್",
    yourMessage: "ನಿಮ್ಮ ಸಂದೇಶ",
    submit: "ಸಲ್ಲಿಸಿ",
    
    // GreenVita specific translations for Kannada
    uploadImage: "ಸಸ್ಯದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    dragAndDrop: "ನಿಮ್ಮ ಚಿತ್ರವನ್ನು ಇಲ್ಲಿ ಎಳೆದು ಬಿಡಿ",
    orClickToUpload: "ಅಥವಾ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ (ಗರಿಷ್ಠ 5MB)",
    detectDisease: "ರೋಗವನ್ನು ಪತ್ತೆಹಚ್ಚಿ",
    newDetection: "ಹೊಸ ಪತ್ತೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    detectionResults: "ಪತ್ತೆಯ ಫಲಿತಾಂಶಗಳು",
    processingImage: "ನಿಮ್ಮ ಚಿತ್ರವನ್ನು ಸಂಸ್ಕರಿಸಲಾಗುತ್ತಿದೆ",
    aiAnalysing: "ನಮ್ಮ AI ನಿಮ್ಮ ಸಸ್ಯದ ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ ರೋಗಗಳನ್ನು ಗುರುತಿಸುತ್ತಿದೆ ಮತ್ತು ಚಿಕಿತ್ಸೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತಿದೆ...",
    detectionError: "ಪತ್ತೆಯಲ್ಲಿ ದೋಷ",
    tryAgain: "ದಯವಿಟ್ಟು ಬೇರೆ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    noImageUploaded: "ಇನ್ನೂ ಯಾವುದೇ ಫಲಿತಾಂಶಗಳಿಲ್ಲ",
    uploadToDetect: "ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶಗಳನ್ನು ಪಡೆಯಲು ಸಸ್ಯದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು 'ರೋಗವನ್ನು ಪತ್ತೆಹಚ್ಚಿ' ಕ್ಲಿಕ್ ಮಾಡಿ.",
    analysingImage: "ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
    disease: "ರೋಗ",
    confidence: "ವಿಶ್ವಾಸ",
    cause: "ಕಾರಣ",
    remedies: "ಪರಿಹಾರಗಳು ಮತ್ತು ತಡೆಗಟ್ಟುವಿಕೆ",
    recommendedPesticides: "ಶಿಫಾರಸು ಮಾಡಿದ ಕೀಟನಾಶಕಗಳು",
    pleaseUploadImage: "ದಯವಿಟ್ಟು ಮೊದಲು ಒಂದು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    errorDetecting: "ರೋಗ ಪತ್ತೆ ಮಾಡುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    onlyImageFiles: "ದಯವಿಟ್ಟು ಚಿತ್ರ ಫೈಲ್‌ಗಳನ್ನು ಮಾತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    fileTooLarge: "ಫೈಲ್ ತುಂಬಾ ದೊಡ್ಡದಾಗಿದೆ. ಗರಿಷ್ಠ ಗಾತ್ರ 5MB"
  }
};
