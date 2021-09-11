function makeGroup() {
  let units = [];

  for (let i = 0; i < 10; i++) {
    let unit = function () {
      console.log(i);
    };

    units.push(unit);
  }

  return units;
}

let group = makeGroup();
group[0]();
group[1]();
group[2]();
