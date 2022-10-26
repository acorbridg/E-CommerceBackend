const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  const categories = await Category.findAll({include: [{model: Product}]});
  res.json(categories)
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const category = await Category.findByPk(req.params.id, {include: [{model: Product}]});
  res.json(category)
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  const category = await Category.create(req.body)
  res.json(category)
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {where: {id: req.params.id}})
  res.send()
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  await Category.destroy({where: {id: req.params.id}})
  res.send()
});

module.exports = router;
