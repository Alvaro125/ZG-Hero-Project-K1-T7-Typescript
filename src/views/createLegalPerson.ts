import $ from "jquery";
import LegalPerson from "../model/legalPerson";
import Address from "../model/address";

const show = function () {
  const $form = $(`<form method="post"></form>`);
  $form.on("submit", function (event: any) {
    event.preventDefault();
    const data = new FormData(event.target);
      console.log(new LegalPerson(
        data.get("name") as string,
        data.get("email") as string,
          data.get("description") as string,
          new Address(
            data.get("country") as string,
            data.get("state") as string,
            data.get("cep") as string,
        )
      )
      )
  });
  $form.append(`<label for="name">Nome: <span class="error" id="name-error"></span></label>
  <input
    type="text"
    name="name"
    placeholder="Digite o nome da empresa..."
  />`);
  $form.append(`<label for="email">Email: <span class="error" id="email-error"></span></label>
  <input
    type="text"
    name="email"
    placeholder="Digite o email da empresa..."
  />`);
  $form.append(`<label for="description">Descrição: <span class="error" id="description-error"></span></label>
  <textarea name="description" cols="30" rows="10"></textarea>`);
    
  $form.append(`<label for="country">Pais: <span class="error" id="country-error"></span></label>
  <input
    type="text"
    name="country"
    placeholder="Digite o pais da empresa..."
  />`);
  $form.append(`<label for="state">Estado: <span class="error" id="state-error"></span></label>
  <input
    type="text"
    name="state"
    placeholder="Digite o estado da empresa..."
  />`);
  $form.append(`<label for="cep">CEP: <span class="error" id="cep-error"></span></label>
  <input
    type="text"
    name="cep"
    placeholder="Digite o CEP da empresa..."
  />`);
    $form.append(`<input type="submit" value="Criar" />`);
  $(document.body).append(`<h1>Cadastro de Empresa</h1>`); 
  $(document.body).append($form);
};
export { show };
