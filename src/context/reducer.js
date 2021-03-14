
const books = [
    {
        id: 137,
        title: "SEO 2020",
        author: "Williams, Dr. Andy",
        img:"/img/img1.jpg",
        rating: 3,
        inCart: false,
        price: 2,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 222,
        title: "Learning React",
        author: "Alex Banks & Eva Porcello",
        img:"/img/img2.jpg",
        rating: 1,
        inCart: false,
        price: 3,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 65,
        title: "JavaScript The Definitive Guide",
        author: "David Flanagan",
        img:"/img/img3.jpg",
        rating: 5,
        inCart: false,
        price: 10,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 37,
        title: "Web Programming with HTML5, CSS3, JavaScript",
        author: "John Dean",
        img:"/img/img4.jpg",
        rating: 4,
        inCart: false,
        price: 5,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 879,
        title: "React and React Native",
        author: "Adam Boduch & Roy Derks",
        img:"/img/img5.jpg",
        rating: 5,
        inCart: false,
        price: 6,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 623,
        title: "Python In Easy Steps",
        author: "Mike McGrath",
        img:"/img/img6.jpg",
        rating: 4,
        inCart: false,
        price: 12,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 789045,
        title: "PHP 7 Solutions",
        author: "David Powers",
        img:"/img/img7.jpg",
        rating: 4,
        inCart: false,
        price: 17,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 45367,
        title: "Node.js Web Development",
        author: "David Herron",
        img:"/img/img8.jpg",
        rating: 4,
        inCart: false,
        price: 8,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 20794,
        title: "Web Development & Design Foundations with HTML5",
        author: "Terry Felke Morris",
        img:"/img/img9.jpg",
        rating: 3,
        inCart: false,
        price: 3,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
    {
        id: 1030,
        title: "CSS3 Syntax Reference",
        author: "Mikael Olsson",
        img:"/img/img10.jpg",
        rating: 4,
        inCart: false,
        price: 4,
        quantity: 0,
        info: " Rastgele belki evcil hayvanlar tutulan kitap gökyüzü arş feza balıklar kanat ceviz karası sırt tekdüze teknoloji uydurma nerelerden nerelere bir kuş yüzük atabilirler yoksunluk fenalaşanlar?"
    },
];

export const booksCopy = [...books];

export const reducer = (list, action) =>{
    switch (action.type) {
        case "addtocart":
            return list.map(b => {
                if(!b.inCart && b.id === action.payload.id){
                    return {...b, quantity: 1, inCart:true}
                }
                
                return b;
            });
        case "deletefromcart":
            return list.map(b => {
                if(b.inCart && b.id === action.payload.id) {
                    return {...b, quantity: 0, inCart: false}
                }
                return b;
            });
        case "onemore":
            return list.map(b =>{
                if(b.inCart && b.quantity >=1 && b.id === action.payload.id) {
                    return {...b, quantity: b.quantity + 1}
                }
                return b;
            });
        case "oneless":
            return list.map(b => {
                if(b.quantity > 1 && b.id === action.payload.id) {
                    return {...b, quantity: b.quantity - 1}
                } else if(b.quantity === 1 && b.id === action.payload.id) {
                    return {...b, quantity: 0, inCart: false};
                }
                return b;
            })
        case "rateit":
            return list.map( b =>  {
                if(b.id === action.payload.id) {
                    return {...b, rating: action.payload.num}
                }
                return b;
            }); 
        default:
            return list;
    }
}


