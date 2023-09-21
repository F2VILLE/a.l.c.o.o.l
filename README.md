# A.L.C.O.O.L
## Aléatoirité du Levage de Capsule Original et Obligatoire Localement

Projet inspiré du [projet A.L.C.O.O.L](https://urlab.be/projects/71) de UrLab.

Interface web qui donne un ustensile pour ouvrir une bière de manière aléatoire.

### Config

`tools.json` :

Tableau contenant les ustensiles à utiliser.

Format :
```json
[
    {
        "name": "NOM",
        "image": "URL"
    }
]
```

### API

route `/generate` :
```json
{
    "name": "Nom de l'objet",
    "image": "Image de l'objet"
}
```