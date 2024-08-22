console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Decoración de interiores",
        "url_image": "./images/interior.jpeg",
        "desc": "La decoración de interiores combina funcionalidad y estética, transformando espacios mediante la selección de colores, muebles y accesorios. Se adapta al estilo y personalidad del cliente,creando ambientes acogedores y armoniosos contribuyendo a un espacio equilibrado y atractivo..",
        "cta": "Mostrar más...",
        "link": "https://gruposantamaria.cr/?utm_term=decoracion%20hogar&utm_campaign&utm_source=adwords&utm_medium=ppc&hsa_acc=4503357278&hsa_cam=21515131881&hsa_grp=166443070538&hsa_ad=707681133002&hsa_src=g&hsa_tgt=kwd-22912686&hsa_kw=decoracion%20hogar&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPLMsyu0yqfENSogWNBEWB4eyW6ESW_ozYMOw69Ua3UpZ_w5GHcVRwaAsP2EALw_wcB"
    },
    {
        "title": "Decoración de exteriores",
        "url_image": "./images/exterior.jpeg",
        "desc": "La decoración de exteriores transforma espacios al aire libre con muebles, plantas y elementos arquitectónicos, creando ambientes funcionales y acogedores que se integran con la naturaleza y reflejan un estilo personal..",
        "cta": "Mostrar más...",
        "link": "https://fusioninmobiliariacr.com/decoracion-de-exteriores/"
    },
    {
        "title": "Decoración de terrazas",
        "url_image": "./images/terrazas.jpeg",
        "desc": "La decoración de terrazas maximiza el confort al aire libre con muebles, plantas y elementos decorativos, creando un espacio acogedor y funcional para el descanso, entretenimiento, y disfrute de la naturaleza..",
        "cta": "Mostrar más...",
        "link": "https://www.elmueble.com/casas/12-ideas-para-decorar-tu-terraza-sea-cual-sea-su-tamano-y-forma_43245"
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