export const AUTHORIZATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFsYWEgT3NhbWEiLCJyb2xlIjoiU3VwZXJBZG1pbiIsIm5iZiI6MTcxNDc3NjU5MiwiZXhwIjozMzI1MDc3NjU5MiwiaWF0IjoxNzE0Nzc2NTkyLCJpc3MiOiJodHRwczovL1NlcnZpY2VzLmFsaGFqei1hbHNhcmVhLmNvbS8iLCJhdWQiOiJodHRwczovL1NlcnZpY2VzLmFsaGFqei1hbHNhcmVhLmNvbS8ifQ.6p78vRk8xCg3t2Y7WuvDwTotFku6abCBqQgmS6FrZxY';
export const baseURL = "https://services.alhajz-alsarea.com/api";
export const PRIVACY_URL = 'https://app.alhajz-alsarea.com/privacy.html';
export const offerTypes = [
    {
        id: "0",
        title: "شهر كامل"
    },
    {
        id: "1",
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


const days = [
    {
        title: "1",
    },
    {
        title: "2",
    },
    {
        title: "3",
    },
    {
        title: "4",
    },
    {
        title: "5",
    },
    {
        title: "6",
    },
    {
        title: "7",
    },
    {
        title: "8",
    },
    {
        title: "9",
    },
    {
        title: "10",
    },
    {
        title: "11",
    },
    {
        title: "12",
    },
    {
        title: "13",
    },
    {
        title: "14",
    },
    {
        title: "15",
    },
    {
        title: "16",
    },
    {
        title: "17",
    },
    {
        title: "18",
    },
    {
        title: "19",
    },
    {
        title: "20",
    },
    {
        title: "21",
    },
    {
        title: "22",
    },
    {
        title: "23",
    },
    {
        title: "24",
    },
    {
        title: "25",
    },
    {
        title: "26",
    },
    {
        title: "27",
    },
    {
        title: "28",
    },
    {
        title: "29",
    },
    {
        title: "30",
    },
    {
        title: "31",
    },
];



const months = [
    {
        monthNumber: '1',
        monthArabic: "يناير",
        from: "2025-01-01",
        to: "2025-01-31"
    },
    {
        monthNumber: '2',
        monthArabic: "فبراير",
        from: "2025-02-01",
        to: "2025-02-28"
    },
    {
        monthNumber: '3',
        monthArabic: "مارس",
        from: "2025-03-01",
        to: "2025-03-31"
    },
    {
        monthNumber: '4',
        monthArabic: "أبريل",
        from: "2025-04-01",
        to: "2025-04-30"
    },
    {
        monthNumber: '5',
        monthArabic: "مايو",
        from: "2025-05-01",
        to: "2025-05-31"
    },
    {
        monthNumber: '6',
        monthArabic: "يونيو",
        from: "2025-06-01",
        to: "2025-06-30"
    },
    {
        monthNumber: '7',
        monthArabic: "يوليو",
        from: "2025-07-01",
        to: "2025-07-31"
    },
    {
        monthNumber: '8',
        monthArabic: "أغسطس",
        from: "2025-08-01",
        to: "2025-08-31"
    },
    {
        monthNumber: '9',
        monthArabic: "سبتمبر",
        from: "2025-09-01",
        to: "2025-09-30"
    },
    {
        monthNumber: '10',
        monthArabic: "أكتوبر",
        from: "2025-10-01",
        to: "2025-10-31"
    },
    {
        monthNumber: '11',
        monthArabic: "نوفمبر",
        from: "2025-11-01",
        to: "2025-11-30"
    },
    {
        monthNumber: '12',
        monthArabic: "ديسمبر",
        from: "2025-12-01",
        to: "2025-12-31"
    }
]



const year = [
    {
        title: new Date().getFullYear().toString()
    }
];

export { days, months, year }