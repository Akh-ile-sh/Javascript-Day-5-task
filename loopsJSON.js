for (let i = 0; i < obj.menu.items.length; i++) {
  const item = obj.menu.items[i];
  console.log(item);
}

for (let key in obj.menu.items) {
  const item = obj.menu.items[key];
  console.log(item);
}

for (const item of obj.menu.items) {
  console.log(item);
}

obj.menu.items.forEach(function (item) {
  console.log(item);
});
