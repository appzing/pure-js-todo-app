// Combines all the mixins so that we can do something like
// const o = compose( notifyMixin, State())
// Then we have access to o.getState()
export default (...mixins) => Object.assign( {}, ...mixins );
