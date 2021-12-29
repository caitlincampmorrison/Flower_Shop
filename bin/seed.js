const { db, Flower } = require("../server/db/");

const flower_name = ['Roses', 'Tulips', 'Daisies', 'Lily', 'Poppy', 'Iris']
const colorval = ['Red', 'Pink', 'Yellow', 'White', 'Orange', 'Blue']
const costval = [2, 6, 1, 4, 3, 4]
const imageurlval = ["/roses.jpg", "/tulips.jpg", "/daisy.jpg", "/lily.jpg", "/poppy.jpg", "/iris.jpg"]

const seed = async () => {
    try {
      await db.sync({ force: true });
      const [roses, tulips, daisies, lily] = await Promise.all(
        flower_name.map((name, idx) => 
           Flower.create({ name, color: colorval[idx], cost: costval[idx], image: imageurlval[idx]}),
        )
      )
      db.close();
      console.log(`Seeding successful!`);   
    } catch (err) {
      db.close();
      console.log(` Error seeding: ${err.message} ${err.stack}`);
    }
  };
  
  seed();
  //module.exports = seed