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
        const h4 = document.createElement("h4");
        const image = document.createElement("img");
        const alive = document.createElement("p");
        h4.innerText = character.name;
        image.src = character.image;
        image.className = "image";
        alive.innerText = `Status: ${character.status}`;
        li.append(h4);
        li.append(image);
        li.append(alive);
        ul.appendChild(li);
    });
}));
const getAllCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://rickandmortyapi.com/api/character");
    let data = yield response.json();
    return data.results;
});
export {};
