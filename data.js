let actualDate = '2022-10-15'
let events = [
    {
        name: "Feria Escolar",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook1.jpg?alt=media&token=a6349643-ceb2-4603-af56-06ce9dd040ea",
        date: "2022-06-01",
        description: "Traiga su libro escolar sin usar y tome el que necesita.",
        category: "Libros",
        place: "SUM",
        capacity: 50000,
        assistance: 38429,
        price: 2,
    },{
        name: "Fantasia 2022",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook2.jpg?alt=media&token=5e236c43-40d8-4fd0-aed8-fe6cf59c3ef4",
        date: "2022-07-23",
        description: "Las mejores obras literarias de un género cautivador lleno de personajes míticos.",
        category: "Libros",
        place: "SUM",
        capacity: 50000,
        assistance: 44029,
        price: 4,
    },{
        name: "Feria de cocina",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook4.jpg?alt=media&token=d771f7c5-b63a-467b-8a06-4e2f52555dc0",
        date: "2022-09-14",
        description: "Si eres un amante de la gastronomía ven a buscar el recetario que mejor se adapte a tu gusto y al de tu familia.",
        category: "Libros",
        place: "SUM",
        capacity: 50000,
        assistance: 29985,
        price: 2,
    },{
        name: "Feria universitaria",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook1.jpg?alt=media&token=a6349643-ceb2-4603-af56-06ce9dd040ea",
        date: "2022-11-09",
        description: "Traiga sus libros de texto sin usar y tome uno que necesite.",
        category: "Libros",
        place: "SUM",
        capacity: 50000,
        price: 2,
    },{
        name: "Los mejores",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook5.jpg?alt=media&token=3b2fe8d4-8e08-4418-943d-f523a7145f41",
        date: "2023-01-06",
        description: "Conoce las mejores obras de la literatura y llévate la que más te atrape.",
        category: "Libros",
        place: "SUM",
        capacity: 50000,
        price: 5,
    },{
        name: "Solo Harry",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook6.jpg?alt=media&token=e21ab0b3-bcc0-4f20-b19f-64a0081e4051",
        date: "2023-02-26",
        description: "Si eres un Pottermaniáco te encantará esta convención única que se lleva a cabo en la ciudad.",
        category: "Libros",
        place: "SUM",
        capacity: 50000,
        price: 5,
    },{
        name: "Aladdin",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema1.jpg?alt=media&token=65cd3e27-b2d1-4d20-9816-4111137972e7",
        date: "2019-05-24",
        description: "Te invitamos a ver al personaje clásico de Disney en nuevas aventuras.",
        category: "Cine",
        place: "Showcase",
        capacity: 2500,
        assistance: 1875,
        price: 4
    },{
        name: "The new mutants",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema2.jpg?alt=media&token=39d167d8-d07a-401e-a9a7-ad658b6f9b59",
        date: "2020-08-28",
        description: "Five young mutants discover their abilities while being held in a secret facility against their will, struggling to escape their past sins and save themselves.",
        category: "Cine",
        place: "Showcase",
        capacity: 1500,
        assistance: 759,
        price: 5
    },{
        name: "SpiderMan No Way Home",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema3.jpg?alt=media&token=abae4739-5c14-47c8-a747-b83777d13fd4",
        date: "2021-12-17",
        description: "La vida del héroe se vuelve loca después de que todos conocen su identidad.",
        category: "Cine",
        place: "Showcase",
        capacity: 1500,
        assistance: 1480,
        price: 5
    },{
        name: "The Batman",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema4.jpg?alt=media&token=f8353a3f-7ce9-46a9-99b3-69827a26a7d7",
        date: "2022-03-04",
        description: "Ven a ver a Batman luchar contra el crimen en Ciudad Gotica.",
        category: "Cine",
        place: "Showcase",
        capacity: 3000,
        assistance: 2498,
        price: 5
    },{
        name: "Dr Strange 2",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema5.jpg?alt=media&token=e1773303-9fdf-40e9-946e-e8350440b441",
        date: "2022-05-05",
        description: "El Dr. Stephen Strange abre un portal al multiverso usando un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza que podría destruirlo todo.",
        category: "Cine",
        place: "Showcase",
        capacity: 3000,
        assistance: 2989,
        price: 6
    },{
        name: "Wakanda Forever",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema6.jpg?alt=media&token=536c3fb8-261c-4b55-a00e-c97132239e89",
        date: "2022-11-10",
        description: "Las fuerzas invasoras de todo el mundo apuntan al vibranio de Wakanda.",
        category: "Cine",
        place: "Showcase",
        capacity: 2000,
        price: 6
    },{
        name: "Guardianes de la galaxia 3",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema7.jpg?alt=media&token=57e3e867-259c-4df9-bfe5-7a3ef72c4c85",
        date: "2023-05-05",
        description: "Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a los Guardianes de la Galaxia en una misión para defender el universo y proteger a uno de los suyos.",
        category: "Cine",
        place: "Showcase",
        capacity: 3000,
        price: 7
    },{
        name: "10K for life",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton7.jpg?alt=media&token=bf354ec0-e307-422e-80d6-bcc80f883c9d",
        date: "2022-03-01",
        description: "Ven y haz ejercicio, mejora tu salud y estilo de vida.",
        category: "Carreras",
        place: "Londres",
        capacity: 200000,
        assistance: 198900,
        price: 2
    },{
        name: "15K NY",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton6.jpg?alt=media&token=c0fcb7f7-0a57-40e4-bc34-5990fb3f6bba",
        date: "2022-08-21",
        description: "Estaremos recaudando fondos para hospitales y atención médica en este evento único que se llevará a cabo en la Gran Manzana.",
        category: "Carreras",
        place: "New York",
        capacity: 1000000,
        assistance: 926981,
        price: 5
    },{
        name: "Buenos Aires corre",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton5.jpg?alt=media&token=4b5e604a-22fc-4d13-b519-11ff3300d136",
        date: "2022-09-07",
        description: "Ven y únete a nosotros en la edición 3ed de este maratón.",
        category: "Carreras",
        place: "Buenos Aires",
        capacity: 500000,
        assistance: 492688,
        price: 3
    },{
        name: "Love NY",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton4.jpg?alt=media&token=11b89ece-7927-44f0-957e-0ef57fb53cfd",
        date: "2022-11-12",
        description: "Te esperamos en la sexta edición por toda la Gran Manzana.",
        category: "Carreras",
        place: "New York",
        capacity: 1000000,
        price: 5
    },{
        name: "Por la vida",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton3.jpg?alt=media&token=c81b9dc9-3c93-4bd4-9ebb-078c789c1d8c",
        date: "2023-01-05",
        description: "Si disfrutaste la edición del año pasado, esta te encantará.",
        category: "Carreras",
        place: "Cordoba",
        capacity: 300000,
        price: 2
    },{
        name: "4k Cancer",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton2.jpg?alt=media&token=1c60a4db-36d9-46a2-be5d-9440c18a57bd",
        date: "2023-03-18",
        description: "Recaudaremos fondos para los pacientes con cáncer.",
        category: "Carreras",
        place: "Mar del Plata",
        capacity: 300000,
        price: 2
    },{
        name: "15K Buenos Aires",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton1.jpg?alt=media&token=5aca46fc-e7b4-48d5-be67-95c42ec73c93",
        date: "2023-05-30",
        description: "Únase a nosotros por una vida más saludable y una ciudad más limpia.",
        category: "Carreras",
        place: "Buenos Aires",
        capacity: 500000,
        price: 3
    },{
        name: "Colectividades",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol1.jpg?alt=media&token=6ffc67e1-0d21-49da-b850-f1bf6884d65b",
        date: "2021-12-12",
        description: "Disfruta de tus platos favoritos, de diferentes países, en un evento único para toda la familia.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Korea",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol2.jpg?alt=media&token=3fee6747-5273-4b70-b3d6-88847354afbf",
        date: "2022-01-10",
        description: "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 48516,
        price: 10,
    },{
        name: "Japon",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol3.jpg?alt=media&token=7f1df5af-1f90-4016-a692-286f464f71cf",
        date: "2022-02-25",
        description: "Disfruta de los mejores platos japoneses, con chefs internacionales y eventos increíbles.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 49618,
        price: 10,
    },{
        name: "Medio Oeste",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol4.jpg?alt=media&token=a9bacbc3-0e98-4870-b170-b15c1a9f35b6",
        date: "2022-04-08",
        description: "Reunimos a las colectividades de Oriente Medio en un evento único para disfrutar en familia.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Rápida",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol5.jpg?alt=media&token=b8524a35-c1c6-4f06-b0fc-577a048b9ed8",
        date: "2022-06-27",
        description: "¿Eres un amante de la comida rápida? Tenemos el evento para ti, donde reunimos a las mejores cadenas de comida rápida.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Italia",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol6.jpg?alt=media&token=c3267b6c-aa3e-4ac0-a439-aa93f2a3a099",
        date: "2022-08-12",
        description: "Disfruta de los mejores platillos en este increíble evento culinario.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Arabia",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol7.jpg?alt=media&token=1139c7d7-9ea6-4a4b-b897-1c6eee2044fd",
        date: "2022-10-12",
        description: "Una invitación a disfrutar de los sabores de Oriente Medio.",
        category: "Comida",
        place: "SUM",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Parque Jurasico",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus1.jpg?alt=media&token=cd8f447a-5b7d-4aec-ab8e-4e7a07364e33",
        date: "2022-07-05",
        description: "Vamos a conocer a los dinosaurios más grandes del museo de paleontología.",
        category: "Museo",
        place: "Campo",
        capacity: 10000,
        assistance: 6589,
        price: 3
    },{
        name: "Museo de Paris",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus2.jpg?alt=media&token=44fb39af-14db-4992-a76a-6e05e4665d0c",
        date: "2022-08-21",
        description: "Un recorrido único en la ciudad de las luces, conoce uno de los lugares más icónicos.",
        category: "Museo",
        place: "Paris",
        capacity: 5200,
        assistance: 3506,
        price: 10
    },{
        name: "Museo de bellas artes",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus3.jpg?alt=media&token=6fc0a852-6a3f-405e-aa61-f8b39b7b8ce4",
        date: "2022-10-10",
        description: "Una exposición de artistas seleccionados explora los diversos enfoques de la abstracción desarrollados desde 1950.",
        category: "Museo",
        place: "Buenos Aires",
        capacity: 1000,
        assistance: 876,
        price: 2
    },{
        name: "MALBA",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus4.jpg?alt=media&token=4f1b391b-a0a1-4eca-a611-ba4b9a5912fb",
        date: "2022-12-02",
        description: "Obras únicas de artistas internacionales y nacionales te esperan en la exposición de este año.",
        category: "Museo",
        place: "Buenos Aires",
        capacity: 1000,
        price: 2
    },{
        name: "Acrópolis",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus5.jpg?alt=media&token=0f209d91-fc39-4181-acf8-eec31a339a62",
        date: "2023-02-19",
        description: "Uno de los museos más importantes del mundo alberga los hallazgos de un solo sitio arqueológico, la Acrópolis de Atenas.",
        category: "Museo",
        place: "Atena",
        capacity: 1600,
        price: 10
    },{
        name: "Museo Británico",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus6.jpg?alt=media&token=b40d0801-1b9d-4852-94d3-a8277a2d4b85",
        date: "2023-05-02",
        description: "Cultura e historia combinadas en este espacio único.",
        category: "Museo",
        place: "Inglaterra",
        capacity: 1200,
        price: 8
    },{
        name: "Noche del horror",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi1.jpg?alt=media&token=3ffb8756-f04d-4053-8f60-8d5f6105e054",
        date: "2022-07-09",
        description: "Ven con tu disfraz más terrorífico y gana increíbles premios.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        assistance: 42006,
        price: 6
    },{
        name: "Comicon",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi2.jpg?alt=media&token=93127ee0-9840-4429-ba34-d1fe6f706af8",
        date: "2022-08-12",
        description: "Para los amantes del cómic, todos tus personajes favoritos reunidos en un solo lugar.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        assistance: 45781,
        price: 10
    },{
        name: "Dia de la primavera",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi3.jpg?alt=media&token=888af589-59d2-4d91-8b9f-dc225c95ee5b",
        date: "2022-10-21",
        description: "Ven a celebrar la primavera disfrazado de tu personaje favorito.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        price: 10
    },{
        name: "Colectividades",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi4.jpg?alt=media&token=3102c9c5-19ef-4a83-aaf9-079b6241accb",
        date: "2022-12-21",
        description: "Te espera un evento cultural único.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        price: 2
    },{
        name: "Fiesta de los niños",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi5.jpg?alt=media&token=9e8693c9-a3d4-4c31-bafd-4f70950e96e2",
        date: "2023-02-23",
        description: "Trae a tu hijo con su traje favorito.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        price: 1
    },{
        name: "Fiesta Pirata",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi6.jpg?alt=media&token=e8ef17d7-26b6-4fda-b9dd-57a53be79da8",
        date: "2023-05-23",
        description: "Ven disfrazado de pirata, bombero o enfermero, y veremos quién se lleva el gran premio.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        price: 2
    },{
        name: "Comicon",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi7.jpg?alt=media&token=b59309fc-fe06-4ae0-ac6f-1bd04142d3b2",
        date: "2023-08-12",
        description: "Si disfrutaste el año pasado, te encantará este.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        price: 10
    },{
        name: "Halloween",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi8.jpeg?alt=media&token=42ea1cec-e63e-4f05-ac97-5b030834c19a",
        date: "2023-10-31",
        description: "¿Truco o trato? Ven con tu disfraz más aterrador.",
        category: "Fiestas",
        place: "Teatro Monumental",
        capacity: 50000,
        price: 6
    },{
        name: "Metallica",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer1.jpg?alt=media&token=7a859f41-b268-4d06-8c42-c5961f9f25e9",
        date: "2022-01-22",
        description: "El único concierto de la banda más emblemática del mundo.",
        category: "Concierto",
        place: "Estadio Municipal",
        capacity: 500000,
        assistance: 497981,
        price: 20
    },{
        name: "Fiesta Electronica",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer2.jpg?alt=media&token=05776b38-2a54-4af7-a1c4-d7c38f5a3a79",
        date: "2021-01-22",
        description: "Los mejores DJs nacionales e internacionales reunidos en un solo lugar.",
        category: "Concierto",
        place: "Estadio Municipal",
        capacity: 500000,
        assistance: 48805,
        price: 20
    },{
        name: "Musica Popular",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer3.jpg?alt=media&token=52ece478-2937-4780-b5cd-d6a48306e25f",
        date: "2021-05-22",
        description: "Los mejores éxitos populares reunidos en un evento único para el disfrute de toda la familia.",
        category: "Concierto",
        place: "Estadio Municipal",
        capacity: 500000,
        assistance: 464780,
        price: 20
    },{
        name: "Clasicos",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer4.jpg?alt=media&token=16515495-5388-4e68-81fe-a9ecf3d29bab",
        date: "2021-05-22",
        description: "Ven a disfrutar de los mejores clásicos.",
        category: "Concierto",
        place: "Estadio Municipal",
        capacity: 500000,
        assistance: 421988,
        price: 20
    },{
        name: "Reggaeton",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer6.jpg?alt=media&token=540b742f-602c-4907-8507-5de0d609fd9a",
        date: "2023-01-23",
        description: "Prepárate para bailar al ritmo de las mejores bandas.",
        category: "Concierto",
        place: "Estadio Municipal",
        capacity: 500000,
        price: 20
    },{
        name: "Opera",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer5.jpg?alt=media&token=196d8d90-9b97-4a6c-b41b-1731a8aa2f1f",
        date: "2023-05-02",
        description: "Reunimos a los mejores cantantes de ópera solo para ti.",
        category: "Concierto",
        place: "Estadio Municipal",
        capacity: 500000,
        price: 20
    }
]

