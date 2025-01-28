Feature('Edit/Delete Todos 33 @step-06 @S3e5116ea')

Before(async ({ I, TodosPage }) => {
    TodosPage.goto()

    TodosPage.enterTodo('foo')
    TodosPage.enterTodo('bar')
    TodosPage.enterTodo('baz')
})

Scenario('Edited todo is saved on blur 33 @T9c3d89a3', async ({ I, TodosPage }) => {
    I.say('Given I have some todos')
  
    I.say('When I edit the first todo')
    await TodosPage.editNthTodo(1, 'boom')
  
    I.say('Then I see that the todo text has been changed')
    await TodosPage.seeNthTodoEquals(1, 'boom')

    I.saveScreenshot('edited-todo-saved-on-blur.png')
})

Scenario('Delete todos 33 @T92978777', async ({ I, TodosPage }) => {
    I.say('Given I have some todos')
    I.say('When I delete the first todo')
    TodosPage.deleteNthTodo(1)

    I.say('Then the todo should disappear from the list')
    TodosPage.seeNumberOfTodos(2)    
})
  