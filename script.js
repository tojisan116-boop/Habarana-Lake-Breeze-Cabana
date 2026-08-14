/* =========================================================
   Habarana Lake Breeze Cabana
   Main interaction + bilingual system
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const CONFIG = {

  whatsappNumber: "94764806045",

  bookingUrl:
    "https://www.booking.com/hotel/lk/habarana-lake-breeze-cabana.html",

  defaultLanguage: "en"

};


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

  en: {

    "nav.home": "Home",
    "nav.stay": "Stay",
    "nav.experiences": "Experiences",
    "nav.gallery": "Gallery",
    "nav.location": "Location",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.book": "Book / Enquire",

    "hero.title":
      "Habarana Lake<br>Breeze Cabana",

    "hero.text":
      "A peaceful lakeside stay in the heart of Sri Lanka's cultural and wildlife country.",

    "hero.rooms":
      "Explore Rooms",

    "hero.contact":
      "Contact Us",

    "intro.title":
      "Wake up close to the lake.",

    "intro.text":
      "Habarana Lake Breeze Cabana offers a relaxed place to stay in Habarana, with accommodation overlooking the lake and the natural surroundings of the area.",

    "intro.text2":
      "It is a convenient base for travellers exploring Sri Lanka's famous cultural and wildlife attractions.",

    "intro.link":
      "Discover the property →",

    "why.eyebrow":
      "Why stay here",

    "why.title":
      "A simple stay, surrounded by nature.",

    "why.lake.title":
      "Lake surroundings",

    "why.lake.text":
      "Enjoy accommodation with views towards the lake and a natural Habarana setting.",

    "why.comfort.title":
      "Comfortable accommodation",

    "why.comfort.text":
      "Private bathrooms, Wi-Fi and practical amenities for a relaxed stay.",

    "why.breakfast.title":
      "Breakfast",

    "why.breakfast.text":
      "Breakfast is available at the property, with an Asian breakfast option listed.",

    "why.location.title":
      "Explore Habarana",

    "why.location.text":
      "Stay in Habarana while discovering the cultural and wildlife attractions nearby.",


    "rooms.eyebrow":
      "Stay with us",

    "rooms.title":
      "Rooms for your Sri Lankan journey.",

    "rooms.intro":
      "Choose the accommodation that best suits your journey, then contact the property directly to confirm availability.",

    "rooms.double.title":
      "Double Room",

    "rooms.double.text":
      "A private room designed for a comfortable stay in the peaceful Habarana surroundings.",

    "rooms.double.guest":
      "Up to 2 guests",

    "rooms.double.bath":
      "Private bathroom",

    "rooms.double.wifi":
      "Free Wi-Fi",

    "rooms.lake.title":
      "Double Room with Lake View",

    "rooms.lake.text":
      "A relaxing option for guests who want to enjoy the property's lake-facing setting.",

    "rooms.lake.guest":
      "Up to 2 guests",

    "rooms.lake.view":
      "Lake view",

    "rooms.lake.wifi":
      "Free Wi-Fi",

    "rooms.family.title":
      "Family Room",

    "rooms.family.text":
      "A larger accommodation option suitable for guests travelling together.",

    "rooms.family.room":
      "Family accommodation",

    "rooms.family.bath":
      "Private bathroom",

    "rooms.family.wifi":
      "Free Wi-Fi",

    "rooms.view":
      "View Room",

    "rooms.featured":
      "Lake View",

    "rooms.note":
      "We do not show artificial availability on this website. Contact us directly to check your preferred dates and accommodation.",


    "amenities.eyebrow":
      "Comfort",

    "amenities.title":
      "Everything you need for a relaxed stay.",

    "amenities.wifi":
      "Free Wi-Fi",

    "amenities.bath":
      "Private bathrooms",

    "amenities.parking":
      "Free private parking",

    "amenities.breakfast":
      "Breakfast",

    "amenities.family":
      "Family rooms",

    "amenities.shuttle":
      "Airport shuttle",

    "amenities.service":
      "Room service",

    "amenities.garden":
      "Garden",


    "experiences.eyebrow":
      "Around Habarana",

    "experiences.title":
      "Make your stay part of the adventure.",

    "experiences.intro":
      "Habarana is a natural base for exploring Sri Lanka's wildlife, landscapes and ancient cultural heritage.",

    "experience.one.title":
      "Wildlife & Safari",

    "experience.one.text":
      "Explore the wildlife country surrounding Habarana and discover the region's famous elephant habitats.",

    "experience.two.title":
      "Nature & Lakes",

    "experience.two.text":
      "Enjoy the natural landscape around Habarana, including lakes and peaceful countryside.",

    "experience.three.title":
      "Ancient Sri Lanka",

    "experience.three.text":
      "Use Habarana as a base for exploring the cultural treasures of Sri Lanka's Cultural Triangle.",


    "destination.eyebrow":
      "Discover Habarana",

    "destination.title":
      "Stay in the middle of Sri Lanka's cultural heartland.",

    "destination.text":
      "Habarana is surrounded by some of the island's most important cultural and wildlife destinations. It is particularly useful for travellers building a northern cultural and nature itinerary.",

    "destination.sigiriya":
      "The famous ancient rock fortress.",

    "destination.pidurangala":
      "A celebrated viewpoint overlooking the Sigiriya landscape.",

    "destination.minneriya":
      "Known for its wildlife and elephant experiences.",


    "about.eyebrow":
      "About the stay",

    "about.title":
      "A peaceful base for discovering Sri Lanka.",

    "about.text":
      "Habarana Lake Breeze Cabana is located in Habarana, Sri Lanka, with accommodation offering lake views and a garden setting.",

    "about.text2":
      "The property listing includes free Wi-Fi, private parking, breakfast, family rooms, room service and airport shuttle service.",

    "about.text3":
      "Rather than trying to be a large resort, the experience is centred around a comfortable stay and the natural and cultural attractions of the Habarana area.",


    "gallery.eyebrow":
      "The property",

    "gallery.title":
      "See Habarana through our eyes.",


    "reviews.title":
      "Your stay will speak for itself.",

    "reviews.text":
      "We have not added testimonials or ratings here because verified guest reviews were not available from the supplied property sources at the time of building this site.",


    "location.eyebrow":
      "Find us",

    "location.title":
      "Habarana Lake, Sri Lanka.",

    "location.text":
      "Habarana Lake Breeze Cabana is located in Habarana, Sri Lanka, in the Habarana Lake area.",

    "location.directions":
      "Get Directions",


    "contact.title":
      "Planning a stay in Habarana?",

    "contact.text":
      "Tell us about your trip and contact the property directly to confirm your preferred dates and room.",

    "contact.whatsapp":
      "WhatsApp",

    "contact.phone":
      "Phone",


    "form.title":
      "Send an enquiry",

    "form.subtitle":
      "Your enquiry will open in WhatsApp so you can contact the property directly.",

    "form.name":
      "Your name",

    "form.country":
      "Country",

    "form.checkin":
      "Check-in",

    "form.checkout":
      "Check-out",

    "form.guests":
      "Guests",

    "form.room":
      "Preferred room",

    "form.select":
      "Select a room",

    "form.message":
      "Message",

    "form.submit":
      "Continue to WhatsApp",

    "form.note":
      "Please note: submitting an enquiry does not confirm availability. The property will confirm your stay directly.",


    "booking.title":
      "Prefer to book through Booking.com?",

    "booking.text":
      "You can also view the property's current Booking.com listing and booking options there.",

    "booking.button":
      "View on Booking.com",


    "footer.description":
      "A peaceful lakeside stay in Habarana, Sri Lanka.",

    "footer.explore":
      "Explore",

    "footer.contact":
      "Contact",

    "footer.location":
      "Habarana, Sri Lanka",


    "mobile.whatsapp":
      "WhatsApp",

    "mobile.call":
      "Call",

    "mobile.enquire":
      "Enquire",

    "modal.enquire":
      "Enquire about this room"

  },


  si: {

    "nav.home": "මුල් පිටුව",
    "nav.stay": "නවාතැන්",
    "nav.experiences": "අත්දැකීම්",
    "nav.gallery": "ඡායාරූප",
    "nav.location": "ස්ථානය",
    "nav.about": "අප ගැන",
    "nav.contact": "සම්බන්ධ වන්න",
    "nav.book": "විමසන්න / වෙන්කරවා ගන්න",

    "hero.title":
      "Habarana Lake<br>Breeze Cabana",

    "hero.text":
      "ශ්‍රී ලංකාවේ සංස්කෘතික හා වනජීවී කලාපය මධ්‍යයේ වැව අසල සන්සුන් නවාතැනක්.",

    "hero.rooms":
      "කාමර බලන්න",

    "hero.contact":
      "අප අමතන්න",

    "intro.title":
      "වැව අසලින් ඔබේ දවස ආරම්භ කරන්න.",

    "intro.text":
      "Habarana Lake Breeze Cabana, හබරණ ප්‍රදේශයේ වැව සහ ස්වභාවික පරිසරය සමඟ සන්සුන් නවාතැන් අත්දැකීමක් ලබා දෙයි.",

    "intro.text2":
      "ශ්‍රී ලංකාවේ ප්‍රසිද්ධ සංස්කෘතික හා වනජීවී ආකර්ෂණීය ස්ථාන නැරඹීමට පැමිණෙන සංචාරකයන් සඳහා මෙය පහසු නවාතැන් ස්ථානයකි.",

    "intro.link":
      "නවාතැන පිළිබඳ වැඩි විස්තර →",

    "why.eyebrow":
      "මෙහි නවාතැන් ගැනීමට හේතු",

    "why.title":
      "ස්වභාවික පරිසරයක සරල සහ සුවපහසු නවාතැනක්.",

    "why.lake.title":
      "වැව අවට පරිසරය",

    "why.lake.text":
      "වැව දෙසට විවෘත දර්ශන සහිත හබරණේ ස්වභාවික පරිසරය අත්විඳින්න.",

    "why.comfort.title":
      "සුවපහසු නවාතැන්",

    "why.comfort.text":
      "පෞද්ගලික නානකාමර, Wi-Fi සහ සුවපහසු නවාතැන් සඳහා අවශ්‍ය පහසුකම්.",

    "why.breakfast.title":
      "උදෑසන ආහාරය",

    "why.breakfast.text":
      "නවාතැනේ උදෑසන ආහාරය ලබා ගත හැකි අතර Asian breakfast විකල්පයක්ද සඳහන් කර ඇත.",

    "why.location.title":
      "හබරණ ගවේෂණය කරන්න",

    "why.location.text":
      "හබරණේ රැඳී සිටිමින් අවට සංස්කෘතික හා වනජීවී ආකර්ෂණීය ස්ථාන ගවේෂණය කරන්න.",


    "rooms.eyebrow":
      "අප සමඟ රැඳී සිටින්න",

    "rooms.title":
      "ඔබේ ශ්‍රී ලංකා සංචාරයට ගැළපෙන නවාතැන්.",

    "rooms.intro":
      "ඔබේ සංචාරයට ගැළපෙන නවාතැන් තෝරාගෙන, ඔබ කැමති දිනයන් සඳහා ඇති ඉඩකඩ සෘජුවම අපෙන් විමසන්න.",

    "rooms.double.title":
      "ද්විත්ව කාමරය",

    "rooms.double.text":
      "හබරණේ සන්සුන් පරිසරයේ සුවපහසු නවාතැන් අත්දැකීමක් සඳහා පෞද්ගලික කාමරයක්.",

    "rooms.double.guest":
      "අමුත්තන් 2 දෙනෙකු දක්වා",

    "rooms.double.bath":
      "පෞද්ගලික නානකාමරය",

    "rooms.double.wifi":
      "නොමිලේ Wi-Fi",

    "rooms.lake.title":
      "වැව දර්ශනය සහිත ද්විත්ව කාමරය",

    "rooms.lake.text":
      "නවාතැනේ වැව දෙසට ඇති සුන්දර පරිසරය භුක්ති විඳීමට කැමති අමුත්තන් සඳහා සුදුසු විකල්පයකි.",

    "rooms.lake.guest":
      "අමුත්තන් 2 දෙනෙකු දක්වා",

    "rooms.lake.view":
      "වැව දර්ශනය",

    "rooms.lake.wifi":
      "නොමිලේ Wi-Fi",

    "rooms.family.title":
      "පවුල් කාමරය",

    "rooms.family.text":
      "එකට සංචාරය කරන අමුත්තන් සඳහා සුදුසු විශාල නවාතැන් විකල්පයකි.",

    "rooms.family.room":
      "පවුල් නවාතැන්",

    "rooms.family.bath":
      "පෞද්ගලික නානකාමරය",

    "rooms.family.wifi":
      "නොමිලේ Wi-Fi",

    "rooms.view":
      "කාමරය බලන්න",

    "rooms.featured":
      "වැව දර්ශනය",

    "rooms.note":
      "මෙම වෙබ් අඩවියේ ව්‍යාජ හෝ සජීවී availability පෙන්වන්නේ නැත. ඔබේ කැමති දිනයන් සහ නවාතැන් සඳහා අපව සෘජුවම අමතන්න.",


    "amenities.eyebrow":
      "පහසුකම්",

    "amenities.title":
      "සුවපහසු නවාතැන් සඳහා අවශ්‍ය පහසුකම්.",

    "amenities.wifi":
      "නොමිලේ Wi-Fi",

    "amenities.bath":
      "පෞද්ගලික නානකාමර",

    "amenities.parking":
      "නොමිලේ පෞද්ගලික වාහන නැවැත්වීම",

    "amenities.breakfast":
      "උදෑසන ආහාරය",

    "amenities.family":
      "පවුල් කාමර",

    "amenities.shuttle":
      "ගුවන් තොටුපළ ප්‍රවාහන සේවය",

    "amenities.service":
      "කාමර සේවය",

    "amenities.garden":
      "උද්‍යානය",


    "experiences.eyebrow":
      "හබරණ අවට",

    "experiences.title":
      "ඔබේ නවාතැන ශ්‍රී ලංකා අත්දැකීමේ කොටසක් කරගන්න.",

    "experiences.intro":
      "හබරණ ශ්‍රී ලංකාවේ වනජීවී, ස්වභාවික පරිසර සහ පැරණි සංස්කෘතික උරුමයන් ගවේෂණය කිරීමට සුදුසු ස්ථානයකි.",

    "experience.one.title":
      "වනජීවී සහ සෆාරි",

    "experience.one.text":
      "හබරණ අවට වනජීවී ප්‍රදේශ ගවේෂණය කර, මෙම කලාපයේ ප්‍රසිද්ධ අලි වාසස්ථාන අත්විඳින්න.",

    "experience.two.title":
      "ස්වභාවය සහ වැව්",

    "experience.two.text":
      "වැව් සහ සන්සුන් ගම්බද පරිසරය ඇතුළු හබරණ අවට ස්වභාවික දර්ශන භුක්ති විඳින්න.",

    "experience.three.title":
      "පැරණි ශ්‍රී ලංකාව",

    "experience.three.text":
      "ශ්‍රී ලංකාවේ සංස්කෘතික ත්‍රිකෝණයේ ඓතිහාසික හා සංස්කෘතික ස්ථාන ගවේෂණය කිරීමට හබරණ නවාතැන් පදනමක් ලෙස භාවිත කරන්න.",


    "destination.eyebrow":
      "හබරණ ගවේෂණය කරන්න",

    "destination.title":
      "ශ්‍රී ලංකාවේ සංස්කෘතික හදවතේ නවාතැන් ගන්න.",

    "destination.text":
      "හබරණ ශ්‍රී ලංකාවේ වැදගත් සංස්කෘතික හා වනජීවී ගමනාන්ත කිහිපයකින් වට වී ඇත. සංස්කෘතික හා ස්වභාවික ස්ථාන ඇතුළත් සංචාරයක් සැලසුම් කරන සංචාරකයන්ට එය පහසු පදනමකි.",

    "destination.sigiriya":
      "ප්‍රසිද්ධ පැරණි ගල් බලකොටුව.",

    "destination.pidurangala":
      "සීගිරිය අවට දර්ශන නැරඹීමට ප්‍රසිද්ධ ස්ථානයක්.",

    "destination.minneriya":
      "වනජීවී සහ අලි අත්දැකීම් සඳහා ප්‍රසිද්ධ ප්‍රදේශයක්.",


    "about.eyebrow":
      "නවාතැන පිළිබඳ",

    "about.title":
      "ශ්‍රී ලංකාව ගවේෂණය කිරීමට සන්සුන් පදනමක්.",

    "about.text":
      "Habarana Lake Breeze Cabana ශ්‍රී ලංකාවේ හබරණ ප්‍රදේශයේ පිහිටා ඇති අතර වැව දර්ශන සහ උද්‍යාන පරිසරයක් සහිත නවාතැන් සපයයි.",

    "about.text2":
      "නවාතැන් ලැයිස්තුවේ නොමිලේ Wi-Fi, පෞද්ගලික වාහන නැවැත්වීම, උදෑසන ආහාරය, පවුල් කාමර, කාමර සේවය සහ ගුවන් තොටුපළ ප්‍රවාහන සේවය සඳහන් වේ.",

    "about.text3":
      "විශාල resort එකක් ලෙස නොව, සුවපහසු නවාතැන් අත්දැකීමක් සහ හබරණ අවට ස්වභාවික හා සංස්කෘතික ආකර්ෂණීය ස්ථාන ගවේෂණය කිරීම මෙම නවාතැනේ ප්‍රධාන අරමුණයි.",


    "gallery.eyebrow":
      "නවාතැන",

    "gallery.title":
      "හබරණ අපගේ ඇස්වලින් බලන්න.",


    "reviews.title":
      "ඔබේ නවාතැන් අත්දැකීමම හොඳම සාක්ෂියයි.",

    "reviews.text":
      "මෙම වෙබ් අඩවිය නිර්මාණය කරන අවස්ථාවේදී සපයා ඇති මූලාශ්‍රවලින් තහවුරු කළ හැකි අමුත්තාගේ reviews හෝ ratings නොතිබූ බැවින් ඒවා මෙහි ඇතුළත් කර නැත.",


    "location.eyebrow":
      "අපව සොයාගන්න",

    "location.title":
      "හබරණ වැව, ශ්‍රී ලංකාව.",

    "location.text":
      "Habarana Lake Breeze Cabana ශ්‍රී ලංකාවේ හබරණ, හබරණ වැව ආශ්‍රිත ප්‍රදේශයේ පිහිටා ඇත.",

    "location.directions":
      "මාර්ගය බලන්න",


    "contact.title":
      "හබරණේ නවාතැන් ගැනීමට සැලසුම් කරනවාද?",

    "contact.text":
      "ඔබේ සංචාරය පිළිබඳ තොරතුරු ලබා දී, ඔබ කැමති දිනයන් සහ කාමරය තහවුරු කර ගැනීමට නවාතැන සෘජුවම අමතන්න.",

    "contact.whatsapp":
      "WhatsApp",

    "contact.phone":
      "දුරකථනය",


    "form.title":
      "විමසීමක් යවන්න",

    "form.subtitle":
      "ඔබේ විමසීම WhatsApp හරහා නවාතැන සෘජුවම සම්බන්ධ කර ගැනීමට විවෘත වේ.",

    "form.name":
      "ඔබේ නම",

    "form.country":
      "රට",

    "form.checkin":
      "පැමිණීමේ දිනය",

    "form.checkout":
      "පිටත්වීමේ දිනය",

    "form.guests":
      "අමුත්තන්",

    "form.room":
      "කැමති කාමරය",

    "form.select":
      "කාමරයක් තෝරන්න",

    "form.message":
      "පණිවිඩය",

    "form.submit":
      "WhatsApp වෙත යන්න",

    "form.note":
      "සැලකිලිමත් වන්න: විමසීමක් යැවීමෙන් නවාතැන් availability තහවුරු නොවේ. නවාතැන විසින් ඔබේ නවාතැන් සෘජුවම තහවුරු කරනු ඇත.",


    "booking.title":
      "Booking.com හරහා වෙන්කරවා ගැනීමට කැමතිද?",

    "booking.text":
      "නවාතැනේ වර්තමාන Booking.com ලැයිස්තුව සහ වෙන්කරවා ගැනීමේ විකල්ප එහිදීද බලන්න.",

    "booking.button":
      "Booking.com බලන්න",


    "footer.description":
      "ශ්‍රී ලංකාවේ හබරණ වැව අසල සන්සුන් නවාතැනක්.",

    "footer.explore":
      "ගවේෂණය",

    "footer.contact":
      "සම්බන්ධ වන්න",

    "footer.location":
      "හබරණ, ශ්‍රී ලංකාව",


    "mobile.whatsapp":
      "WhatsApp",

    "mobile.call":
      "ඇමතුම",

    "mobile.enquire":
      "විමසන්න",

    "modal.enquire":
      "මෙම කාමරය ගැන විමසන්න"

  }

};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage =
  localStorage.getItem("hlbc-language") ||
  CONFIG.defaultLanguage;


function applyLanguage(language) {

  if (!translations[language]) {
    language = CONFIG.defaultLanguage;
  }

  currentLanguage = language;

  localStorage.setItem(
    "hlbc-language",
    language
  );

  document.documentElement.lang =
    language === "si" ? "si" : "en";

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n");

      const translation =
        translations[language][key];

      if (!translation) return;

      element.innerHTML = translation;

    });


  document
    .querySelectorAll(".language-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.language === language
      );

    });

}


document
  .querySelectorAll(".language-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      applyLanguage(
        button.dataset.language
      );

    });

  });


applyLanguage(currentLanguage);


/* =========================================================
   HEADER SCROLL
========================================================= */

