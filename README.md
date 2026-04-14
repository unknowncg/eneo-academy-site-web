# Eneo Academy - Site web officiel

Site vitrine pour le centre de formation Eneo Academy, construit avec HTML, Tailwind CSS et JavaScript.

## Structure du projet

- `index.html` : page principale du site.
- `css/styles.css` : styles personnalisés et animations.
- `js/main.js` : scripts d'animation et gestion du formulaire de contact.
- `images/logo.jpg` : logo de l'academy.
- `docs/` : flyers utilisés pour présenter les formations.

## Fonctionnalités

- Bouton d'appel mobile (`tel:`) pour lancer un appel directement.
- Bouton WhatsApp pour démarrer une conversation instantanée.
- Formulaire de contact connecté à `eneogroup.cg@gmail.com` via `mailto:`.
- Animations d'apparition optimisées avec `IntersectionObserver`.
- Code modulaire et commenté pour faciliter la maintenance.

## Déploiement

1. Ouvrir `index.html` dans un navigateur.
2. Le site utilise Tailwind CSS en CDN, donc aucune configuration supplémentaire n'est nécessaire.

## Mise à jour

- Modifier le numéro de téléphone dans `index.html` pour refléter le numéro réel.
- Mettre à jour le message du formulaire dans `js/main.js` si le contenu doit changer.
- Ajouter de nouvelles formations dans `index.html` ou via le dossier `docs/`.

## Conseils pour un développeur junior

- Les parties importantes sont identifiées par des commentaires dans les fichiers `index.html`, `css/styles.css` et `js/main.js`.
- Pour ajouter une nouvelle section, dupliquez un bloc `article` et adaptez les textes.
- Pour ajouter des visuels, copiez les flyers dans `docs/` et utilisez un `img` avec le chemin correspondant.
