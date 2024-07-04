import {
  IResponseRickMorty,
  Result,
} from "./interfaces/response-rickandmorty-interface.js";

const ul = document.querySelector(".item-list") as HTMLUListElement;

document.addEventListener("DOMContentLoaded", async () => {
  const data: Result[] = await getAllCharacters();

  data.map((character: Result) => {
    console.log(character);
    const li = document.createElement("li") as HTMLLIElement;
    const h4 = document.createElement("h4") as HTMLHeadingElement;
    const image = document.createElement("img") as HTMLImageElement;
    const alive = document.createElement("p") as HTMLParagraphElement;

    h4.innerText = character.name;
    image.src = character.image;
    image.className = "image";
    alive.innerText = `Status: ${character.status}`;

    li.append(h4);
    li.append(image);
    li.append(alive);

    ul.appendChild(li);
  });
});

const getAllCharacters = async (): Promise<Result[]> => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  let data: IResponseRickMorty = await response.json();

  return data.results;
};