const siteHeader =
  document.getElementById("siteHeader");


function updateHeader() {

  if (window.scrollY > 40) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");


function closeMobileMenu() {

  mobileMenu.classList.remove("open");

  menuToggle.classList.remove("open");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.style.overflow = "";

}


function openMobileMenu() {

  mobileMenu.classList.add("open");

  menuToggle.classList.add("open");

  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.style.overflow = "hidden";

}


menuToggle.addEventListener(
  "click",
  () => {

    if (
      mobileMenu.classList.contains("open")
    ) {

      closeMobileMenu();

    } else {

      openMobileMenu();

    }

  }
);


document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMobileMenu
    );

  });


/* =========================================================
   ROOM DATA
========================================================= */

const roomData = {

  double: {

    image: "images/cottage-1.jpg",

    title: {
      en: "Double Room",
      si: "ද්විත්ව කාමරය"
    },

    description: {
      en:
        "A private accommodation option for up to two guests, with a private bathroom and free Wi-Fi.",
      si:
        "අමුත්තන් දෙදෙනෙකු දක්වා නවාතැන් ගත හැකි පෞද්ගලික කාමරයක්. පෞද්ගලික නානකාමරයක් සහ නොමිලේ Wi-Fi ඇතුළත් වේ."
    },

    amenities: {
      en: [
        "Up to 2 guests",
        "Private bathroom",
        "Free Wi-Fi"
      ],
      si: [
        "අමුත්තන් 2 දෙනෙකු දක්වා",
        "පෞද්ගලික නානකාමරය",
        "නොමිලේ Wi-Fi"
      ]
    }

  },


  lake: {

    image: "images/cottage-2.jpg",

    title: {
      en: "Double Room with Lake View",
      si: "වැව දර්ශනය සහිත ද්විත්ව කාමරය"
    },

    description: {
      en:
        "A private room for up to two guests with a lake-facing setting, private bathroom and free Wi-Fi.",
      si:
        "අමුත්තන් දෙදෙනෙකු දක්වා නවාතැන් ගත හැකි, වැව දෙසට දර්ශනයක් සහිත පෞද්ගලික කාමරයකි. පෞද්ගලික නානකාමරයක් සහ නොමිලේ Wi-Fi ඇතුළත් වේ."
    },

    amenities: {
      en: [
        "Up to 2 guests",
        "Lake view",
        "Private bathroom",
        "Free Wi-Fi"
      ],
      si: [
        "අමුත්තන් 2 දෙනෙකු දක්වා",
        "වැව දර්ශනය",
        "පෞද්ගලික නානකාමරය",
        "නොමිලේ Wi-Fi"
      ]
    }

  },


  family: {

    image: "images/cottage-3.jpg",

    title: {
      en: "Family Room",
      si: "පවුල් කාමරය"
    },

    description: {
      en:
        "A larger accommodation option designed for guests travelling together, with a private bathroom and free Wi-Fi.",
      si:
        "එකට සංචාරය කරන අමුත්තන් සඳහා සුදුසු විශාල නවාතැන් විකල්පයකි. පෞද්ගලික නානකාමරයක් සහ නොමිලේ Wi-Fi ඇතුළත් වේ."
    },

    amenities: {
      en: [
        "Family accommodation",
        "Private bathroom",
        "Free Wi-Fi"
      ],
      si: [
        "පවුල් නවාතැන්",
        "පෞද්ගලික නානකාමරය",
        "නොමිලේ Wi-Fi"
      ]
    }

  }

};


