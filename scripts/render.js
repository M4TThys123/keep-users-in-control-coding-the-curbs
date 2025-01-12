const smartzoneTable = document.querySelector('.card-wapper');

async function renderSmartzones(smartzones) {
      smartzones.forEach(smartzone => {
        // Create a HTML section
        smartzoneTable.insertAdjacentHTML('beforeend',
            `
            <section class="card">
                <img src="${smartzone.image}" alt="">
                <section class="card-discription">
                    <div class="title">
                        <h3 id="naam">${smartzone.name}</h3>
                        <span>
                            <p id="stad">${smartzone.town}</p>
                            <p id="locatie">${smartzone.location}</p>
                        </span>
                    </div>

                    <p id="omschrijving">${smartzone.description}</p>

                    <div class="card-information">
                        <ul class="flex">
                            <li>
                                <h4>Grootte:</h4>
                                <span id="grootte">${smartzone.size}</span>
                            </li>
                            <li>
                                <h4>Gebruik:</h4>
                                <span id="gebruik">${smartzone.usage}</span>
                            </li>
                            <li>
                                <h4>Tijdstip:</h4>
                                <span id="tijdstip">${smartzone.time}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="card-footer">
                        <h4>Functie:</h4>
                        <span id="functie">${smartzone.function}</span>
                    </div>
                </section>
            </section>
        `
        )
    })
}