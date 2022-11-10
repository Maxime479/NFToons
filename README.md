# NFToons  


## 1. Description
Cette application `React.js` est une marketplace de NFT dédiés aux fans de dessins animés. <sub>(ou pas)</sub>  
Elle a été réalisée dans le cadre du projet Blockchain ING5 à l'ECE Paris.  
L'équipe est composée de `Maxime Saurin` et `Nicolas Lebon`, Ocres Td1. 

Cette app utilise les librairies :
- `web3` et `ethers` pour les interactions blockchain
- `react-router-dom` pour la configuration des routes de navigation 
- `firebase` pour le déploiement de l'app en ligne
> Aucune librairie n'est utilisée pour le style de l'app, elle est construite en pure `CSS`.   
  
 	
 
 	
 	

## 2. Instructions de lancement de l'app

 
### En ligne   
Rendez-vous simplement sur le site [NFToons](https://nftoons.web.app).  
  
 
 
 
### En local 
1. Cloner le repo `git clone https://github.com/Maxime479/NFToons.git` 
2. Installer les packages `npm install` 
3. Lancer l'app `npm start` 
4. Se rendre sur l'[adresse locale](http://localhost:3000)
 

## 3. Comment utiliser l'app ?
- À l'arrivée sur la page d'accueil, il suffit de cliquer sur le Lion pour entrer sur le site
- La page qui suit propose une galerie des NFT disponibles sur le site
- Un CTA `Connecter mon Wallet` permet de lier son compte Metamask
- En appuyant sur le bouton `Acheter`, cela ouvre une popin qui résume la transaction à effectuer
	- En appuyant sur `Acheter` à l'intérieur de la popin, cela va effectuer la transaction
	- Il est possible de fermer la popin en cliquant à l'extérieur de celle-ci 
- En cliquant sur le le nom d'un NFT cela ouvre sa vue détaillée 
> Le site est entièrement **responsive**, pensez à le tester sur mobile :wink: 
 



## 4. Pourquoi la blockchain est importante sur ce projet ?

Le contrat est stocké dans le [fichier Solidity](src/App.js).
La blockchain est importante pour ce projet car elle permet controler la vente des NFTs. En effet, le contrat permet de vérifier que l'acheteur a bien payé le prix du NFT et que le vendeur a bien reçu le paiement. De plus, le contrat permet de vérifier que le NFT n'a pas déjà été vendu. Enfin, le contrat permet de vérifier que le vendeur est bien le propriétaire du NFT. Il donne aussi au owner du contract un controle sur la possibilité de vente des NFTs (Enable la vente). 
Ventre ses oeuvres d'art via des Nft assure l'authenticité et l'unicité de l'oeuvre. Leur vente devient donc plus sécurisée et plus fiable, ne pouvant impactée par des facteurs humains.