/* =========================================================
   ROOM MODAL
========================================================= */

const roomModal =
  document.getElementById("roomModal");

const modalClose =
  document.getElementById("modalClose");

const modalImage =
  document.getElementById("modalRoomImage");

const modalTitle =
  document.getElementById("modalRoomTitle");

const modalDescription =
  document.getElementById("modalRoomDescription");

const modalAmenities =
  document.getElementById("modalRoomAmenities");

const modalBookButton =
  document.getElementById("modalBookButton");


function openRoom(roomId) {

  const room =
    roomData[roomId];

  if (!room) return;

  modalImage.src = room.image;

  modalImage.alt =
    room.title[currentLanguage];

  modalTitle.textContent =
    room.title[currentLanguage];

  modalDescription.textContent =
    room.description[currentLanguage];

  modalAmenities.innerHTML = "";

  room.amenities[currentLanguage]
    .forEach(item => {

      const tag =
        document.createElement("span");

      tag.textContent = item;

      modalAmenities.appendChild(tag);

    });


  roomModal.classList.add("open");

  roomModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );


  modalBookButton.onclick = () => {

    const roomSelect =
      document.getElementById(
        "preferredRoom"
      );

    const matchingOption =
      [...roomSelect.options]
        .find(
          option =>
            option.value ===
            room.title.en
        );

    if (matchingOption) {

      roomSelect.value =
        room.title.en;

    }

    closeRoom();

  };

}