//FILTER: para filtrar eventos pasados y futuros
let past = events.filter(element => element.date<=actualDate)
console.log(past)
let upcoming = events.filter(element => element.date>actualDate)
console.log(upcoming)

//MAP: para transformar cada objeto y agregar la ganancia y el porcentaje de asistencia
past.map(element => {
    element.gain = element.assistance * element.price
    element.percent = Number((100 * element.assistance / element.capacity).toFixed(2))
})
console.log(past)

//SORT: para ordenar or fecha
let pastSorted = past.sort((element1,element2) => (new Date(element1.date))-(new Date(element2.date)))
console.log(pastSorted);

//REDUCE: para obtener ganancia total
let initialStat = {
    gain: 0
}
let gain = past.reduce((element1,element2) => {
    return {
        gain: element1.gain + element2.gain
    }
}, initialStat)
console.log(gain)

//SET+MAP+SPREAD: para obtener un array de categorias
let categories = new Set(events.map(event => event.category))
categories = [...categories]
console.log(categories)

//MAP+FILTER: para obtener un array con los eventos de cada categoria
let catEvents = categories.map(cat => {
    return pastSorted.filter(event => event.category===cat)
})
console.log(catEvents)

//MAP+SORT: para ordenar para ordenar los arrays de cada categoria
let sorted = catEvents.map(cadaArray => {
    return cadaArray.sort((element1,element2) => element1.percent-element2.percent)
})
console.log(sorted)

