import s from "./NotFound.module.scss";

export function NotFound() {
  return (
    <main className={s.main}>
      <h1> Villa 404 </h1>
      <p> Þessi síða er ekki til</p>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
        {" "}
        Þessi er samt til{" "}
      </a>
    </main>
  );
}
