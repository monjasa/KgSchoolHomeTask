let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log('Meow!');
  }
};

const catName = cat['name'];

cat.greeting();
cat.color = 'black';
