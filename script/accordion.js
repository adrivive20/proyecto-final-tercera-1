console.log("Accordion Cargado");

const dataAccordion = [
    {
        "title": "Carreras Universitarias",
        "desc": "Nos enfocamos en las 4 carreras más importantes del país."
    },
    {
        "title": "Carreras Universitarias",
        "desc": "Nos enfocamos en las 4 carreras más importantes del país."
    },
    {
        "title": "Carreras Universitarias",
        "desc": "Nos enfocamos en las 4 carreras más importantes del país."
    },
];

(function () {
    let ACCORDION = {
        init: function () {
            let _self = this
            //Llamamos a las funciones
            this.insertData(_self);
            this.eventhandler(_self);
        },

        insertData: function (_self) {
            dataAccordion.map(function (item, index) {
                document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function (event) {
                    console.log('event: ', event);
                    _self.showTab(event.target);
                });
            }
        },

        tplAccordionItem: function (item) {
            return (`<div class='accordion-item'>
                <div class='accordion-title'><p>${item.title}</p></div>
                <div class='accordion-desc'><p>${item.desc}</p></div>
                </div>`
            )
        },

        showTab: function (refItem) {
            let activeTab = document.querySelector('.tab-active')
            if (activeTab) {
                activeTab.classList.remove('tab-active');
            }
            console.log('Show Tab: ', refItem);
            refItem.parentElement.classList.toggle('tab-active');
        },
    }
    ACCORDION.init();
})();
