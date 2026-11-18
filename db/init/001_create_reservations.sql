CREATE TABLE IF NOT EXISTS reservations (
    id UUID PRIMARY KEY,
    customer_name VARCHAR(160) NOT NULL,
    resource_name VARCHAR(160) NOT NULL,
    starts_at TIMESTAMPTZ NOT NULL,
    ends_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT reservations_valid_time CHECK (ends_at > starts_at)
);