# groceryService
Grocery RESTFul API, CRUD function

## Run docker-compose for web and db containers

After running `docker-compose up` and you should get webservice running:

The api is running at `http://localhost:4002/api`

* Get All items 
    `http://localhost:4002/api/items` (GET)
* Add item
    `http://localhost:4002/api/items` (POST) {name: string, price: number}
* Find item by name
    `http://localhost:4002/api/items/:item_name` (GET)
* Update item
    `http://localhost:4002/api/items/:item_id` (PUT) {name: string, price: number}
* Delete item
    `http://localhost:4002/api/items/:item_id` (DELETE)