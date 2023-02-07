const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined se não passar parâmetros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna parâmetro inválido se não passar uma string', () => {
    const actual = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(123)).toBe(actual);
    expect(handlerElephants(false)).toBe(actual);
  });
  it('Retorna o número correto de elefantes ao passar "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna um array de nomes que possui o nome Jefferson ao passar "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Retorna corretamente a idade média ao passar "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Retorna null ao passar um parâmetro inexistente', () => {
    expect(handlerElephants('???')).toBeNull();
  });
  it('Retorna NW ao passar "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Retorna corretamente a popularidade ao passar "popularity"', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Retorna corretamente os dias da semana ao passar "availability"', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
