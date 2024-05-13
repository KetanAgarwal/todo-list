import { ReactElement } from 'react'
import Todo from './components'

export interface AppProps {
  showFilters?: boolean
}

const App = ({
  showFilters = false
}: AppProps): ReactElement => {
  return (
    <Todo showFilters={showFilters} />
  );
}

export default App;
