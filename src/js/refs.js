export default function getRefs() {
    return {
         wrapper: document.createElement("div"),
         form: document.createElement("form"),
         input: document.createElement("input"),
         gallery: document.createElement("ul"),
         button: document.querySelector(".btn"),
         body: document.querySelector("body"),
    };
};