
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