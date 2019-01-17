function createTemplateTask() {
  return `
  <section id="task" class="task">
  <div class="simple-header">
      <h2></h2>
  </div>
  <div class="simple-main">
      <div class="simple-task">
      <h3></h3>
      </div>
      <div>
          <input id="player_response" class="player-response" type="text" autocomplete="off">
          <input id="response" class="response-button" type="button" value="Ответить">
      </div>
  </div>
  </section>
  `;
}

export default createTemplateTask();
