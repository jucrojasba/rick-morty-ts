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
    const name = document.createElement("h4") as HTMLHeadingElement;
    const image = document.createElement("img") as HTMLImageElement;
    const status= document.createElement("p") as HTMLParagraphElement;
    const specie= document.createElement("p") as HTMLParagraphElement;
    const gender= document.createElement("p") as HTMLParagraphElement;
    const location= document.createElement("p") as HTMLParagraphElement;
    const origin= document.createElement("p") as HTMLParagraphElement;

    name.innerText = character.name;
    image.src = character.image;
    image.className = "image";
    status.innerText = `Status: ${character.status}`;
    specie.innerText = `Specie: ${character.species}`;
    gender.innerText = `Gender: ${character.gender}`;
    location.innerText = `Location: ${character.location.name}`;
  origin.innerText = `Origin: ${character.origin.name}`;

    
    li.append(image);
    li.append(name);
    li.append(status);
    li.append(specie);
    li.append(gender);
    li.append(location);
    li.append(origin);

    ul.appendChild(li);
  });
});

const getAllCharacters = async (): Promise<Result[]> => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  let data: IResponseRickMorty = await response.json();

  return data.results;
};
