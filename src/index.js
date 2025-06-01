var map = L.map('map').setView([51.505, -0.09], 13);
var trees = [];

map.addEventListener("click", (event) => {
    let lat = event.latlng.lat;
    let long = event.latlng.lng;
    let date = new Date();
    let year = date.getFullYear();

    trees.push(
        new Tree(47.5, -0.09, "Oak", 2001),
        new Tree(54.5, -0.05, "Pine", 2002),
        new Tree(49.5, -0.13, "Pine", 2003),
        new Tree(50.5, -0.16, "Magnolia", 2012),
        new Tree(52.5, -0.29, "Walnut", 2009)
    );

    L.circle([lat, long], {
        color: 'green',
        fillColor: '#008000',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);

    trees.forEach(t => {
        let tree = L.marker(t.marker).addTo(map);
        tree.bindPopup(`<b>${t.species}</b> <br><b>Age: </b>${year - t.plantingYear} <br>`);
    });
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Tree Finder Map</a>'
}).addTo(map);

class Tree {
    constructor(latitude = 0, longitude = 0, species = "", plantingYear = 0){
        this.marker = [latitude, longitude],
        this.species = species,
        this.plantingYear = plantingYear
    }
}
