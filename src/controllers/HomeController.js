import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rodrigo',
      sobrenome: 'Cruz',
      email: 'tomazetto.cruz@gmail.com',
      idade: 120,
      peso: 300,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
