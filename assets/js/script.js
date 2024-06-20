const propiedades = [
    {
        tipo: 'venta',
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        tipo: 'venta',
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        tipo: 'venta',
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        tipo: 'alquiler',
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        tipo: 'alquiler',
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        tipo: 'alquiler',
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    }
]

const venta_index = document.getElementById('venta')
if (venta_index != null) {
    venta_index.innerHTML = listar_propiedades(propiedades, 'venta', 3)
}

const alquiler_index = document.getElementById('alquiler')
if (alquiler_index != null) {
    alquiler_index.innerHTML = listar_propiedades(propiedades, 'alquiler', 3)
}

const venta_all = document.getElementById('venta_all')
if (venta_all != null) {
    venta_all.innerHTML = listar_propiedades(propiedades, 'venta', 0)
}

const alquiler_all = document.getElementById('alquiler_all')
if (alquiler_all != null) {
    alquiler_all.innerHTML = listar_propiedades(propiedades, 'alquiler', 0)
}

function listar_propiedades(list_propiedades, tipo_prop, max){
    let inner_html = `<h2>Propiedades en ${tipo_prop}</h2><div class='row'>`
    let count = 0
    for (let prop of list_propiedades){
        if (prop.tipo == tipo_prop){
            const smoke = prop.smoke ? 'Permitido fumar' : 'No se permite fumar'
            const smoke_success = prop.smoke ? 'text-success' : 'text-danger'
            const pets = prop.pets ? 'Mascotas Permitidas' : 'No se permiten mascotas'
            const pet_success = prop.pets ? 'text-success' : 'text-danger'

            inner_html +=   `<div class='col-md-4 mb-4'>` +
                            `<div class='card'>` +
                            `<img src='${prop.src}'` + // SRC
                            `class='card-img-top'` +
                            `alt='Imagen del departamento'/>` +
                            `<div class='card-body'>` +
                            `<h5 class='card-title'>${prop.nombre}</h5>` + // Nombre
                            `<p class='card-text'>${prop.descripcion}</p>` + // Descripcion
                            `<p><i class='fas fa-map-marker-alt'></i> ${prop.ubicacion}</p>` + // Ubicacion
                            `<p><i class='fas fa-bed'></i> ${prop.habitaciones} Habitaciones | ` + // Habitaciones
                            `<i class='fas fa-bath'></i> ${prop.banos} Baños </p>` + // Baños
                            `<p><i class='fas fa-dollar-sign'></i> ${prop.costo}</p>` + // Costo
                            `<p class='${smoke_success}'><i class='fas fa-smoking'></i> ${smoke}</p>` + // Smoke
                            `<p class='${pet_success}'><i class='fas fa-paw'></i> ${pets}</p></div></div></div>` // Pets

            count++
            if (max > 0){
                if (count >= max){
                    break
                }
            } else if (count >= 3) {
                inner_html += "</div><div class='row'>"
                count = 0
            }
            
        }
    }
    inner_html += "</div>"
    if (max > 0){
        inner_html += `<a href='propiedades_${tipo_prop}.html' class='btn btn-dark'>Ver todas las propiedades en ${tipo_prop}</a>`
    }
    return inner_html
}