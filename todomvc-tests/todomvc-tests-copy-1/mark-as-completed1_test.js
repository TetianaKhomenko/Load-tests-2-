Feature('Mark as completed/not completed1 @step-06 @Sb07f10ff')

Before(async ({ I, TodosPage }) => {
    TodosPage.goto()
  
    TodosPage.enterTodo('foo')
    TodosPage.enterTodo('bar')
    TodosPage.enterTodo('baz')
  })

/**
 * Happy Path tests
 */
Scenario('Mark todos as completed1 @Te5be9c42', async ({ I, TodosPage }) => {
  I.say('Given I have some todos')

  I.say('When I mark the first one as completed')
  await TodosPage.markNthAsCompleted(1)

  I.say('Then I see that 2 todos are still active')
  TodosPage.filterActive()
  TodosPage.seeNumberOfTodos(2)

  I.say('And I see that 1 has been completed')
  TodosPage.filterCompleted()
  TodosPage.seeNumberOfTodos(1)

  I.saveScreenshot('mark-todos-as-completed.png')
})

Scenario('Unmark completed todos1 @T3f4dbd16', async ({ I, TodosPage }) => {
    I.say('Given I have some todos')
  
    I.say('And I mark the first one as completed')
    await TodosPage.markNthAsCompleted(1)
    await TodosPage.unmarkNthAsCompleted(1)
  
    I.say('When I unmark the completed todo item')

    I.say('Then I see that 3 todos are still active')
    TodosPage.filterActive()
    TodosPage.seeNumberOfTodos(3)
  
    I.saveScreenshot('unmark-todos-as-completed.png')
})
  
Scenario('Mark all todos as completed1 @T34cb6aa8', async ({ I, TodosPage }) => {
    I.say('Given I have some todos')
  
    I.say('When I mark them all as completed')
    TodosPage.markAllAsCompleted()
  
    I.say('Then I see that all 3 are completed')
    TodosPage.filterCompleted()
    TodosPage.seeNumberOfTodos(3)
  
    I.saveScreenshot('mark-all-todos-as-completed.png')
})

Scenario('Clear completed todos1 @T64d4b517', async ({ I, TodosPage }) => {
    I.say('Given I have some completed todos') 
    TodosPage.markAllAsCompleted()
  
    I.say('When I clear all completed items')
    TodosPage.clearCompleted()
    TodosPage.seeNumberOfTodos(0)
  
    I.saveScreenshot('clear-completed-todos.png')
})

