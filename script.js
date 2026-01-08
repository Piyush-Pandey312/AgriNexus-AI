window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("poster-popup").classList.remove("hidden");
    }); 
  });
  
  document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("poster-popup").classList.add("hidden");
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const translations = {
        en: {
            features: "Features",
            how_it_works: "How It Works",
            pricing: "Pricing",
            contact: "Contact",
            get_started: "Get Started",
            download: "Download",
            hero_title: "",
            hero_description: "Protect Your Crops & Plants with AI-Powered Disease Detection",
            start_detecting: "Start Detecting Now!",
            key_features: "Key Features",
            accurate_detection: "Accurate Disease Detection",
            accurate_detection_desc: "Our AI model is trained on a vast dataset of plant images to identify a wide range of diseases with high accuracy.",
            early_detection: "Early Detection",
            early_detection_desc: "Detect diseases in their early stages, allowing you to take prompt action and prevent widespread damage.",
            mobile_app: "Easy-to-Use Mobile App",
            mobile_app_desc: "Upload images of your plants directly from your smartphone for on-the-go disease detection.",
            yield_optimization: "Yield Optimization",
            yield_optimization_desc: "By preventing disease outbreaks, Crop Defender helps you maximize your crop yield and profitability.",
            plants_supported: "Wide Range of Plants Supported",
            plants_supported_desc: "Our system supports detection of diseases in various plants and crops, including fruits, vegetables, and grains.",
            plant_supported: "Direct Market Access",
            plant_supported_desc: "Direct marketplace integration, Farmers can list & sell their produce.",
            drone: "Drone",
            drone_desc: "Drone can also capturing the image and upload on the Application.",
            soil: "Soil Monitoring",
            soil_desc: "We can add soil Monitoring in two ways. <br> (i). With AI integration model <br> (ii). With Iot Sensors",
            sim: "Simulator",
            sim_desc: "Simulator feature will be added to the application where a farmer can easily tear and train with the help of transmitter that can also be purchashed by the shop section or production sensor and connect to the simulator.",
            s_drone: "Spraying Drone",
            s_drone_desc: "For the future enhancement, we can create drone (Spraying Drone).",
            buy: "Buy Product",
            buy_desc: "Product can be buyed directly form application and it will show the application as product based application too.",
            cloud_platform: "Cloud-Based Platform",
            cloud_platform_desc: "Access Crop Defender from anywhere with an internet connection. No software installation required.",
            how_it_works_title: "How It Works",
            step_1_title: "1. Upload a Photo",
            step_1_desc: "Take a photo of the affected plant or crop using your smartphone or upload an existing image.",
            step_2_title: "2. AI Analysis",
            step_2_desc: "Our AI model analyzes the image to identify potential diseases based on visual symptoms.",
            step_3_title: "3. Get Results",
            step_3_desc: "Receive a detailed report with the identified disease (if any) and recommended treatment options.",
            pricing_title: "Pricing",
            basic_plan: "Basic",
            basic_feature_1: "Up to 50 image analyses per month",
            basic_feature_2: "Standard disease detection accuracy",
            basic_feature_3: "Email support",
            choose_basic: "Choose Basic",
            premium_plan: "Premium",
            premium_feature_1: "Unlimited image analyses",
            premium_feature_2: "High-accuracy disease detection",
            premium_feature_3: "Priority email and phone support",
            premium_feature_4: "Early access to new features",
            choose_premium: "Choose Premium",
            enterprise_plan: "Enterprise",
            enterprise_feature_1: "Customized solutions for large farms",
            enterprise_feature_2: "Dedicated account manager",
            enterprise_feature_3: "On-site training and support",
            enterprise_feature_4: "API access for integration with other systems",
            contact_us: "Contact Us",
            contact_title: "Contact Us",
            contact_description: "Have questions? Reach out to our team.",
            name_placeholder: "Your Name",
            email_placeholder: "Your Email",
            message_placeholder: "Your Message",
            send_message: "Send Message",
            footer_copyright: "© 2025 AgriNexus X By Team Neural Nexus. All rights reserved."
        },
        hi: {
            features: "विशेषताएँ",
            how_it_works: "यह कैसे काम करता है",
            pricing: "मूल्य निर्धारण",
            contact: "संपर्क करें",
            get_started: "शुरू हो जाओ",
            Download: "डाउनलोड",
            hero_title: "एग्रीनेक्सस एक्स: स्वायत्त फार्म इंटेलिजेंस सिस्टम।",
            hero_description: "एआई-संचालित रोग जांच से अपनी फसलों और पौधों को सुरक्षित रखें",
            start_detecting: "अभी पता लगाना शुरू करें!",
            key_features: "प्रमुख विशेषताएँ",
            accurate_detection: "सटीक रोग पहचान",
            accurate_detection_desc: "हमारा एआई मॉडल उच्च सटीकता के साथ रोगों की एक विस्तृत श्रृंखला की पहचान करने के लिए पौधों की छवियों के एक विशाल डेटासेट पर प्रशिक्षित है।",
            early_detection: "शीघ्र पहचान",
            early_detection_desc: "रोगों का उनके शुरुआती चरणों में पता लगाएं, जिससे आप तुरंत कार्रवाई कर सकें और व्यापक क्षति को रोक सकें।",
            mobile_app: "उपयोग में आसान मोबाइल ऐप",
            mobile_app_desc: "चलते-फिरते रोग का पता लगाने के लिए सीधे अपने स्मार्टफोन से अपने पौधों की छवियों को अपलोड करें।",
            yield_optimization: "उपज अनुकूलन",
            yield_optimization_desc: "रोग के प्रकोप को रोककर, फसल रक्षक आपको अपनी फसल की उपज और लाभप्रदता को अधिकतम करने में मदद करता है।",
            plants_supported: "समर्थित पौधों की विस्तृत श्रृंखला",
            plants_supported_desc: "हमारी प्रणाली फलों, सब्जियों और अनाज सहित विभिन्न पौधों और फसलों में रोगों का पता लगाने का समर्थन करती है।",
            plant_supported: "प्रत्यक्ष बाज़ार पहुंच",
            plant_supported_desc: "प्रत्यक्ष बाज़ार एकीकरण, किसान अपनी उपज को सूचीबद्ध और बेच सकते हैं.",
            drone: "ड्रोन",
            drone_desc: "ड्रोन भी छवि कैप्चर कर सकता है और एप्लिकेशन पर अपलोड कर सकता है।",
            Soil: "मिट्टी की निगरानी",
            Soil_desc: "हम दो तरीकों से मिट्टी की निगरानी जोड़ सकते हैं। (i) एआई एकीकरण मॉडल के साथ (ii) आईओटी सेंसर के साथ",
            s_drone: "स्प्रेइंग ड्रोन",
            s_drone_desc: "भविष्य में वृद्धि के लिए, हम ड्रोन (स्प्रेइंग ड्रोन) बना सकते हैं।",
            sim: "सिम्युलेटर",
            sim_desc: "सिम्युलेटर सुविधा को एप्लीकेशन में जोड़ा जाएगा, जहां किसान आसानी से ट्रांसमीटर की मदद से फसल को फाड़ और प्रशिक्षित कर सकते हैं, जिसे दुकान अनुभाग या उत्पादन सेंसर द्वारा भी खरीदा जा सकता है और सिम्युलेटर से जोड़ा जा सकता है।",
            buy: "उत्पाद खरीदें",
            buy_desc: "उत्पाद को सीधे आवेदन से खरीदा जा सकता है और यह आवेदन को उत्पाद आधारित आवेदन के रूप में भी दिखाएगा.",
            cloud_platform: "क्लाउड-आधारित प्लेटफॉर्म",
            cloud_platform_desc: "इंटरनेट कनेक्शन के साथ कहीं से भी फसल रक्षक तक पहुंचें। किसी सॉफ्टवेयर इंस्टॉलेशन की आवश्यकता नहीं है।",
            how_it_works_title: "यह कैसे काम करता है",
            step_1_title: "1. एक फोटो अपलोड करें",
            step_1_desc: "अपने स्मार्टफोन का उपयोग करके प्रभावित पौधे या फसल की एक तस्वीर लें या एक मौजूदा छवि अपलोड करें।",
            step_2_title: "2. एआई विश्लेषण",
            step_2_desc: "हमारा एआई मॉडल दृश्य लक्षणों के आधार पर संभावित बीमारियों की पहचान करने के लिए छवि का विश्लेषण करता है।",
            step_3_title: "3. परिणाम प्राप्त करें",
            step_3_desc: "पहचाने गए रोग (यदि कोई हो) और अनुशंसित उपचार विकल्पों के साथ एक विस्तृत रिपोर्ट प्राप्त करें।",
            pricing_title: "मूल्य निर्धारण",
            basic_plan: "बुनियादी",
            basic_feature_1: "प्रति माह 50 तक छवि विश्लेषण",
            basic_feature_2: "मानक रोग पहचान सटीकता",
            basic_feature_3: "ईमेल समर्थन",
            choose_basic: "बुनियादी चुनें",
            premium_plan: "प्रीमियम",
            premium_feature_1: "असीमित छवि विश्लेषण",
            premium_feature_2: "उच्च-सटीकता रोग पहचान",
            premium_feature_3: "प्राथमिकता ईमेल और फोन समर्थन",
            premium_feature_4: "नई सुविधाओं तक शीघ्र पहुंच",
            choose_premium: "प्रीमियम चुनें",
            enterprise_plan: "उद्यम",
            enterprise_feature_1: "बड़े खेतों के लिए अनुकूलित समाधान",
            enterprise_feature_2: "समर्पित खाता प्रबंधक",
            enterprise_feature_3: "ऑन-साइट प्रशिक्षण और समर्थन",
            enterprise_feature_4: "अन्य प्रणालियों के साथ एकीकरण के लिए एपीआई एक्सेस",
            contact_us: "संपर्क करें",
            contact_title: "संपर्क करें",
            contact_description: "कोई सवाल है? हमारी टीम तक पहुंचें।",
            name_placeholder: "आपका नाम",
            email_placeholder: "आपका ईमेल",
            message_placeholder: "आपका संदेश",
            send_message: "संदेश भेजें",
            footer_copyright: "© 2025 एग्रीनेक्सस X। सर्वाधिकार सुरक्षित।"
        }
    };

    const translatePage = (lang) => {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    };

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        translatePage(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    });

    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        languageSelector.value = storedLanguage;
        translatePage(storedLanguage);
    } else {
        translatePage('en');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');

        if (body.classList.contains('dark-mode')) {
            themeToggle.querySelector('.fa-moon').style.display = 'none';
            themeToggle.querySelector('.fa-sun').style.display = 'inline-block';
        } else {
            themeToggle.querySelector('.fa-moon').style.display = 'inline-block';
            themeToggle.querySelector('.fa-sun').style.display = 'none';
        }
    });
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.querySelector('.fa-moon').style.display = 'none';
        themeToggle.querySelector('.fa-sun').style.display = 'inline-block';
    }
});