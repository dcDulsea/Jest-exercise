test('购物清单是否包含了beer', () => {
  const shopList = [
    'cola',
    'water',
    'chips',
    'bear'
  ]
  expect(shopList).toContain('beer')
})