import getRefs from './refs';
const refs = getRefs();
function createMurkupHtml() {

refs.wrapper.classList.add("wrapper");
refs.form.classList.add("search-form");
refs.input.type = "text";
refs.input.name = "query";
refs.input.autocomplete = "off";
refs.input.placeholder = "Search images...";
refs.input.classList.add("input");
refs.gallery.classList.add("gallery");
refs.form.append(refs.input);
refs.wrapper.append(refs.form, refs.gallery);
refs.body.prepend(refs.wrapper);
}
export default createMurkupHtml;