const api = {
    baseURL: "https://services.alhajz-alsarea.com/api/",
    mediaURL: "https://admin.alhajz-alsarea.com/ImagesRepository/",
};


const offerTypes = [
    {
        id: "1",
        title: "أيـــام"
    },
    {
        id: "1.1",
        title: "يوم كامل"
    },
    {
        id: "2",
        title: "شفت صباحى"
    },
    {
        id: "3",
        title: "شفت مسائي"
    }
];

const ArrivalTypes = [
    {
        id: 1,
        title: "رجال فقط "
    },
    {
        id: 2,
        title: "نساء"
    },
    {
        id: 3,
        title: "عوائل"
    }
];


const hotel_cities = [
    {
        "id": 1,
        "arabicName": "أربيل"
    },
    {
        "id": 3,
        "arabicName": "بغداد"
    },
    {
        "id": 4,
        "arabicName": "بلد"
    },
    {
        "id": 5,
        "arabicName": "كربلاء"
    },
    {
        "id": 6,
        "arabicName": "الدجيل"
    },
    {
        "id": 7,
        "arabicName": "دهوك"
    },
    {
        "id": 8,
        "arabicName": "سليمانية"
    }
]


const cities = [
    {
        "id": 4,
        "arabicName": "بلد"
    },
    {
        "id": 5,
        "arabicName": "كربلاء"
    },
    {
        "id": 6,
        "arabicName": "الدجيل"
    },
    {
        "id": 3,
        "arabicName": "بغداد"
    }
]

const north_cities = [
    {
        "id": 7,
        "arabicName": "دهوك"
    },
    {
        "id": 1,
        "arabicName": "أربيل"
    },
    {
        "id": 8,
        "arabicName": "سليمانية"
    }
]
export { api, offerTypes, ArrivalTypes, cities, north_cities, hotel_cities };