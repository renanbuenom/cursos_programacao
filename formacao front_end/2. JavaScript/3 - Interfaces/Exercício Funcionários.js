class Funcionario {
    constructor(nome, cpf, salario) {
      this.nome = nome;
      this.cpf = cpf;
      this._salario = salario;
      this._bonificacao;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, cpf) {
      super(nome, cpf, 2400);
      this._bonificacao = 1.2;
    }
  }
  
  class Assistente extends Funcionario {
    constructor(nome, cpf) {
      super(nome, cpf, 1200);
      this._bonificacao = 0.9;
    }
  }

  const teste = new Gerente("renan", 81224);

  console.log(teste);