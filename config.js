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
    // >>> À REMPLACER par les clés du projet Firebase de la STM <<<
    apiKey: "A_COMPLETER",
    authDomain: "A_COMPLETER",
    databaseURL: "A_COMPLETER",
    projectId: "A_COMPLETER",
    storageBucket: "A_COMPLETER",
    appId: "A_COMPLETER"
  }
};
