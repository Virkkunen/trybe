const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Retorna as horas caso não passar parâmetro', () => {
    expect(getOpeningHours()).toBe(hours);
  });
  it('Retorna "The zoo is closed" ao passar horário em que o zoológico está fechado', () => {
    const actual = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(actual);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(actual);
    expect(getOpeningHours('Sunday', '00:00-AM')).toBe(actual);
  });
  it('Retorna "The zoo is open" ao passar horário em que o zoológico está aberto', () => {
    const actual = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(actual);
    expect(getOpeningHours('Thursday', '12:00-PM')).toBe(actual);
    expect(getOpeningHours('Saturday', '01:00-PM')).toBe(actual);
  });
  it('Retorna aviso ao passar dia abreviado ', () => {
    const actual = 'The day must be valid. Example: Monday';
    expect(getOpeningHours('Thu', '09:00-AM')).toThrow(actual);
  });
  it('Retorna aviso ao passar turno errado', () => {
    const actual = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow(actual);
  });
  it('Retorna aviso ao passar hora sem números', () => {
    const actual = 'The hour should represent a number';
    expect(getOpeningHours('Thursday', 'C9:00-AM')).toThrow(actual);
  });
  it('Retorna aviso ao passar minutos sem números', () => {
    const actual = 'The minutes should represent a number';
    expect(getOpeningHours('Sunday', '09:O0-AM')).toThrow(actual);
  });
  it('Retorna aviso ao passar hora inválida', () => {
    const actual = 'The hour must be between 0 and 12';
    expect(getOpeningHours('Friday', '13:00-PM')).toThrow(actual);
  });
  it('Retorna aviso ao passar minutos inválidos', () => {
    const actual = 'The minutes must be between 0 and 59';
    expect(getOpeningHours('Friday', '09:68-AM')).toThrow(actual);
  });
});
