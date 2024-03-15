import $ from "jquery";
import Livro from "./model/livro";
import {show} from "./views/createLegalPerson";

const livro = new Livro("Dom Quixote", 108.8, 0.1);
// console.log(livro.precoComDesconto())

// $("body").append(`<h1>${livro.nome}</h1>`);
// $("body").append(`
//     <h2>Preço: R$${livro.precoComDesconto()}</h2>
// `);

// $("#root")
//   .append(`<p>Cadastar Empresa</p>`)
//   .click(function () {
//     show();
//   });
show();