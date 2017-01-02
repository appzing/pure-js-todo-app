import test from 'tape';
import notifyMixin from './notify';
import { createSpy } from './../spy';

test( 'notify', t => {
    let actual, expected, notify;
    let spy = createSpy();

    notify = Object.assign({}, notifyMixin); // Same as writing notify = {...notifyMixin} in ES6

    // A spy is a function that it will track how many times its is called
    notify.subscribe ( spy );

    notify.notify();

    t.ok( spy.called, '::notify should call subscribers' );

    spy.reset();
    notify.unsubscribe( spy );
    notify.notify();
    t.notOk( spy.called, 'should remove subscribers when they are passed to unsubscribe' );

    spy.reset();
    let unsubscribe = notify.subscribe( spy );

    actual = typeof unsubscribe;
    expected = 'function';
    t.equal( actual, expected, 'subscribe should return an unsubscribe function' );

    unsubscribe();
    notify.notify();
    t.notOk( spy.called, 'should remove subscribers when the returned function is called' );

    t.end();
  });
