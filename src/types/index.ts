export interface Hero {
    id: string,
    name: string,
    description: string,
    element: string
}

export interface Heroes{
    heroes: Hero[]
}