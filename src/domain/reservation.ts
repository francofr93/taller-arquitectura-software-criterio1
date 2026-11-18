export interface Reservation {
    id: string;
    customerName: string;
    resourceName: string;
    startsAt: Date;
    endsAt: Date;
    createdAt: Date;
}

export interface CreateReservationInput {
    customerName: unknown;
    resourceName: unknown;
    startsAt: unknown;
    endsAt: unknown;
}
