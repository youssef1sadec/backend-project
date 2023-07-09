/* Replace with your SQL commands */
CREATE TABLE orders_product (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES product(id)
);