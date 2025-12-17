const dict = {
  tr: {
    heroTitle: "Tek uygulama. 3 hizmet.",
    heroLead: "Ayvoya ile araç çağır, restorandan yemek sipariş et ve paketini taşıt.",
    seeFeatures: "Özellikleri Gör",
    appsBtn: "Uygulamalar",
    f1Title: "Araç Çağırma",
    f1Desc: "Yakındaki sürücülerle hızlı ve güvenli yolculuk.",
    f2Title: "Yemek Siparişi",
    f2Desc: "Üye restoranlardan kolay sipariş.",
    f3Title: "Paket Taşıma",
    f3Desc: "Kapıdan kapıya güvenli paket taşıma."
  },

  en: {
    heroTitle: "One app. Three services.",
    heroLead: "Request rides, order food, and send packages with Ayvoya.",
    seeFeatures: "See Features",
    appsBtn: "Apps",
    f1Title: "Ride Requests",
    f1Desc: "Fast and safe rides with nearby drivers.",
    f2Title: "Food Ordering",
    f2Desc: "Order easily from partner restaurants.",
    f3Title: "Package Delivery",
    f3Desc: "Door-to-door package delivery."
  },

  de: {
    heroTitle: "Eine App. Drei Services.",
    heroLead: "Fahrten anfordern, Essen bestellen und Pakete versenden mit Ayvoya.",
    seeFeatures: "Funktionen ansehen",
    appsBtn: "Apps",
    f1Title: "Fahrt anfordern",
    f1Desc: "Schnelle und sichere Fahrten.",
    f2Title: "Essen bestellen",
    f2Desc: "Einfach bei Partnerrestaurants bestellen.",
    f3Title: "Paketversand",
    f3Desc: "Zuverlässige Tür-zu-Tür-Lieferung."
  },

  fr: {
    heroTitle: "Une application. Trois services.",
    heroLead: "Commander un trajet, un repas ou envoyer un colis avec Ayvoya.",
    seeFeatures: "Voir les fonctionnalités",
    appsBtn: "Applications",
    f1Title: "Demande de trajet",
    f1Desc: "Trajets rapides et sécurisés.",
    f2Title: "Commande de repas",
    f2Desc: "Commandez auprès de restaurants partenaires.",
    f3Title: "Livraison de colis",
    f3Desc: "Livraison porte-à-porte fiable."
  },

  es: {
    heroTitle: "Una app. Tres servicios.",
    heroLead: "Solicita viajes, comida y envía paquetes con Ayvoya.",
    seeFeatures: "Ver funciones",
    appsBtn: "Aplicaciones",
    f1Title: "Solicitar viaje",
    f1Desc: "Viajes rápidos y seguros.",
    f2Title: "Pedido de comida",
    f2Desc: "Pide a restaurantes asociados.",
    f3Title: "Envío de paquetes",
    f3Desc: "Entrega puerta a puerta."
  },

  ru: {
    heroTitle: "Одно приложение. Три сервиса.",
    heroLead: "Заказывайте поездки, еду и доставку с Ayvoya.",
    seeFeatures: "Посмотреть функции",
    appsBtn: "Приложения",
    f1Title: "Заказ поездки",
    f1Desc: "Быстро и безопасно.",
    f2Title: "Заказ еды",
    f2Desc: "Из ресторанов-партнёров.",
    f3Title: "Доставка посылок",
    f3Desc: "Надёжная доставка."
  },

  zh: {
    heroTitle: "一个应用，三种服务。",
    heroLead: "使用 Ayvoya 叫车、订餐和寄送包裹。",
    seeFeatures: "查看功能",
    appsBtn: "应用",
    f1Title: "叫车服务",
    f1Desc: "快速安全的出行。",
    f2Title: "订餐服务",
    f2Desc: "来自合作餐厅。",
    f3Title: "包裹配送",
    f3Desc: "可靠的上门配送。"
  },

  ja: {
    heroTitle: "1つのアプリ、3つのサービス。",
    heroLead: "Ayvoyaで配車、食事注文、荷物配送。",
    seeFeatures: "機能を見る",
    appsBtn: "アプリ",
    f1Title: "配車リクエスト",
    f1Desc: "迅速で安全。",
    f2Title: "フード注文",
    f2Desc: "提携レストランから注文。",
    f3Title: "荷物配送",
    f3Desc: "信頼できる配送。"
  }
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[lang] && dict[lang][key]){
      el.textContent = dict[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

const select = document.getElementById("lang");
const saved = localStorage.getItem("lang") || "en";
select.value = saved;
setLang(saved);

select.addEventListener("change", e => setLang(e.target.value));
