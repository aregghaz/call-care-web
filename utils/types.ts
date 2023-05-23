
export type imageType = {
    src: string,
    alt: string,
    width: number
    height: number
}

export interface AosInterface {
    dataAos?: TypeAos
}

export type TypeAos = {
    type: string,
    duration?: number | string,
    delay?: number | string,
}

export type TService = {
    serviceName: string,
    serviceDescription: string,
    serviceDetails: string,
    serviceId: string,
    image: string,
    shortcut?: boolean,
    important?: boolean,
    serviceIcon?: string,
}

export type TContactForm = {
    name: string,
    email: string,
    phone: string,
    city: string,
    message: string
}