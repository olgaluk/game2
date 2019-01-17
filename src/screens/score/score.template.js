function createTemplateScore() {
  return `
<section class="container-score">
  <div class="score">
    <h2>Таблица рекордов</h2>
    <table border="1">
    <thead>
      <tr>
        <th>Имя</th>
        <th>Убито монстров</th>
      </tr>
    </thead>
    <tbody id="tableData"></tbody>
    </table>
    <input id="score_button" class="score-button" type="button" value="Закрыть">
  </div>
</section>
`;
}

export default createTemplateScore();