//MAP+REDUCE: para reducir las ganancias y el porcentaje de asistencia general
let zero = {
    category: "",
    gain: 0,
    capacity: 0,
    assistance: 0
}
let stats = catEvents.map(cadaArray => {
    return cadaArray.reduce((element1,element2) => {
        return {
            category: element2.category,
            gain: element1.gain + element2.gain,
            capacity: element1.capacity + element2.capacity,
            assistance: element1.assistance + element2.assistance
        }
    }, zero)
})
console.log(stats)
stats.map(element => element.percent = Number((100 * element.assistance / element.capacity).toFixed(2)))
console.log(stats)

//FOREACH: para renderizar todas las categorias
let printCategories = (array,id) => {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(cat =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <label class="d-flex align-items-center p-1" for="${cat.toLowerCase()}">${cat.toUpperCase()}
                <input class="d-flex align-items-center m-1 checkbox" type="checkbox" id="${cat.toLowerCase()}" name="letter" value="${cat.toLowerCase()}">
            </label>
            `
    })
    let checks = document.querySelectorAll('input')
    console.log(checks)
}
printCategories(categories,'checks')

//FOREACH: para renderizar todas las cards
let printEvents = (array,id) => {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(event =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <a href="evento.html?id=${event.id}" class="d-flex m-2 imgWidth hoverEvent">
            <article class="d-flex flex-column justify-content-center align-items-center imgWidth">
                <h3 class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.name}</h3>
                <img src="${event.image}" class="imgWidth">
                <p class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.category} - ${(new Date(event.date)).getDate()+1}/${(new Date(event.date)).getMonth()+1}/${(new Date(event.date)).getFullYear()}</p>
            </article>
            </a>
            `
    })
}
printEvents(pastSorted,'events')
/* 
let checks = document.querySelectorAll('input')
console.log(checks)
for (let element of checks) {
    element.addEventListener(
        'click',
        (event) => search(event,pastSorted,letters)
    )
}

function search(ev,array,let) {
    console.log(ev.target.id)
    console.log(ev.target.checked)
    if (ev.target.checked) {
        let filterLetters = let[ev.target.id]
        let filterEvents = array.filter(element => {
            element.name.startsWith(filterLetters)
        })
    }
    
} */