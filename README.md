# TypeScript Week 1: Správca tímu a úloh

Napíš konzolovú TypeScript aplikáciu, ktorá pracuje s používateľmi, tímami a úlohami. Cieľom nie je UI ani databáza: pracuj len s dátami v pamäti a s čistými funkciami.

## Spustenie

```bash
npm install
npm run dev
npm run check
npm test
```

`src/index.ts` obsahuje ukážkové dáta. Svoje riešenia píš do `src/tasks.ts` a nemeň exportované signatúry. Pri správnom riešení majú funkcie vracať nové objekty a polia; nemenia vstupné hodnoty.

## Povinné úlohy

1. `getUserLabel` vráti `nickname`, ak existuje, inak `name`. Použi `??`.
2. `addMember` vráti nový tím s pridaným používateľom. Pôvodný tím nesmie zmeniť.
3. `getTeamMemberNames` vráti pole mien všetkých členov.
4. `assignTask` vráti novú úlohu s nastaveným `assigneeId`.
5. `changeTaskStatus` prijíma iba platný `TaskStatus` a vráti úlohu s novým stavom.
6. `getOpenTasks` vráti úlohy, ktoré ešte nie sú `done`.
7. `updateUser` prijme iba čiastočnú zmenu používateľa bez možnosti meniť `id`. Použi `Partial<Omit<User, "id">>`.
8. `getUserSummary` prijme iba `id` a `name` používateľa (`Pick`) a vráti text vo formáte `u1: Alex`.
9. `formatPriority` preloží `low`, `medium`, `high` na `Nízka`, `Stredná`, `Vysoká`.
10. `shoutUnknownValue` prijme `unknown`; ak dostane reťazec, vráti ho veľkými písmenami, inak `"Unknown value"`. Použi narrowing cez `typeof`.
11. `filterTasks` použije typ funkcie `TaskFilter` a vráti len úlohy, ktoré filter vyberie.

## Pravidlá

- Používaj `strict` TypeScript; `npm run check` musí prejsť.
- Nepoužívaj `any` ani typové tvrdenia (`as`).
- Parametre a návratové hodnoty všetkých samostatných funkcií majú mať explicitné typy.
- `Admin` rozširuje `User`; vytvor v `index.ts` aspoň jedného administrátora s oprávneniami.
- Doplň do `index.ts` výpis, ktorý používa aspoň päť hotových funkcií.

## Bonus

- Napíš `getTasksForUser(tasks, userId)`.
- Vytvor `Readonly<Team>` pohľad a over, že cezň nemôžeš priamo meniť vlastnosti tímu.
- Napíš aspoň po jednom teste pre každú funkciu vo `tests/tasks.test.ts`.

## Odovzdanie

1. Doplň implementácie a ukážkový konzolový výstup.
2. Spusť `npm run check` a `npm test`.
3. Pushni zmeny do vlastného GitHub repozitára.
