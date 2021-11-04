const { expect } = require('chai');

describe('Testando describe', () => {
  it('Testando it', () => {
    const resposta = 'passou no teste';
    expect(resposta).equals('passou no teste');
  });
  it('Outro teste de it', () => {
    const soma = 4 + 4;
    expect(soma).equals(8);
  });
});