function closeRoom() {

  roomModal.classList.remove("open");

  roomModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


document
  .querySelectorAll(".room-button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        openRoom(
          button.dataset.room
        );

      }
    );

  });


modalClose.addEventListener(
  "click",
  closeRoom
);


document
  .querySelector(".modal-backdrop")
  .addEventListener(
    "click",
    closeRoom
  );


/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.getElementById("lightboxClose");


document
  .querySelectorAll(".gallery-item")
  .forEach(item => {

    item.addEventListener(
      "click",
      () => {

        lightboxImage.src =
          item.dataset.image;

        lightboxImage.alt =
          item.dataset.alt || "";

        lightbox.classList.add("open");

        lightbox.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.classList.add(
          "modal-open"
        );

      }
    );

  });


function closeLightbox() {

  lightbox.classList.remove("open");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


lightboxClose.addEventListener(
  "click",
  closeLightbox
);


lightbox.addEventListener(
  "click",
  event => {

    if (
      event.target === lightbox
    ) {

      closeLightbox();

    }

  }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }

    closeRoom();
    closeLightbox();
    closeMobileMenu();

  }
);


/* =========================================================
   ENQUIRY FORM
========================================================= */

const enquiryForm =
  document.getElementById(
    "enquiryForm"
  );

const formError =
  document.getElementById(
    "formError"
  );


