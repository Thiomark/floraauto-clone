import { CartState } from "../types/Parts"
import { CreateOrderType } from "../types/User"

export const ourServices = [
    {
        image: 'TechnicalRepairsIcon.png',
        title: 'TECHNICAL REPAIRS',
        message: 'An Automotive Technician is responsible for the repair and preventive maintenance of automotive equipment. Duties include performing emissions inspections, diagnostic testing of vehicles, and replacement of worn components.'
    },
    {
        image: 'EngineDiagnosticsIcon.png',
        title: 'ENGINE DIAGNOSTICS',
        message: 'Diagnostic tests can reveal problems within a car\'s engine, transmission, exhaust system, brakes, and other major components, as well as performance issues with the fuel injector, air flow and coolant, ignition coils, and throttle.'
    },
    {
        image: 'SystemServiceIcon.png',
        title: 'SYSTEM SERVICE',
        message: 'A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set time interval or after the vehicle has traveled a certain distance. '
    },
    {
        image: 'OilAndFilters.png',
        title: 'OIL AND FILTERS',
        message: 'An oil filter is a filter designed to remove contaminants from engine oil, transmission oil, lubricating oil, or hydraulic oil. Their chief use is in internal-combustion engines for motor vehicles (both on- and off-road )'
    },
    {
        image: 'TiresAndWheels.png',
        title: 'TIRES AND WHEELS',
        message: 'Tyres provide a footprint, called a contact patch, that is designed to match the weight of the vehicle with the bearing strength of the surface that it rolls over by providing a bearing pressure that will not deform the surface '
    },
    {
        image: 'ElectricalSystem.png',
        title: 'ELECTRICAL SYSTEM',
        message: 'The vehicle electrical system of a motor vehicle comprises the alternator as the energy converter, one or more batteries as the energy accumulators and the electrical equipment as consumers. The energy from the battery is supplied to the starter (consumer, which then starts the vehicle engine.'
    }
]

export interface QnA {
    question: String,
    answer: String
}

export const questionAndAnswer: Array<QnA> = [
    {
        question: 'How Do I Schedule a Service Appointment?',
        answer: 'Head over to our contact page and fill the Appointment form in.'
    },
    {
        question: 'Must I Get Air Conditioning Serviced?',
        answer: 'Yes! Air conditioning is a great asset to have in your car! Especially when the weather changes! We offer a great service with prices that will make you smile.'
    },
    {
        question: 'Where Can I Find More Information?',
        answer: 'Head over to our contact page and fill the call me back form along with any question(s) you have and one of our experienced workers will get back to you ASAP!'
    }
]

export const singleUser = {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3NDYwNjM1LCJleHAiOjE2NzAwNTI2MzV9.2F074oR4ByaHaKAtAscMylg1-XVC3e35iVKpLdC-jLQ",
    "user": {
        "id": 1,
        "username": "tumi2",
        "email": "tumi@tumi.com",
        "provider": "local",
        "confirmed": true,
        "blocked": false,
        "createdAt": "2022-11-03T07:09:07.931Z",
        "updatedAt": "2022-11-03T07:09:07.931Z",
        "phone": null
    }
}

