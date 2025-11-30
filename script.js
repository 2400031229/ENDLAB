// Language translations
const translations = {
    en: {
        'site-title': 'Discovering India',
        'nav-home': 'Home',
        'nav-monuments': 'Monuments',
        'nav-culture': 'Culture',
        'nav-timeline': 'Timeline',
        'nav-login': 'Admin Login',
        'hero-title': 'Discovering India: A Journey Through Culture, Heritage & Monuments',
        'hero-subtitle': 'Explore the rich tapestry of India\'s cultural heritage, magnificent monuments, and timeless traditions',
        'explore-btn': 'Explore Now',
        'intro-title': 'Welcome to Incredible India',
        'intro-text': 'India is a land of diverse cultures, ancient heritage, and magnificent monuments that tell stories of thousands of years. From the majestic Taj Mahal to the vibrant festivals, from classical dance forms to architectural marvels, India offers an unparalleled journey through time and tradition.',
        'feature1-title': 'Rich Heritage',
        'feature1-desc': 'Discover monuments that showcase India\'s glorious past',
        'feature2-title': 'Diverse Culture',
        'feature2-desc': 'Experience the colorful traditions and customs',
        'feature3-title': 'Historical Timeline',
        'feature3-desc': 'Journey through India\'s fascinating history',
        'footer-text': '© 2024 Discovering India. All rights reserved.',
        
        // Login page
        'login-title': 'Admin Login',
        'username-label': 'Username',
        'password-label': 'Password',
        'login-btn': 'Login',
        'forgot-password': 'Forgot Password?',
        
        // Monuments page
        'monuments-title': 'Historic Monuments of India',
        'monuments-subtitle': 'Explore the architectural marvels that define India\'s rich heritage',
        'taj-mahal-title': 'Taj Mahal',
        'taj-mahal-desc': 'A UNESCO World Heritage Site, this ivory-white marble mausoleum was built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
        'taj-mahal-time': 'October to March',
        'red-fort-title': 'Red Fort',
        'red-fort-desc': 'A historic fortified palace of the Mughal emperors, serving as the main residence of the Mughal dynasty for nearly 200 years.',
        'red-fort-time': 'October to March',
        'qutub-minar-title': 'Qutub Minar',
        'qutub-minar-desc': 'A 73-meter tall tapering tower of five stories, built in 1193 by Qutab-ud-din Aibak and later completed by his successor Iltutmish.',
        'qutub-minar-time': 'October to March',
        'hampi-title': 'Hampi',
        'hampi-desc': 'The ruins of the Vijayanagara Empire, showcasing magnificent temples, royal complexes, and ancient market streets.',
        'hampi-time': 'October to February',
        'ajanta-ellora-title': 'Ajanta & Ellora Caves',
        'ajanta-ellora-desc': 'Ancient Buddhist, Hindu, and Jain cave temples carved into rock cliffs, dating from 2nd century BCE to 10th century CE.',
        'ajanta-ellora-time': 'November to March',
        'charminar-title': 'Charminar',
        'charminar-desc': 'A monument and mosque built in 1591, located in Hyderabad, Telangana. It has become a global icon of Hyderabad.',
        'charminar-time': 'October to February',
        'gateway-title': 'Gateway of India',
        'gateway-desc': 'An arch-monument built in the early 20th century in Mumbai, commemorating the landing of King George V and Queen Mary.',
        'gateway-time': 'November to February',
        'konark-title': 'Konark Sun Temple',
        'konark-desc': 'A 13th-century CE Sun Temple at Konark about 35 kilometers northeast of Puri, designed as a gigantic chariot for the sun god Surya.',
        'konark-time': 'October to March',
        'mysore-palace-title': 'Mysore Palace',
        'mysore-palace-desc': 'A historical palace and royal residence in Mysore, Karnataka. It is one of the most famous tourist attractions in India.',
        'mysore-palace-time': 'October to March',
        'best-time': 'Best Time to Visit:',
        
        // Culture page
        'culture-title': 'Indian Culture & Traditions',
        'culture-subtitle': 'Experience the vibrant diversity of India\'s cultural heritage',
        'languages-title': 'Languages',
        'hindi-title': 'Hindi',
        'hindi-desc': 'Official language spoken by over 500 million people',
        'english-title': 'English',
        'english-desc': 'Associate official language for government work',
        'regional-title': 'Regional Languages',
        'regional-desc': '22 official languages including Tamil, Telugu, Bengali, Marathi',
        'festivals-title': 'Festivals',
        'diwali-title': 'Diwali',
        'diwali-desc': 'Festival of lights celebrated across India',
        'holi-title': 'Holi',
        'holi-desc': 'Festival of colors marking spring\'s arrival',
        'eid-title': 'Eid',
        'eid-desc': 'Islamic festival celebrated with great enthusiasm',
        'christmas-title': 'Christmas',
        'christmas-desc': 'Christian festival celebrated nationwide',
        'dance-title': 'Dance Forms',
        'bharatanatyam-title': 'Bharatanatyam',
        'bharatanatyam-desc': 'Classical dance from Tamil Nadu',
        'kathak-title': 'Kathak',
        'kathak-desc': 'Classical dance from North India',
        'odissi-title': 'Odissi',
        'odissi-desc': 'Classical dance from Odisha',
        'kuchipudi-title': 'Kuchipudi',
        'kuchipudi-desc': 'Classical dance from Andhra Pradesh',
        'music-title': 'Music',
        'classical-title': 'Classical Music',
        'classical-desc': 'Hindustani and Carnatic traditions',
        'folk-title': 'Folk Music',
        'folk-desc': 'Regional folk traditions and instruments',
        'bollywood-title': 'Bollywood',
        'bollywood-desc': 'Popular film music industry',
        'clothing-title': 'Traditional Clothing',
        'saree-title': 'Saree',
        'saree-desc': 'Traditional garment worn by women',
        'dhoti-title': 'Dhoti',
        'dhoti-desc': 'Traditional garment worn by men',
        'lehenga-title': 'Lehenga',
        'lehenga-desc': 'Traditional skirt worn during festivals',
        'kurta-title': 'Kurta',
        'kurta-desc': 'Traditional shirt worn by both genders',
        'food-title': 'Food Culture',
        'spices-title': 'Spices',
        'spices-desc': 'Rich variety of aromatic spices',
        'vegetarian-title': 'Vegetarian Cuisine',
        'vegetarian-desc': 'Diverse plant-based dishes',
        'regional-cuisine-title': 'Regional Specialties',
        'regional-cuisine-desc': 'Unique dishes from each state',
        'street-food-title': 'Street Food',
        'street-food-desc': 'Popular snacks and quick meals',
        'arts-title': 'Arts & Crafts',
        'pottery-title': 'Pottery',
        'pottery-desc': 'Traditional clay work and ceramics',
        'textiles-title': 'Textiles',
        'textiles-desc': 'Handwoven fabrics and embroidery',
        'paintings-title': 'Paintings',
        'paintings-desc': 'Miniature and folk art traditions',
        'jewelry-title': 'Jewelry',
        'jewelry-desc': 'Traditional ornaments and designs',
        
        // Timeline page
        'timeline-title': 'Historical Timeline of India',
        'timeline-subtitle': 'Journey through India\'s rich historical heritage',
        'indus-title': 'Indus Valley Civilization',
        'indus-desc': 'One of the world\'s earliest urban civilizations, known for advanced city planning, drainage systems, and trade networks.',
        'maurya-title': 'Maurya Empire',
        'maurya-desc': 'Founded by Chandragupta Maurya, reached its peak under Ashoka the Great, who promoted Buddhism and non-violence.',
        'gupta-title': 'Gupta Age - Golden Period',
        'gupta-desc': 'Known as the Golden Age of India, marked by achievements in science, mathematics, astronomy, literature, and arts.',
        'delhi-sultanate-title': 'Delhi Sultanate',
        'delhi-sultanate-desc': 'Series of Muslim dynasties that ruled from Delhi, introducing Islamic culture and architecture to India.',
        'mughal-title': 'Mughal Empire',
        'mughal-desc': 'Founded by Babur, reached its zenith under Akbar, Shah Jahan, and Aurangzeb. Built iconic monuments like the Taj Mahal.',
        'british-title': 'British Colonial Rule',
        'british-desc': 'British East India Company and later British Crown ruled India. Period of exploitation but also modernization and independence movements.',
        'independence-title': 'Independence',
        'independence-desc': 'India gained independence on August 15, 1947, led by Mahatma Gandhi\'s non-violent resistance movement.',
        'modern-india-title': 'Modern India Formation',
        'modern-india-desc': 'Post-independence nation building, Green Revolution, space program, and establishment of democratic institutions.',
        'digital-india-title': 'Economic Liberalization & Digital India',
        'digital-india-desc': 'Economic reforms, IT revolution, emergence as a global technology hub, and digital transformation initiatives.'
    },
    
    hi: {
        'site-title': 'भारत की खोज',
        'nav-home': 'मुख्य पृष्ठ',
        'nav-monuments': 'स्मारक',
        'nav-culture': 'संस्कृति',
        'nav-timeline': 'समयरेखा',
        'nav-login': 'प्रशासक लॉगिन',
        'hero-title': 'भारत की खोज: संस्कृति, विरासत और स्मारकों की यात्रा',
        'hero-subtitle': 'भारत की समृद्ध सांस्कृतिक विरासत, भव्य स्मारकों और कालातीत परंपराओं का अन्वेषण करें',
        'explore-btn': 'अभी खोजें',
        'intro-title': 'अविश्वसनीय भारत में आपका स्वागत है',
        'intro-text': 'भारत विविध संस्कृतियों, प्राचीन विरासत और भव्य स्मारकों की भूमि है जो हजारों वर्षों की कहानियां कहते हैं।',
        'feature1-title': 'समृद्ध विरासत',
        'feature1-desc': 'भारत के गौरवशाली अतीत को दर्शाने वाले स्मारकों की खोज करें',
        'feature2-title': 'विविध संस्कृति',
        'feature2-desc': 'रंगबिरंगी परंपराओं और रीति-रिवाजों का अनुभव करें',
        'feature3-title': 'ऐतिहासिक समयरेखा',
        'feature3-desc': 'भारत के आकर्षक इतिहास की यात्रा करें',
        'footer-text': '© 2024 भारत की खोज। सभी अधिकार सुरक्षित।'
    },
    
    te: {
        'site-title': 'భారతదేశ అన్వేషణ',
        'nav-home': 'హోమ్',
        'nav-monuments': 'స్మారక చిహ్నాలు',
        'nav-culture': 'సంస్కృతి',
        'nav-timeline': 'కాలక్రమం',
        'nav-login': 'అడ్మిన్ లాగిన్',
        'hero-title': 'భారతదేశ అన్వేషణ: సంస్కృతి, వారసత్వం మరియు స్మారక చిహ్నాల ప్రయాణం',
        'hero-subtitle': 'భారతదేశం యొక్క గొప్ప సాంస్కృతిక వారసత్వం, అద్భుతమైన స్మారక చిహ్నాలు మరియు కాలాతీత సంప్రదాయాలను అన్వేషించండి',
        'explore-btn': 'ఇప్పుడే అన్వేషించండి',
        'intro-title': 'అద్భుతమైన భారతదేశానికి స్వాగతం',
        'intro-text': 'భారతదేశం విభిన్న సంస్కృతులు, పురాతన వారసత్వం మరియు వేలాది సంవత్సరాల కథలను చెప్పే అద్భుतమైన స్మారక చిహ్నాల భూమి.',
        'feature1-title': 'గొప్ప వారసత్వం',
        'feature1-desc': 'భారతదేశం యొక్క గౌరవప్రదమైన గతాన్ని ప్రదర్శించే స్మారక చిహ్నాలను కనుగొనండి',
        'feature2-title': 'విభిన్న సంస్కృతి',
        'feature2-desc': 'రంగురంగుల సంప్రదాయాలు మరియు ఆచారాలను అనుభవించండి',
        'feature3-title': 'చారిత్రక కాలక్రమం',
        'feature3-desc': 'భారతదేశం యొక్క ఆకర్షణీయమైన చరిత్ర గుండా ప్రయాణించండి',
        'footer-text': '© 2024 భారతదేశ అన్వేషణ. అన్ని హక్కులు రక్షించబడ్డాయి.'
    }
};

// Language switching functionality
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language selector
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    changeLanguage(savedLanguage);
    
    // Language change event listener
    languageSelect.addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    document.querySelectorAll('.feature-card, .monument-card, .culture-item, .timeline-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to monument cards
    const monumentCards = document.querySelectorAll('.monument-card');
    monumentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
});