function formatDate(dateValue) {

  if (!dateValue) {
    return "";
  }

  const date =
    new Date(
      `${dateValue}T00:00:00`
    );

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString(
    currentLanguage === "si"
      ? "si-LK"
      : "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

}


enquiryForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    formError.textContent = "";

    const name =
      document
        .getElementById("guestName")
        .value
        .trim();

    const country =
      document
        .getElementById("guestCountry")
        .value
        .trim();

    const checkIn =
      document
        .getElementById("checkIn")
        .value;

    const checkOut =
      document
        .getElementById("checkOut")
        .value;

    const guests =
      document
        .getElementById("guestCount")
        .value;

    const room =
      document
        .getElementById("preferredRoom")
        .value;

    const message =
      document
        .getElementById("guestMessage")
        .value
        .trim();


    if (!name) {

      formError.textContent =
        currentLanguage === "si"
          ? "කරුණාකර ඔබේ නම ඇතුළත් කරන්න."
          : "Please enter your name.";

      document
        .getElementById("guestName")
        .focus();

      return;

    }


    if (
      checkIn &&
      checkOut &&
      checkOut < checkIn
    ) {

      formError.textContent =
        currentLanguage === "si"
          ? "පිටත්වීමේ දිනය පැමිණීමේ දිනයට පෙර විය නොහැක."
          : "Check-out cannot be before check-in.";

      return;

    }


    let enquiry;

    if (currentLanguage === "si") {

      enquiry =
`ආයුබෝවන් Habarana Lake Breeze Cabana,

මම නවාතැන් ගැනීමක් පිළිබඳව විමසීමට කැමතියි.

නම: ${name}
රට: ${country || "-"}
පැමිණීම: ${formatDate(checkIn) || "-"}
පිටත්වීම: ${formatDate(checkOut) || "-"}
අමුත්තන්: ${guests || "-"}
කැමති කාමරය: ${room || "-"}

පණිවිඩය:
${message || "-"}

කරුණාකර මෙම දිනයන් සඳහා availability සහ booking විස්තර තහවුරු කර දෙන්න.

ස්තුතියි.`;

    } else {

      enquiry =
`Hello Habarana Lake Breeze Cabana,

I would like to enquire about a stay.

Name: ${name}
Country: ${country || "-"}
Check-in: ${formatDate(checkIn) || "-"}
Check-out: ${formatDate(checkOut) || "-"}
Guests: ${guests || "-"}
Preferred room: ${room || "-"}

Message:
${message || "-"}

Please confirm availability and booking details for these dates.

Thank you.`;

    }


    const whatsappUrl =
      `https://wa.me/${CONFIG.whatsappNumber}?text=` +
      encodeURIComponent(enquiry);


    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

  }
);


