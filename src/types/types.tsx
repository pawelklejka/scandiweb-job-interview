export interface Category{
    name: string
}
export interface Currency {
    label: string
    symbol: string
}

export interface Cart{
    
}

export interface Price {
    currency: Currency
    amount: number
}

export interface Product{
    id: string
    name: string
    inStock: boolean
    gallery: Array<String>
    description: string
    category: string
    attributes: AttributeSet
    prices: Array<Price>
    brand: string
}

export interface Attribute {
    displayValue: string
    value: string
    id: string
}
export interface AttributeSet {
    id: string
    name: string
    type: string
    items: Array<Attribute>
}