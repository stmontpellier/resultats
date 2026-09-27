// ============================================================
//  CONFIGURATION DU SITE — le SEUL fichier à adapter pour votre club
//  (voir GUIDE_INSTALLATION.pdf, étapes 3 et 5)
// ============================================================
const CONFIG = {
  // 1) Nom affiché dans les titres, l'en-tête et la barre latérale
  clubName: "Société de Tir de Montpellier",

  // 1bis) Sous-titre affiché sous le titre de la saisie (optionnel)
  subtitle: "STM",

  // 2) Identifiant technique = dossier des compétitions dans Firebase.
  //    SANS espaces ni accents (lettres, chiffres, _). Ne plus changer une fois des compétitions créées.
  clubKey: "TIR_MONTPELLIER",

  // 3) Adresse du site sur GitHub Pages (sert à fabriquer les QR codes)
  //    Forme : https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT
  githubBase: "https://stmontpellier.github.io/resultats",

  // 4) Clés Firebase — à copier depuis la console Firebase :
  //    Paramètres du projet ⚙️ → Général → Vos applications → Configuration du SDK (firebaseConfig)
  firebase: {
    apiKey: "AIzaSyCMtOjc-nSlpifdzUWwahnu2KxbywJY79c",
    authDomain: "resultats-tir-montpellier.firebaseapp.com",
    databaseURL: "https://resultats-tir-montpellier-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resultats-tir-montpellier",
    storageBucket: "resultats-tir-montpellier.firebasestorage.app",
    messagingSenderId: "916701739540",
    appId: "1:916701739540:web:2c3d75e85862fecb5d4501"
  }
};