/* =========================================================
   DATE VALIDATION
========================================================= */

const checkInInput =
  document.getElementById("checkIn");

const checkOutInput =
  document.getElementById("checkOut");


function setMinimumDates() {

  const today =
    new Date();

  const year =
    today.getFullYear();

  const month =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      today.getDate()
    ).padStart(2, "0");

  const formatted =
    `${year}-${month}-${day}`;

  checkInInput.min =
    formatted;

  checkOutInput.min =
    formatted;

}


setMinimumDates();


checkInInput.addEventListener(
  "change",
  () => {

    if (checkInInput.value) {

      checkOutInput.min =
        checkInInput.value;

    }

  }
);


/* =========================================================
   FOOTER YEAR
========================================================= */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();


/* =========================================================
   IMAGE ERROR FALLBACK
========================================================= */

document
  .querySelectorAll("img")
  .forEach(image => {

    image.addEventListener(
      "error",
      () => {

        image.style.background =
          "#eee9dc";

        image.alt =
          "Image unavailable";

      }
    );

  });


/* =========================================================
   PREVENT HASH JUMP FOR MODAL BOOK
========================================================= */

const modalAnchor =
  document.getElementById(
    "modalBookButton"
  );

modalAnchor.addEventListener(
  "click",
  () => {

    setTimeout(() => {

      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }, 50);

  }
);
