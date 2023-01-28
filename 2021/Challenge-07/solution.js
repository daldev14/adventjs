export default function contains(store, product) {
  if (typeof store === 'string') return store === product
  return Object.values(store).some((single) => contains(single, product))
}