export const createOrder = {
    "streetAddress": "123 South Streett",
    "city": "Johannesburgg",
    "name": "Itumeleng Tsoelaa",
    "suburb": "Braamfonteinn",
    "province": "Free Statee",
    "phone": "07223451233",
    "email": "email@gmail.comm",
    "message": "Give it to the neighborr",
    "paymentMethod": "Paypal",
    "OrderedItems": {
        "shippingPrice": [
            {
                "name": "Standard shipping",
                "price": 120
            }
        ],
        "count": 3,
        "amount": 4860.2,
        "items": [
            {
                "attributes": {
                    "title": "OPEL CORSA D 1.4I 2007-2009 OIL PUMP",
                    "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models.",
                    "brand": "OPEL ",
                    "price": 4370,
                    "category": "OIL PUMP",
                    "createdAt": "2022-10-26T13:23:34.725Z",
                    "updatedAt": "2022-10-26T13:23:34.725Z",
                    "image": {
                        "data": [
                            {
                                "id": 14,
                                "attributes": {
                                    "name": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                    "alternativeText": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                    "caption": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                    "width": 800,
                                    "height": 533,
                                    "formats": {
                                        "small": {
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                            "hash": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "mime": "image/jpeg",
                                            "name": "small_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "path": null,
                                            "size": 15.96,
                                            "width": 500,
                                            "height": 333,
                                            "provider_metadata": {
                                                "public_id": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                "resource_type": "image"
                                            }
                                        },
                                        "medium": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                            "hash": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "mime": "image/jpeg",
                                            "name": "medium_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "path": null,
                                            "size": 30.9,
                                            "width": 750,
                                            "height": 500,
                                            "provider_metadata": {
                                                "public_id": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                "resource_type": "image"
                                            }
                                        },
                                        "thumbnail": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                            "hash": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "mime": "image/jpeg",
                                            "name": "thumbnail_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "path": null,
                                            "size": 4.9,
                                            "width": 235,
                                            "height": 156,
                                            "provider_metadata": {
                                                "public_id": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                "resource_type": "image"
                                            }
                                        }
                                    },
                                    "hash": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "size": 34.25,
                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                    "previewUrl": null,
                                    "provider": "cloudinary",
                                    "provider_metadata": {
                                        "public_id": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                        "resource_type": "image"
                                    },
                                    "createdAt": "2022-10-26T13:23:23.400Z",
                                    "updatedAt": "2022-10-26T13:23:23.400Z"
                                }
                            }
                        ]
                    }
                },
                "id": 11,
                "quantity": 1,
                "total": 0
            },
            {
                "attributes": {
                    "title": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS",
                    "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models.",
                    "brand": "VW",
                    "price": 90,
                    "category": "CAMSHAFT",
                    "createdAt": "2022-10-26T13:25:04.041Z",
                    "updatedAt": "2022-10-26T13:25:04.041Z",
                    "image": {
                        "data": [
                            {
                                "id": 15,
                                "attributes": {
                                    "name": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                    "alternativeText": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                    "caption": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                    "width": 800,
                                    "height": 533,
                                    "formats": {
                                        "small": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                            "hash": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "mime": "image/jpeg",
                                            "name": "small_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "path": null,
                                            "size": 23.4,
                                            "width": 500,
                                            "height": 333,
                                            "provider_metadata": {
                                                "public_id": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                "resource_type": "image"
                                            }
                                        },
                                        "medium": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                            "hash": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "mime": "image/jpeg",
                                            "name": "medium_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "path": null,
                                            "size": 46.58,
                                            "width": 750,
                                            "height": 500,
                                            "provider_metadata": {
                                                "public_id": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                "resource_type": "image"
                                            }
                                        },
                                        "thumbnail": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                            "hash": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "mime": "image/jpeg",
                                            "name": "thumbnail_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "path": null,
                                            "size": 6.66,
                                            "width": 235,
                                            "height": 156,
                                            "provider_metadata": {
                                                "public_id": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                "resource_type": "image"
                                            }
                                        }
                                    },
                                    "hash": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "size": 52.08,
                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                    "previewUrl": null,
                                    "provider": "cloudinary",
                                    "provider_metadata": {
                                        "public_id": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                        "resource_type": "image"
                                    },
                                    "createdAt": "2022-10-26T13:24:57.846Z",
                                    "updatedAt": "2022-10-26T13:24:57.846Z"
                                }
                            }
                        ]
                    }
                },
                "id": 12,
                "quantity": 1,
                "total": 0
            },
            {
                "attributes": {
                    "title": "FORD IKON 1.6I 2009-2012 BIG END BEARING",
                    "description": "\nWe have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models.",
                    "brand": "FORD ",
                    "price": 400.2,
                    "category": null,
                    "createdAt": "2022-10-26T13:34:34.387Z",
                    "updatedAt": "2022-10-26T13:34:34.387Z",
                    "image": {
                        "data": [
                            {
                                "id": 18,
                                "attributes": {
                                    "name": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                    "alternativeText": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                    "caption": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                    "width": 800,
                                    "height": 533,
                                    "formats": {
                                        "small": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                            "hash": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "mime": "image/jpeg",
                                            "name": "small_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "path": null,
                                            "size": 30.32,
                                            "width": 500,
                                            "height": 333,
                                            "provider_metadata": {
                                                "public_id": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                "resource_type": "image"
                                            }
                                        },
                                        "medium": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                            "hash": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "mime": "image/jpeg",
                                            "name": "medium_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "path": null,
                                            "size": 60.08,
                                            "width": 750,
                                            "height": 500,
                                            "provider_metadata": {
                                                "public_id": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                "resource_type": "image"
                                            }
                                        },
                                        "thumbnail": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                            "hash": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "mime": "image/jpeg",
                                            "name": "thumbnail_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "path": null,
                                            "size": 8.22,
                                            "width": 235,
                                            "height": 156,
                                            "provider_metadata": {
                                                "public_id": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                "resource_type": "image"
                                            }
                                        }
                                    },
                                    "hash": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "size": 67.36,
                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                    "previewUrl": null,
                                    "provider": "cloudinary",
                                    "provider_metadata": {
                                        "public_id": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                        "resource_type": "image"
                                    },
                                    "createdAt": "2022-10-26T13:34:25.902Z",
                                    "updatedAt": "2022-10-26T13:34:25.902Z"
                                }
                            }
                        ]
                    }
                },
                "id": 15,
                "quantity": 1,
                "total": 0
            }
        ]
    },
    "user_id": 1
}

