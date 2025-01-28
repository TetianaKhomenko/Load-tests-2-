Feature('Persist Todos1 @S55be2ade')

Before(async ({ I, TodosPage }) => {
  I.say('Given I have some todos')
  I.clearCookie()
  TodosPage.goto()
  
  TodosPage.enterTodos([
      {title: 'foo', completed: false},
      {title: 'bar', completed: false},
      {title: 'baz', completed: false},
      {title: 'boom', completed: true},
  ])
  TodosPage.refresh()
  I.saveScreenshot('initial-todos.png')
})

Scenario('Todos survive a page refresh1 @step-06 @Tb686d54a', async ({ I, TodosPage }) => {
  I.say('And I marked the first as completed')
  await TodosPage.markNthAsCompleted(1)

  I.say('When I refresh the page')
  TodosPage.refresh()

  I.say('Then I still see the same todos')
  TodosPage.seeNumberOfTodos(4)
  await TodosPage.seeNthTodoEquals(1, 'foo')

  I.saveScreenshot('todos-survive-page-refresh.png')
})
