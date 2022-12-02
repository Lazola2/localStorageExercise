let people = [];

// buttons
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

//add event listener
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let firstName = document.querySelector('#first-name').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    // push an object into the array
    people.push({ firstName, surname, email });
    console.clear();
    console.table(people);

    // local storage
    localStorage.setItem('data', JSON.stringify(people));
});

// display button
display.addEventListener('click', (e) => {
    e.preventDefault();
    console.table(
        JSON.parse(localStorage.getItem('data'))
    );
})

