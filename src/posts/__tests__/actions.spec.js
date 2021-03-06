import Posts from 'posts';

const { actions } = Posts;

const params = { foo: 'bar', bar: 'foo' };

test('clear creates correct action', () => {
  expect(actions.clear()).toEqual({
    type: actions.CLEAR_ENTITIES,
  });
});

test('updateFilters creates correct action', () => {
  expect(actions.updateFilters(params)).toEqual({
    type: actions.UPDATE_FILTERS,
    payload: params,
  });
});

test('replaceFilters creates correct action', () => {
  expect(actions.replaceFilters(params)).toEqual({
    type: actions.REPLACE_FILTERS,
    payload: params,
  });
});

test('fetchCollection creates correct action', () => {
  expect(actions.fetchCollection(params)).toEqual({
    type: actions.FETCH_COLLECTION,
    payload: new Promise(() => {}),
  });
});

test('fetchEntity creates correct action', () => {
  expect(actions.fetchEntity(123)).toEqual({
    type: actions.FETCH_ENTITY,
    payload: new Promise(() => {}),
  });
});

test('fetchBySlug creates correct action', () => {
  expect(actions.fetchBySlug('my-slug-yep-this-is-it')).toEqual({
    type: actions.FETCH_ENTITY,
    payload: new Promise(() => {}),
  });
});