export const cart: any = {
    "shippingPrice": [
        {
            "name": "Standard shipping",
            "price": 120
        }
    ],
    "count": 3,
    "amount": 4860.2,
    "items": [
        {
            "attributes": {
                "title": "OPEL CORSA D 1.4I 2007-2009 OIL PUMP",
                "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models.",
                "brand": "OPEL ",
                "price": 4370,
                "category": "OIL PUMP",
                "createdAt": "2022-10-26T13:23:34.725Z",
                "updatedAt": "2022-10-26T13:23:34.725Z",
                "image": {
                    "data": [
                        {
                            "id": 14,
                            "attributes": {
                                "name": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                "alternativeText": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                "caption": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                "width": 800,
                                "height": 533,
                                "formats": {
                                    "small": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                        "hash": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                        "mime": "image/jpeg",
                                        "name": "small_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                        "path": null,
                                        "size": 15.96,
                                        "width": 500,
                                        "height": 333,
                                        "provider_metadata": {
                                            "public_id": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "resource_type": "image"
                                        }
                                    },
                                    "medium": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                        "hash": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                        "mime": "image/jpeg",
                                        "name": "medium_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                        "path": null,
                                        "size": 30.9,
                                        "width": 750,
                                        "height": 500,
                                        "provider_metadata": {
                                            "public_id": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "resource_type": "image"
                                        }
                                    },
                                    "thumbnail": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                        "hash": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                        "mime": "image/jpeg",
                                        "name": "thumbnail_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                        "path": null,
                                        "size": 4.9,
                                        "width": 235,
                                        "height": 156,
                                        "provider_metadata": {
                                            "public_id": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "resource_type": "image"
                                        }
                                    }
                                },
                                "hash": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 34.25,
                                "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                "previewUrl": null,
                                "provider": "cloudinary",
                                "provider_metadata": {
                                    "public_id": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                    "resource_type": "image"
                                },
                                "createdAt": "2022-10-26T13:23:23.400Z",
                                "updatedAt": "2022-10-26T13:23:23.400Z"
                            }
                        }
                    ]
                }
            },
            "id": 11,
            "quantity": 1,
            "total": 0
        },
        {
            "attributes": {
                "title": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS",
                "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models.",
                "brand": "VW",
                "price": 90,
                "category": "CAMSHAFT",
                "createdAt": "2022-10-26T13:25:04.041Z",
                "updatedAt": "2022-10-26T13:25:04.041Z",
                "image": {
                    "data": [
                        {
                            "id": 15,
                            "attributes": {
                                "name": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                "alternativeText": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                "caption": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                "width": 800,
                                "height": 533,
                                "formats": {
                                    "small": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                        "hash": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                        "mime": "image/jpeg",
                                        "name": "small_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                        "path": null,
                                        "size": 23.4,
                                        "width": 500,
                                        "height": 333,
                                        "provider_metadata": {
                                            "public_id": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "resource_type": "image"
                                        }
                                    },
                                    "medium": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                        "hash": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                        "mime": "image/jpeg",
                                        "name": "medium_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                        "path": null,
                                        "size": 46.58,
                                        "width": 750,
                                        "height": 500,
                                        "provider_metadata": {
                                            "public_id": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "resource_type": "image"
                                        }
                                    },
                                    "thumbnail": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                        "hash": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                        "mime": "image/jpeg",
                                        "name": "thumbnail_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                        "path": null,
                                        "size": 6.66,
                                        "width": 235,
                                        "height": 156,
                                        "provider_metadata": {
                                            "public_id": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "resource_type": "image"
                                        }
                                    }
                                },
                                "hash": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 52.08,
                                "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                "previewUrl": null,
                                "provider": "cloudinary",
                                "provider_metadata": {
                                    "public_id": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                    "resource_type": "image"
                                },
                                "createdAt": "2022-10-26T13:24:57.846Z",
                                "updatedAt": "2022-10-26T13:24:57.846Z"
                            }
                        }
                    ]
                }
            },
            "id": 12,
            "quantity": 1,
            "total": 0
        },
        {
            "attributes": {
                "title": "FORD IKON 1.6I 2009-2012 BIG END BEARING",
                "description": "\nWe have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models.",
                "brand": "FORD ",
                "price": 400.2,
                "category": null,
                "createdAt": "2022-10-26T13:34:34.387Z",
                "updatedAt": "2022-10-26T13:34:34.387Z",
                "image": {
                    "data": [
                        {
                            "id": 18,
                            "attributes": {
                                "name": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                "alternativeText": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                "caption": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                "width": 800,
                                "height": 533,
                                "formats": {
                                    "small": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                        "hash": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                        "mime": "image/jpeg",
                                        "name": "small_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                        "path": null,
                                        "size": 30.32,
                                        "width": 500,
                                        "height": 333,
                                        "provider_metadata": {
                                            "public_id": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "resource_type": "image"
                                        }
                                    },
                                    "medium": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                        "hash": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                        "mime": "image/jpeg",
                                        "name": "medium_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                        "path": null,
                                        "size": 60.08,
                                        "width": 750,
                                        "height": 500,
                                        "provider_metadata": {
                                            "public_id": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "resource_type": "image"
                                        }
                                    },
                                    "thumbnail": {
                                        "ext": ".jpg",
                                        "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                        "hash": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                        "mime": "image/jpeg",
                                        "name": "thumbnail_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                        "path": null,
                                        "size": 8.22,
                                        "width": 235,
                                        "height": 156,
                                        "provider_metadata": {
                                            "public_id": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "resource_type": "image"
                                        }
                                    }
                                },
                                "hash": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 67.36,
                                "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                "previewUrl": null,
                                "provider": "cloudinary",
                                "provider_metadata": {
                                    "public_id": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                    "resource_type": "image"
                                },
                                "createdAt": "2022-10-26T13:34:25.902Z",
                                "updatedAt": "2022-10-26T13:34:25.902Z"
                            }
                        }
                    ]
                }
            },
            "id": 15,
            "quantity": 1,
            "total": 0
        }
    ]
}

