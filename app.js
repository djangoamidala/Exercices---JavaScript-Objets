//  Exercice 1 : Création et manipulation d'objets


//Etape 1 : Créer un objet "voiture" avec les propriétés "marque", "modèle" et "année"

const voiture = { 
    marque: '',
    modèle: '',
    année: '',

//Etape 2 : Ajouter une méthode "conduire" à l'objet "voiture" qui affiche un message "La voiture de marque [marque] modèle [modèle] de l'année [année] roule sur la route."
    conduire: function() {
        console.log(`La voiture de marque ${this.marque} modèle ${this.modèle} de l'année ${this.année} roule sur la route.`);
    }
}
// Etape 3 : Créer une instance de l'objet "voiture" en utilisant les propriétés "Toyota", "Camry" et "2020"
const maVoiture = Object.create(voiture);
maVoiture.marque = 'Toyota';
maVoiture.modèle = 'Camry';
maVoiture.année = '2020';
// Etape 4 : Appeler la méthode "conduire" sur l'instance de l'objet "voiture" pour afficher le message "La voiture de marque Toyota modèle Camry de l'année 2020 roule sur la route."
maVoiture.conduire(); 



// Exercice 2 : Manipulation d'objets dans un tableau



// Etape 1 : Créer un tableau "garage" qui contient des instances de l'objet "voiture" créé dans l'exercice précédent

garage = [maVoiture]
// Etape 2 : Ajouter une méthode "afficherVoitures" à l'objet "garage" qui affiche les propriétés de chaque voiture dans le tableau
    
garage.afficherVoitures = function() {
    console.log(garage)
}

// Etape 3 : Appeler la méthode "afficherVoitures" sur l'objet "garage" pour afficher les propriétés de chaque voiture dans le tableau
garage.afficherVoitures();


// Exercice 3 : Fonction constructeur
// Etape 1 : Créer une fonction constructeur "Personne" qui prend en paramètres "nom" et "âge"
function Personne(nom,âge) {
    this.nom = nom;
    this.âge = âge;
}

// Etape 2 : Ajouter les propriétés "nom" et "âge" à l'objet créé par la fonction constructeur
let personneAge = new Personne("Andy",24)
console.log(personneAge)

// Etape 3 : Ajouter une méthode "sePresenter" à l'objet créé par la fonction constructeur qui affiche un message "Bonjour, je m'appelle [nom] et j'ai [âge] ans."
personneAge.sePresenter = function () {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.âge} ans.`)
}

// Etape 4 : Utiliser la fonction constructeur pour créer une instance de l'objet "Personne" en utilisant les valeurs "John" et "30"
personneAge.sePresenter();




// Exercice 4 : Héritage de fonction constructeur



// Etape 1 : Créer une fonction constructeur "Etudiant" qui hérite des propriétés et méthodes de la fonction constructeur "Personne"
function Etudiant(nom,âge, matricule) {
    Personne.call(this,nom,âge);

// Etape 2 : Ajouter une propriété "matricule" à l'objet créé par la fonction constructeur "Etudiant"
    this.matricule = matricule;
    this.sePresenter = function() {
        console.log("Bonjour, je m'appelle " + this.nom + " et j'ai " + this.âge + " ans.");
      };

// Etape 3 : Ajouter une méthode "etudier" à l'objet créé par la fonction constructeur "Etudiant" qui affiche un message "L'étudiant [nom] avec le matricule [matricule] étudie pour son examen."
    this.etudier = function() {
        console.log("L'étudiant " + this.nom + " avec le matricule " + this.matricule + " étudie pour son examen.")
    };
}

// Etape 4 : Utiliser la fonction constructeur "Etudiant" pour créer une instance de l'objet "Etudiant" en utilisant les valeurs "Jane" et "22" pour les propriétés "nom" et "âge", et "123456" pour la propriété "matricule"
let etudiant1 = new Etudiant("Jane", 22, 123456);

// Etape 5 : Appeler la méthode "sePresenter" sur l'instance de l'objet "Etudiant" pour afficher le message "Bonjour, je m'appelle Jane et j'ai 22 ans."
etudiant1.sePresenter();

// Etape 6 : Appeler la méthode "etudier" sur l'instance de l'objet "Etudiant" pour afficher le message "L'étudiant Jane avec le matricule 123456 étudie pour son examen."
etudiant1.etudier();




// Exercice DOM : Construction d'un carrousel d'images à l'aide d'une fonction constructeur


// Etape 1 : Créer une fonction constructeur "Carrousel" qui prend en paramètre un tableau d'images et un identifiant d'élément HTML

// Compris sans l'aide de google
function Carrousel(images, carrouselId){
	this.images = images;
	this.carrouselId = carrouselId;
//Etape 3 : Ajouter une propriété "indexActuel" à l'objet qui indique l'index de l'image actuellement affichée

// Compris sans l'aide de google
	this.indexActuel = 0;

// Etape 4 : Ajouter des méthodes "suivant" et "precedent" à l'objet pour naviguer entre les images du carrousel.

// Compris sans l'aide de google

this.suivant = function(){
    if(this.indexActuel < this.images.length - 1){
        this.indexActuel++;
        this.afficherImage();
    }else{
        this.indexActuel = 0;
        this.afficherImage();
    }
};
// Compris sans l'aide de google
this.precedent = function(){
    if(this.indexActuel > 0){
        this.indexActuel--;
        this.afficherImage();
    }else{
        this.indexActuel = this.images.length - 1;
        this.afficherImage();
    }
};

// Etape 5 : Utiliser les méthodes "appendChild" et "setAttribute" de l'objet DOM pour ajouter les images au carrousel et les mettre en forme

// Aide de google pour le setAttribute et le createElement de type img
this.afficherImage = function(){
    let element = document.getElementById(this.carrouselId);
    let image = document.createElement('img');
    image.src = this.images[this.indexActuel];
    image.setAttribute('style', 'width:100%;');
    element.innerHTML = '';
    element.appendChild(image);
};
// Ajouter une fonction pour faire défiler automatiquement les images toutes les 3 secondes

//  Aide de google pour la syntaxe de setInterval 
this.auto = function(){
    setInterval(() => {
        this.suivant();
    }, 3000);
};
}

// Etape 2 : Utiliser la fonction constructeur pour créer une instance de l'objet "Carrousel" en utilisant un tableau d'images et l'identifiant de l'élément HTML où vous voulez afficher le carrousel.
// Compris sans l'aide de google
let carrousel = new Carrousel(['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'], 'carrousel-container');


// Compris sans l'aide de google
carrousel.afficherImage();
carrousel.auto();
// Ajouter des boutons "suivant" et "precedent" à l'HTML et utiliser les méthodes "addEventListener" pour les rendre interactifs
// Compris sans l'aide de google

// Etape 6 : Ajouter des boutons "suivant" et "precedent" à l'HTML et utiliser les méthodes "addEventListener" pour les rendre interactifs
let btnSuivant = document.getElementById('carrousel-bouton-suivant');
let btnPrecedent = document.getElementById('carrousel-bouton-précédent');
// aide de google pour le.bind
btnSuivant.addEventListener('click', carrousel.suivant.bind(carrousel));
btnPrecedent.addEventListener('click', carrousel.precedent.bind(carrousel));
           

// Je n'ai pas trouvé le moyen de faire l'exercice du carrousel sans
// tout mettre dans la fonction constructeur, j'ai essayé plusieurs façon
// le code ne pouvais pas être exécuter en dehors.
// De ce fait, certaines étapes ne sont pas dans l'ordre