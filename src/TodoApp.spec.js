import test from 'tape';
import TodoApp from './TodoApp';
import Todo from './Todo';

test('TodoApp', t => {
    let actual, expected, app;

    app = TodoApp();

    actual = app.isFiltered();
    expected = false;
    t.deepEqual( actual, expected, 'should begin without a filter');

    actual = app.getTodos();
    expected = [];
    t.deepEqual( actual, expected, 'should begin with an empty list');

    app.addTodo( 'Test' );

    actual = app.getTodos().length;
    expected = 1;
    t.equal( actual, expected, 'addTodo should add a todo');

    let [ todo ] = app.getTodos();
    actual = typeof todo.getTitle;
    actual = 'function';
    t.ok( actual, 'addTodo should add todos as Todo instances' );

    actual = todo.getTitle();
    expected = 'Test';
    t.equal( actual, expected, 'addTodo should set the title of the todo to that passed' );

    app.toggleFilter();
    todo.toggleComplete();
    actual = app.getTodos().length;
    expected = 0;
    t.equal( actual, expected, 'should use filter to hide completed');

    app.toggleFilter();
    actual = app.getTodos().length;
    expected = 1;
    t.equal( actual, expected, 'should show all when filter removed');

    app.rmTodo( todo.getId() );
    actual = app.getTodos().length;
    expected = 0;
    t.equal( actual, expected, 'rmTodo should remove a todo by its id');

    app.setTodos( [ Todo('1'), Todo('2')])
    actual = app.getTodos().length;
    expected = 2;
    t.equal( actual, expected, 'setTodo should replace all todos with that provided');

    t.end();
});
