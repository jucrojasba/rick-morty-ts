var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ul = document.querySelector(".item-list");
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getAllCharacters();
    data.map((character) => {
        console.log(character);
        const li = document.createElement("li");
        const name = document.createElement("h4");
        const image = document.createElement("img");
        const status = document.createElement("p");
        const specie = document.createElement("p");
        const gender = document.createElement("p");
        const location = document.createElement("p");
        const origin = document.createElement("p");
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
}));
const getAllCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://rickandmortyapi.com/api/character");
    let data = yield response.json();
    return data.results;
});
export {};
