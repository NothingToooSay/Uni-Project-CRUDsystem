import * as model from "../models/entityModel.js";

export async function getAll(req, res) {
    const entities = await model.getAllEntities();
    res.json(entities);
}

export async function getOne(req, res) {
    const entity = await model.getEntityById(req.params.id);
    if (!entity) return res.status(404).json({ error: "Not found" });
    res.json(entity);
}

export async function create(req, res) {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });
    const newEntity = await model.createEntity(name, description);
    res.status(201).json(newEntity);
}

export async function update(req, res) {
    const { name, description } = req.body;
    const updated = await model.updateEntity(req.params.id, name, description);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
}

export async function remove(req, res) {
    await model.deleteEntity(req.params.id);
    res.status(204).end();
}
