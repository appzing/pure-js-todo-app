import test from 'tape';
import State from './state';

test( 'State', t => {
    let state, actual, expected;

    // The state mixin is actually a function
    state = State();
    // We pull the state out of the mixin
    actual = state.getState();
    // Then the state should be an empty object
    expected = {};
    // Here since they are two empty objects and pointing to the same point inmemory
    // and are not the exact same object, we need to use the deep equal
    t.deepEqual( actual, expected, 'should default to empty object' );


    // Now if we create an initial state and pull out that state then we should get that initial state
     const initialState = { one : 1};
     state = State( initialState );

     actual = state.getState();
     expected  = initialState;
     t.deepEqual(actual, expected, 'should use provided state' );

     actual = JSON.stringify ( state.getState() );
     expected = '{"one":1}';
     t.equal( actual, expected, 'should serialize only state to JSON');

     t.end();
});

test ( 'State:setState()', t => {
    let state, actual, expected;

    // Get the initial State
    const initialState = { one : 1};
    state = State( initialState );

    // Set the new state
    state.setState({ two:2 });
    // Get the new changed state
    actual = state.getState();

    // New changed state should contain both old and new state
    expected = { one:1, two:2 };

    t.deepEqual( actual, expected, 'should merge new state with old');

    t.end();
});