export const orders = [
    {
        "id": 6,
        "attributes": {
            "name": "Itumeleng Tsoelaa",
            "streetAddress": "123 South Streett",
            "suburb": "Braamfonteinn",
            "province": "Free Statee",
            "phone": "07223451233",
            "email": "email@gmail.comm",
            "message": "Give it to the neighborr",
            "paymentMethod": "Paypal",
            "OrderedItems": {
                "count": 3,
                "items": [
                    {
                        "id": 11,
                        "total": 0,
                        "quantity": 1,
                        "attributes": {
                            "brand": "OPEL ",
                            "image": {
                                "data": [
                                    {
                                        "id": 14,
                                        "attributes": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                            "hash": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "mime": "image/jpeg",
                                            "name": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "size": 34.25,
                                            "width": 800,
                                            "height": 533,
                                            "caption": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                                    "hash": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                    "mime": "image/jpeg",
                                                    "name": "small_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                                    "path": null,
                                                    "size": 15.96,
                                                    "width": 500,
                                                    "height": 333,
                                                    "provider_metadata": {
                                                        "public_id": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "medium": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                                    "hash": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                    "mime": "image/jpeg",
                                                    "name": "medium_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                                    "path": null,
                                                    "size": 30.9,
                                                    "width": 750,
                                                    "height": 500,
                                                    "provider_metadata": {
                                                        "public_id": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                                    "hash": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                                    "path": null,
                                                    "size": 4.9,
                                                    "width": 235,
                                                    "height": 156,
                                                    "provider_metadata": {
                                                        "public_id": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                        "resource_type": "image"
                                                    }
                                                }
                                            },
                                            "provider": "cloudinary",
                                            "createdAt": "2022-10-26T13:23:23.400Z",
                                            "updatedAt": "2022-10-26T13:23:23.400Z",
                                            "previewUrl": null,
                                            "alternativeText": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "provider_metadata": {
                                                "public_id": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                "resource_type": "image"
                                            }
                                        }
                                    }
                                ]
                            },
                            "price": 4370,
                            "title": "OPEL CORSA D 1.4I 2007-2009 OIL PUMP",
                            "category": "OIL PUMP",
                            "createdAt": "2022-10-26T13:23:34.725Z",
                            "updatedAt": "2022-10-26T13:23:34.725Z",
                            "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models."
                        }
                    },
                    {
                        "id": 12,
                        "total": 0,
                        "quantity": 1,
                        "attributes": {
                            "brand": "VW",
                            "image": {
                                "data": [
                                    {
                                        "id": 15,
                                        "attributes": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                            "hash": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "mime": "image/jpeg",
                                            "name": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "size": 52.08,
                                            "width": 800,
                                            "height": 533,
                                            "caption": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                                    "hash": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                    "mime": "image/jpeg",
                                                    "name": "small_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                                    "path": null,
                                                    "size": 23.4,
                                                    "width": 500,
                                                    "height": 333,
                                                    "provider_metadata": {
                                                        "public_id": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "medium": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                                    "hash": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                    "mime": "image/jpeg",
                                                    "name": "medium_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                                    "path": null,
                                                    "size": 46.58,
                                                    "width": 750,
                                                    "height": 500,
                                                    "provider_metadata": {
                                                        "public_id": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                                    "hash": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                                    "path": null,
                                                    "size": 6.66,
                                                    "width": 235,
                                                    "height": 156,
                                                    "provider_metadata": {
                                                        "public_id": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                        "resource_type": "image"
                                                    }
                                                }
                                            },
                                            "provider": "cloudinary",
                                            "createdAt": "2022-10-26T13:24:57.846Z",
                                            "updatedAt": "2022-10-26T13:24:57.846Z",
                                            "previewUrl": null,
                                            "alternativeText": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "provider_metadata": {
                                                "public_id": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                "resource_type": "image"
                                            }
                                        }
                                    }
                                ]
                            },
                            "price": 90,
                            "title": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS",
                            "category": "CAMSHAFT",
                            "createdAt": "2022-10-26T13:25:04.041Z",
                            "updatedAt": "2022-10-26T13:25:04.041Z",
                            "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models."
                        }
                    },
                    {
                        "id": 15,
                        "total": 0,
                        "quantity": 1,
                        "attributes": {
                            "brand": "FORD ",
                            "image": {
                                "data": [
                                    {
                                        "id": 18,
                                        "attributes": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                            "hash": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "mime": "image/jpeg",
                                            "name": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "size": 67.36,
                                            "width": 800,
                                            "height": 533,
                                            "caption": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                                    "hash": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                    "mime": "image/jpeg",
                                                    "name": "small_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                                    "path": null,
                                                    "size": 30.32,
                                                    "width": 500,
                                                    "height": 333,
                                                    "provider_metadata": {
                                                        "public_id": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "medium": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                                    "hash": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                    "mime": "image/jpeg",
                                                    "name": "medium_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                                    "path": null,
                                                    "size": 60.08,
                                                    "width": 750,
                                                    "height": 500,
                                                    "provider_metadata": {
                                                        "public_id": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                                    "hash": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                                    "path": null,
                                                    "size": 8.22,
                                                    "width": 235,
                                                    "height": 156,
                                                    "provider_metadata": {
                                                        "public_id": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                        "resource_type": "image"
                                                    }
                                                }
                                            },
                                            "provider": "cloudinary",
                                            "createdAt": "2022-10-26T13:34:25.902Z",
                                            "updatedAt": "2022-10-26T13:34:25.902Z",
                                            "previewUrl": null,
                                            "alternativeText": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "provider_metadata": {
                                                "public_id": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                "resource_type": "image"
                                            }
                                        }
                                    }
                                ]
                            },
                            "price": 400.2,
                            "title": "FORD IKON 1.6I 2009-2012 BIG END BEARING",
                            "category": null,
                            "createdAt": "2022-10-26T13:34:34.387Z",
                            "updatedAt": "2022-10-26T13:34:34.387Z",
                            "description": "\nWe have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models."
                        }
                    }
                ],
                "amount": 4860.2,
                "shippingPrice": [
                    {
                        "name": "Standard shipping",
                        "price": 120
                    }
                ]
            },
            "createdAt": "2022-11-03T11:20:46.160Z",
            "updatedAt": "2022-11-03T11:20:46.160Z",
            "publishedAt": "2022-11-03T11:20:46.158Z",
            "city": "Johannesburgg",
            "user_id": 1
        }
    },
    {
        "id": 7,
        "attributes": {
            "name": "Itumeleng Tsoelaa",
            "streetAddress": "123 South Streett",
            "suburb": "Braamfonteinn",
            "province": "Free Statee",
            "phone": "07223451233",
            "email": "email@gmail.comm",
            "message": "Give it to the neighborr",
            "paymentMethod": "Paypal",
            "OrderedItems": {
                "count": 3,
                "items": [
                    {
                        "id": 11,
                        "total": 0,
                        "quantity": 1,
                        "attributes": {
                            "brand": "OPEL ",
                            "image": {
                                "data": [
                                    {
                                        "id": 14,
                                        "attributes": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                            "hash": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                            "mime": "image/jpeg",
                                            "name": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "size": 34.25,
                                            "width": 800,
                                            "height": 533,
                                            "caption": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                                    "hash": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                    "mime": "image/jpeg",
                                                    "name": "small_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                                    "path": null,
                                                    "size": 15.96,
                                                    "width": 500,
                                                    "height": 333,
                                                    "provider_metadata": {
                                                        "public_id": "small_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "medium": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                                    "hash": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                    "mime": "image/jpeg",
                                                    "name": "medium_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                                    "path": null,
                                                    "size": 30.9,
                                                    "width": 750,
                                                    "height": 500,
                                                    "provider_metadata": {
                                                        "public_id": "medium_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790602/thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2.jpg",
                                                    "hash": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                                    "path": null,
                                                    "size": 4.9,
                                                    "width": 235,
                                                    "height": 156,
                                                    "provider_metadata": {
                                                        "public_id": "thumbnail_opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                        "resource_type": "image"
                                                    }
                                                }
                                            },
                                            "provider": "cloudinary",
                                            "createdAt": "2022-10-26T13:23:23.400Z",
                                            "updatedAt": "2022-10-26T13:23:23.400Z",
                                            "previewUrl": null,
                                            "alternativeText": "opel corsa d  1 4i 2007-2009 oil pump.jpg",
                                            "provider_metadata": {
                                                "public_id": "opel_corsa_d_1_4i_2007_2009_oil_pump_376d1b0dc2",
                                                "resource_type": "image"
                                            }
                                        }
                                    }
                                ]
                            },
                            "price": 4370,
                            "title": "OPEL CORSA D 1.4I 2007-2009 OIL PUMP",
                            "category": "OIL PUMP",
                            "createdAt": "2022-10-26T13:23:34.725Z",
                            "updatedAt": "2022-10-26T13:23:34.725Z",
                            "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models."
                        }
                    },
                    {
                        "id": 12,
                        "total": 0,
                        "quantity": 1,
                        "attributes": {
                            "brand": "VW",
                            "image": {
                                "data": [
                                    {
                                        "id": 15,
                                        "attributes": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                            "hash": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                            "mime": "image/jpeg",
                                            "name": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "size": 52.08,
                                            "width": 800,
                                            "height": 533,
                                            "caption": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                                    "hash": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                    "mime": "image/jpeg",
                                                    "name": "small_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                                    "path": null,
                                                    "size": 23.4,
                                                    "width": 500,
                                                    "height": 333,
                                                    "provider_metadata": {
                                                        "public_id": "small_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "medium": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790697/medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                                    "hash": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                    "mime": "image/jpeg",
                                                    "name": "medium_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                                    "path": null,
                                                    "size": 46.58,
                                                    "width": 750,
                                                    "height": 500,
                                                    "provider_metadata": {
                                                        "public_id": "medium_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666790696/thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419.jpg",
                                                    "hash": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                                    "path": null,
                                                    "size": 6.66,
                                                    "width": 235,
                                                    "height": 156,
                                                    "provider_metadata": {
                                                        "public_id": "thumbnail_VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                        "resource_type": "image"
                                                    }
                                                }
                                            },
                                            "provider": "cloudinary",
                                            "createdAt": "2022-10-26T13:24:57.846Z",
                                            "updatedAt": "2022-10-26T13:24:57.846Z",
                                            "previewUrl": null,
                                            "alternativeText": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS.jpg",
                                            "provider_metadata": {
                                                "public_id": "VOLKSWAGEN_GOLF_4_1_9_TDI_1999_2004_CAM_FOLLOWERS_487ef38419",
                                                "resource_type": "image"
                                            }
                                        }
                                    }
                                ]
                            },
                            "price": 90,
                            "title": "VOLKSWAGEN GOLF 4 1.9TDI 1999-2004 CAM FOLLOWERS",
                            "category": "CAMSHAFT",
                            "createdAt": "2022-10-26T13:25:04.041Z",
                            "updatedAt": "2022-10-26T13:25:04.041Z",
                            "description": "We have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models."
                        }
                    },
                    {
                        "id": 15,
                        "total": 0,
                        "quantity": 1,
                        "attributes": {
                            "brand": "FORD ",
                            "image": {
                                "data": [
                                    {
                                        "id": 18,
                                        "attributes": {
                                            "ext": ".jpg",
                                            "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                            "hash": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                            "mime": "image/jpeg",
                                            "name": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "size": 67.36,
                                            "width": 800,
                                            "height": 533,
                                            "caption": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                                    "hash": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                    "mime": "image/jpeg",
                                                    "name": "small_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                                    "path": null,
                                                    "size": 30.32,
                                                    "width": 500,
                                                    "height": 333,
                                                    "provider_metadata": {
                                                        "public_id": "small_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "medium": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791265/medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                                    "hash": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                    "mime": "image/jpeg",
                                                    "name": "medium_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                                    "path": null,
                                                    "size": 60.08,
                                                    "width": 750,
                                                    "height": 500,
                                                    "provider_metadata": {
                                                        "public_id": "medium_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                        "resource_type": "image"
                                                    }
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "https://res.cloudinary.com/dfhlqlarh/image/upload/v1666791264/thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492.jpg",
                                                    "hash": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                                    "path": null,
                                                    "size": 8.22,
                                                    "width": 235,
                                                    "height": 156,
                                                    "provider_metadata": {
                                                        "public_id": "thumbnail_FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                        "resource_type": "image"
                                                    }
                                                }
                                            },
                                            "provider": "cloudinary",
                                            "createdAt": "2022-10-26T13:34:25.902Z",
                                            "updatedAt": "2022-10-26T13:34:25.902Z",
                                            "previewUrl": null,
                                            "alternativeText": "FORD IKON 1.6I 2009-2012 BIG END BEARING.jpg",
                                            "provider_metadata": {
                                                "public_id": "FORD_IKON_1_6_I_2009_2012_BIG_END_BEARING_f88c0dd492",
                                                "resource_type": "image"
                                            }
                                        }
                                    }
                                ]
                            },
                            "price": 400.2,
                            "title": "FORD IKON 1.6I 2009-2012 BIG END BEARING",
                            "category": null,
                            "createdAt": "2022-10-26T13:34:34.387Z",
                            "updatedAt": "2022-10-26T13:34:34.387Z",
                            "description": "\nWe have done our utmost to identify vehicle compatibility. To be certain this part fits your vehicle, please use the contact us form and supply us with your VIN/ Chassis number. This is a 17 digit unique number and is found either on your vehicle license disk or on the interior door label. There is no guarantee that this item will fit your vehicle without a compatibility check, as there are variations between models."
                        }
                    }
                ],
                "amount": 4860.2,
                "shippingPrice": [
                    {
                        "name": "Standard shipping",
                        "price": 120
                    }
                ]
            },
            "createdAt": "2022-11-03T11:39:37.421Z",
            "updatedAt": "2022-11-03T11:39:37.421Z",
            "publishedAt": "2022-11-03T11:39:37.418Z",
            "city": "Johannesburgg",
            "user_id": 1
        }
    }
]

