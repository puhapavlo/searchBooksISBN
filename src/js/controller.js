import Model from  "./model.js";
import View from "./view.js";

const input = document.querySelector('.search-main__input');
const btn = document.querySelector('.search-main__btn');
const keyAPI = 'AIzaSyAaoe1WzjGj03OxZWKmO2JFSBydToq0l0M';
const dataBook = {
    description: 'No description',
    categories: 'No categories',
}; 
const bookTemplate = document.getElementById('bookTemplate').innerHTML;

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    let modelJson = await Model.responseSearch(input.value, keyAPI);
    console.log(modelJson);
    const data = modelJson.items[0].volumeInfo;

    dataBook.img = data.imageLinks.thumbnail;
    dataBook.authors = data.authors.join(', ');
    dataBook.title = data.title;
    dataBook.publishedDate = data.publishedDate;
    if(data.categories !== undefined){
        dataBook.categories = data.categories.join(', ');
    }
    if(data.description !== undefined){
        dataBook.description = data.description;
    }
    console.log(dataBook);

    const bookResult = View.render(bookTemplate, dataBook);
    document.querySelector('.container__book').innerHTML = bookResult;
    console.log(bookResult);
});