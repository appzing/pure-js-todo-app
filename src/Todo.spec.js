import test from 'tape';
import Todo from './Todo';

test('Todo', t => {
    let actual, expected, todo;

    let testTodo = {
        id: 'test',
        title: 'Title',
        complete: true,
    };

    todo = Todo( testTodo );
    // If we pass in an object as a Todo
    actual = todo.getId();
    expected = testTodo.id;
    t.equal(actual, expected, 'with object should store id');

    actual = todo.getTitle();
    expected = testTodo.title;
    t.equal(actual, expected, 'with object, should store title');

    actual = todo.isComplete();
    expected = testTodo.complete;
    t.equal(actual, expected, 'with object, should store the completion');

    todo = Todo( 'Test' );
    // If we pass in just the title as a Todo
    actual = typeof todo.getId();
    expected = 'string';
    t.equal(actual, expected, 'with title should generate id');

    actual = todo.getTitle();
    expected = 'Test';
    t.equal(actual, expected, 'with ttile, should store title');

    actual = todo.isComplete();
    expected = false;
    t.equal(actual, expected, 'with title, should default to not complete');

    todo = Todo('Test');
    todo.toggleComplete();
    actual = todo.isComplete();
    expected = true;
    t.equal(actual, expected, 'toggleComplete should complete uncompleted todos');

    todo.toggleComplete();
    actual = todo.isComplete();
    expected = false;
    t.equal(actual, expected, 'toggleComplete should uncomplete completed todos');
    t.end();
});
