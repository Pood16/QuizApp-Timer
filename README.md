# QuizApp-Timer
L'institut Balzac a besoin d'une application web interactive pour évaluer les connaissances des utilisateurs en français dans le cadre du TCF (Test de Connaissance du Français), leur permettant de tester leurs compétences et de découvrir leur niveau (A1, A2, B1, B2, C1, C2).

​

En tant qu'utilisateur, Je veux démarrer un quiz pour pouvoir tester mes connaissances en français.

​

Critères d'acceptation :
​

L'utilisateur clique sur un bouton "Démarrer le quiz".
La première question s'affiche avec des boutons pour chaque réponse possible.
Le score est initialisé à zéro.
​

​

​

En tant qu'utilisateur, Je veux passer à la question suivante après avoir sélectionné une réponse pour continuer le quiz.

​

Critères d'acceptation :
​

Après avoir sélectionné une réponse, un bouton "Suivant" apparaît.
En cliquant sur "Suivant", la question suivante s'affiche.
Si toutes les questions sont terminées, le score final s'affiche.
​

En tant qu'utilisateur, Je souhaite voir mon score final à la fin du quiz pour évaluer mes performances.

​

Critères d'acceptation :
​

À la fin du quiz, un message indique le score obtenu (ex. : "Votre score est de X sur Y").
Un niveau estimé est affiché en fonction du score : 2/10 ou moins = Niveau A1 6/10 = Niveau B1 8/10 = Niveau B2 9/10 = Niveau C1 10/10 = Niveau C2
Un bouton "Redémarrer" permet de rejouer le quiz depuis la première question.
​

En tant qu'utilisateur , Je veux pouvoir sauvegarder mes données et consulter mon score précédent même après avoir fermé l'application.

​

Critères d'acceptation :
​

Les données du score sont stockées dans le local storage.
En ouvrant de nouveau l'application, l'utilisateur peut voir son dernier score.
​

Bonus :

​

En tant qu'utilisateur , Je souhaite avoir un écran qui affiche la question actuelle avec un timer de 20 secondes pour gérer mon temps.

​

Critères d'acceptation :
​

Une fois la catégorie choisie, un écran affiche la question avec un timer de 20 secondes.
Si le timer expire, la question suivante s'affiche automatiquement sans permettre de réponse.
​

En tant qu'utilisateur , Je souhaite sélectionner une réponse et recevoir un retour immédiat pour savoir si elle est correcte ou incorrecte.

​

Critères d'acceptation :
​

Lorsqu'une réponse est sélectionnée, le bouton change de couleur (vert pour correcte, rouge pour incorrecte).
Si la réponse est incorrecte, la réponse correcte est également surlignée.
Les boutons de réponse deviennent désactivés après la sélection.
​

En tant qu'utilisateur , je souhaite que les questions apparaissent dans un ordre aléatoire pour une expérience de quiz unique à chaque essai.

​

Critères d'acceptation :
Les questions sont mélangées aléatoirement avant de commencer le quiz.
À chaque redémarrage, les questions apparaissent dans un ordre différent.
Le quiz conserve le suivi correct des questions posées, même en mode aléatoire.
​

​

En tant qu’utilisateur,  je souhaite pouvoir télécharger un rapport PDF récapitulatif à la fin du quiz, contenant toutes les questions posées, mes réponses sélectionnées, les réponses correctes, mon score total et le niveau atteint, afin d’évaluer mes performances et d’identifier mes domaines d’amélioration.

​

Critères d'acceptation :
​

Après la fin du quiz, un bouton de téléchargement du rapport PDF est affiché.
Le rapport PDF contient un récapitulatif complet avec :
La liste de toutes les questions posées.
Les réponses sélectionnées pour chaque question.
Les réponses correctes pour chaque question.
Le score total obtenu.
Le niveau atteint en fonction du score.
Le PDF est généré automatiquement et peut être téléchargé d’un simple clic.
Le rapport est formaté pour être facilement lisible et imprimable.
