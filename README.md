# Budget app

## Roadmap

1. Create an account
2. Log in
3. Create entities
4. Create relationships between entities
5. Read, delete and update entities
6. Organizations
7. Role system
8. Allow for an entity to have different states (like phases)

## Flow to create an entity creator

The main idea is that the user will tell me what their entity looks like so that they can then create them, so they need to create an Entity Blueprint first, I need to know

1. What their entity name and description is
2. What fields their entity will have (and what field type that entity is going to be)

3. Set up entity name and description
4. Set up fields your entity should have like name, lastName, age`
5. For each field, I need to know the label, what to map it to in the entity, field type, if it is required or not, if it has a default value or not
6. I create a Field doc in the database and associate it to the entity doc in mongo, so when I need to create an entity I need to get all fields related to it
7.
