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



