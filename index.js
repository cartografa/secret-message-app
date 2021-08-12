document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('input');
    console.log(input.value);
});