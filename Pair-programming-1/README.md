## Activity

## Exercise 1
How do you export this component?

```js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}
```

## Exercise 2

Something is wrong with the following component. How can you fix it?

```js
export default function Profile() {
  return
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
```

## Exercise 3

Something's wrong with how the `Profile` component is declared and used. Can you spot the mistake? 

```js
function profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <profile />
      <profile />
      <profile />
    </section>
  );
}
```

## Exercise 4

Write a component named  `Congratulations` component that shows `<h1>Good job!</h1>`. Don't forget to export it!

```js
const Congratulations = () => <h1>Good job!</h1>
export default Congratulations;

```

