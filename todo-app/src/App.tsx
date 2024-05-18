import React, { ReactElement } from 'react'
import Todo from './components'
import { TodoProps } from './components/interface'

const App = ({
  showFilters = false,
  heading = 'Todo App'
}: TodoProps): ReactElement => {
  return (
    <div>
      <Todo showFilters={showFilters} heading={heading} />
    </div>
  );
}

export default App;
