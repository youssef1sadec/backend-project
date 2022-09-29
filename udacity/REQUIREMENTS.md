API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

# API Endpoints

### Products

### Index - getAllProducts **`token required `**

- http verb `GET`
- Endpoints:- `/pro`

### Show - getOneProduct **`token required `**

- http verb `GET`
- Endpoints:- `/pro/:id`

### Create - createProduct **`token required `**

- http verb `POST`
- Endpoints:- `/pro`

## Users

### index - getAllUsers

- http verb `GET`
- Endpoints:- `/users`

### Show - getOneUser **`token required `**

- http verb `GET`
- Endpoints:- `/users/:id`

### Create - createUser ** `token created `**

- http verb `POST`
- Endpoints:- `/users`

### delete - destroyOneRow **`token required `**

- http verb `DELETE`
- Endpoints:- `/users/:id`

## Orders

### orderProduct - getOrder

- http verb `POST`
- Endpoints:- `/order`

### orderProduct - addproduct **`token required `**

- http verb `POST`
- Endpoints:- `/orders/:id/products`

Data Shapes
`TYPESCRIPT`
type users={

- id: number,
- first_name : string,
- last_name?: string,
- email : string,
- pass: string
  }

product = {

- id: number;
  -name_pro: string;
- price: number;
  };

type orders = {

- id: number | undefined;
- use_id: number;
- statue: string;
  }

type orderProduct ={

- id: number | undefined;
- quantity: number;
- order_id: string;
- product_id: string;
  };
  data shape

CREATE TABLE product (
id SERIAL PRIMARY KEY,
name_pro VARCHAR(124),
price integer
)
CREATE TABLE orders (
id SERIAL PRIMARY KEY,
use_id bigint REFERENCES users(id),
statue VARCHAR(255)
) ;

CREATE TABLE orders_product (
id SERIAL PRIMARY KEY,
quantity integer,
order_id bigint REFERENCES orders(id),
product_id bigint REFERENCES product(id)
);
CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(205),
last_name VARCHAR(255),
email VARCHAR(255),
pass VARCHAR(255)
)


## endpoints

> - GET : http://localhost:3130/users
> - GET : http://localhost:3130/users/:id
> - POST : http://localhost:3130/users
> - DELETE : http://localhost:3130/users/:id
> - GET : http://localhost:3130/pro
> - GET : http://localhost:3130/pro/:id
> - POST : http://localhost:3130/pro
> - POST : http://localhost:3130/order
> - POST : http://localhost:3130/orders/products

