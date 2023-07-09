/* Replace with your SQL commands */
CREATE TABLE orders (
id SERIAL PRIMARY KEY,
use_id bigint REFERENCES users(id),
statue VARCHAR(255)
) ;