module.exports.faq = [
    {
        id: 0,
        active: true,
        question: 'Id enim duis vel leo semper est lorem',
        answer: 'Urna, tellus risus faucibus sodales et, suspendisse ac. Pharetra feugiat facilisis elementum nunc, leo sit tempus imperdiet ut.'
    },
    {
        id: 1,
        active: false,
        question: 'Id enim duis vel leo semper est lorem',
        answer: 'Urna, tellus risus faucibus sodales et, suspendisse ac. Pharetra feugiat facilisis elementum nunc, leo sit tempus imperdiet ut.'
    },
    {
        id: 2,
        active: false,
        question: 'Id enim duis vel leo semper est lorem',
        answer: 'Urna, tellus risus faucibus sodales et, suspendisse ac. Pharetra feugiat facilisis elementum nunc, leo sit tempus imperdiet ut.'
    },
    {
        id: 3,
        active: false,
        question: 'Id enim duis vel leo semper est lorem',
        answer: 'Urna, tellus risus faucibus sodales et, suspendisse ac. Pharetra feugiat facilisis elementum nunc, leo sit tempus imperdiet ut.'
    }
]

module.exports.nav = [
    {
        id: 0,
        path: "#",
        name: "O nas"
    },
    {
        id: 1,
        path: "#",
        name: "Kursy"
    },
    {
        id: 2,
        path: "Login",
        name: "Zaloguj sie"
    }
]

module.exports.footer_nav = [
    {
        id: 0,
        title: 'Produkt',
        items: [
            {
                id:0,
                path: '#',
                title: 'Cechy'
            },
            {
                id:1,
                path: '#',
                title: 'Cennik'
            },
            {
                id:2,
                path: '#',
                title: 'Kursy'
            },
            {
                id:3,
                path: '#',
                title: 'FAQ'
            },
        ]
    },
    {
        id: 1,
        title: 'Spółka',
        items: [
            {
                id:0,
                path: '#',
                title: 'Warunki usługi'
            },
            {
                id:1,
                path: '#',
                title: 'Cookie Policy'
            },
            {
                id:2,
                path: '#',
                title: 'Polityka prywatności'
            }
        ]
    },
    {
        id: 2,
        title: 'Podążaj za nami',
        items: [
            {
                id:0,
                path: '#',
                title: 'Facebook'
            },
            {
                id:1,
                path: '#',
                title: 'Instagram'
            },
            {
                id:2,
                path: '#',
                title: 'Youtube'
            },
            {
                id:3,
                path: '#',
                title: 'LinkedIn'
            }
        ]
    }
]

module.exports.howto = [
    {
        id:0,
        title: 'Online zajęcia',
        image:'img/Advantage/PlaceholderFull.png'
    },
    {
        id:1,
        title: 'Osobisty mentor',
        image:'img/Advantage/PlaceholderFull.png'
    },
    {
        id:2,
        title: 'Zadanie domowe',
        image:'img/Advantage/PlaceholderFull.png'
    },
    {
        id:3,
        title: 'Egzaminy próbne',
        image:'img/Advantage/PlaceholderFull.png'
    },
    {
        id:4,
        title: 'Sledzenie postępu',
        image:'img/Advantage/PlaceholderFull.png'
    },
    {
        id:5,
        title: 'Gwarancja zdawalności egzaminu',
        image:'img/Advantage/PlaceholderFull.png'
    },
]

module.exports.themes = [
    {
        id: 0,
        active: true,
        meta:{
            theme: 1,
            lesson_quantity: 17,
            title: 'Nierówności kwadratowe'
        },
        list:[
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
        ]
    },
    {
        id: 1,
        active: false,
        meta:{
            theme: 1,
            lesson_quantity: 17,
            title: 'Theme title'
        },
        list:[
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
        ]
    },
    {
        id: 2,
        active: false,
        meta:{
            theme: 3,
            lesson_quantity: 18,
            title: 'Theme title'
        },
        list:[
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
            'Urna, tellus risus faucibus sodales et, suspendisse ac.',
        ]
    }
]

module.exports.subscription = {
    price: 195,
    advantages:[
        {
            id: 0,
            title: 'Webinary 2 razy w tygodniu',
            icon: 'teacher'
        },
        {
            id: 1,
            title: 'Personalny mentor,który wspiera cię na całej drodze do zdanej matury',
            icon: 'student-laptop'
        },
        {
            id: 2,
            title: 'Pracy domowe ze sprawdzeniem',
            icon: 'writing'
        },
        {
            id: 3,
            title: 'Egzaminy próbne,którze są sprawdzane przez członków komisji egzaminacyjnej',
            icon: 'teacher'
        },
        {
            id: 4,
            title: 'Intelegenty system analizy błędów',
            icon: 'teacher'
        },
        {
            id: 5,
            title: 'Konkursy z realnymi nagrodami',
            icon: 'teacher'
        },
        {
            id: 6,
            title: 'Gwarancję zdawałności egzaminu',
            icon: 'teacher'
        },
        {
            id: 7,
            title: 'Cotygodniowe raporte twojego postępu',
            icon: 'teacher'
        }
    ]
}