function formdata() {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const number = e.target[2].value;
    const query = e.target[3].value;

    console.log(name, number, email, query);
}