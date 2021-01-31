let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

const keys = map.keys()

for (let key of keys) {
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}