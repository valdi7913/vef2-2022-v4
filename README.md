# Vefforritun2 2022 - Verkefni 4 React Viðburðarkerfi

Verkefnið byggir á [sýnilausninni á verkefni 3](https://vef2-20222-v3-synilausn.herokuapp.com/)

Búið er að setja síðuna upp [hér](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)

## Síður

_/_ er heimasíðan og sýnir alla viðburði.  
_/events/:id_ sýnir upplýsingar um gefna viðburðinn og leyfir innskráðum notenda að skrá sig á hann.  
_/login_ er placeholder síða sem ætti að leyfa notenda að skrá sig inn en það var ekki hluti af verkefninu.  
_/_ \*notfound allar aðrar síður redirecta á 404 síðu.

## npm scripts

Hægt er að keyra eftirfarandi script til að prufa verkefnið

### `npm start`.

Keyrir síðuna.

### `npm test`.

Keyrir test.

### `npm run lint`.

Lint-ar verkefnið

## Test.

Test fyrir componentana EventForm og Registered sem eru notaðir í Event hlutnum
Fake context var notað í testum

