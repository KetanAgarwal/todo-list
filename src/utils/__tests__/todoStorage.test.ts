import 'jest-localstorage-mock'
import { getTodos } from '../todoStorage';

describe('todoStorage test cases', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns todos from localStorage', () => {
    const todos = [{ text: 'Todo 1', completed: false }];
    localStorage.setItem('todos', JSON.stringify(todos));

    const result = getTodos();
    expect(result).toEqual(todos);
  });

  it('returns empty array when localStorage is empty or contains invalid data', () => {
    const resultEmpty = getTodos();
    expect(resultEmpty).toEqual([]);

    localStorage.setItem('todos', 'invalidJSONData');
    const resultInvalid = getTodos();
    expect(resultInvalid).toEqual(undefined);
  });

  it('logs error message when there is an error parsing JSON data', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    localStorage.setItem('todos', '{invalidJsonData}');

    getTodos();
    expect(consoleSpy).toHaveBeenCalledWith('There is error while trying to retrieve data from localStorage');
    consoleSpy.mockRestore();
  });
});
