import { Pool } from 'pg';
import { Reservation } from '../domain/reservation';

export class PostgresReservationRepository {
    constructor(private readonly pool: Pool) { }

    async create(reservation: Reservation): Promise<Reservation> {
        const result = await this.pool.query<{
            id: string; customer_name: string; resource_name: string;
            starts_at: Date; ends_at: Date; created_at: Date;
        }>(
            `INSERT INTO reservations (id, customer_name, resource_name, starts_at, ends_at)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, customer_name, resource_name, starts_at, ends_at, created_at`,
            [reservation.id, reservation.customerName, reservation.resourceName,
            reservation.startsAt, reservation.endsAt],
        );

        const row = result.rows[0];
        return {
            id: row.id, customerName: row.customer_name,
            resourceName: row.resource_name, startsAt: row.starts_at,
            endsAt: row.ends_at, createdAt: row.created_at,
        };
    }
}
