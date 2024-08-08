console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Ingeniería Industrial",
        "url_image": "./images/ingenieria-industrial.png",
        "desc": "Optimiza procesos, sistemas u organizaciones complejos mediante el desarrollo, la mejora y la implementación de sistemas integrados de personas (recursos humanos), riqueza, conocimiento, información y equipamiento, energía, materiales y procesos.",
        "cta": "Mostrar más...",
        "link": "./ingenieria-industrial.php"
    },
    {
        "title": "Ingeniería en Sistemas",
        "url_image": "./images/ingenieria-sistemas.png",
        "desc": "Revisa minuciosamente los datos para la creación de programas, aplicativos y herramientas que faciliten los procesos empresariales en un entorno de información segura y protegida.",
        "cta": "Mostrar más...",
        "link": "./ingenieria-sistemas.php"
    },
    {
        "title": "Administración",
        "url_image": "./images/administracion.png",
        "desc": "Asegura el funcionamiento óptimo de cada elemento dentro de la organización, promoviendo el uso eficiente de los recursos aplicándolos para la obtención de las rentabilidades propuestas.",
        "cta": "Mostrar más...",
        "link": "./administracion.php"
    }
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            //Llamar a la función
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`
                <div class='card-item' id="card-number-${index}">
                    <img src="${item.url_image}"/>
                    <div class='card-info'>
                        <p class='card-title'>${item.title}</p>
                        <p class='card-desc'>${item.desc}</p>
                        <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                    </div>
                </div>`
            )
        }
    }
    CARD.init();
})();