// MAPA

function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0.0344566, lng: -51.0666 },
        zoom: 13,
        mapTypeId: "roadmap",
    });
    // Criando a caixa de pesquisa do endereço
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Incline os resultados da busca em direção à janela de visualização do mapa atual.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    // Ouça o evento disparado quando o usuário seleciona uma previsão e recupere
    // Mais detalhe para aquele lugar.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Limpa os marcadores antigos.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // Para cada lugar, pega o ícone, nome e localização.
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Cria uma marcador para cada lugar.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );
            if (place.geometry.viewport) {
                // Apenas geocódigos têm janela de visualização.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}


