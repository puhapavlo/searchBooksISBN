import Model from  "./model.js";

const input = document.querySelector('.search-main__input');
const btn = document.querySelector('.search-main__btn');
const keyAPI = 'AIzaSyAaoe1WzjGj03OxZWKmO2JFSBydToq0l0M';

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    let modelJson = await Model.responseSearch(input.value, keyAPI);
});