export const profile = () =>
    <img src = "https://i.imgur.com/QIrZWGIs.jpg" alt="Alan"/>;
  
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