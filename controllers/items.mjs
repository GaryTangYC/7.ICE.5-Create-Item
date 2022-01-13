export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const newItem = async (request, response) => {
    const { name, description, price } = request.body;
    try {
      const items = await db.Item.create({
        name, description, price,
      });
      response.send(items);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, newItem,
  };
}
