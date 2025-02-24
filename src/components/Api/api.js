import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import bearerToken from '../private.js';

const queryClient = new QueryClient()
const token = bearerToken

export default function App({query}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Api url={query}/>
    </QueryClientProvider>
  )
}

function Api(props) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.tastal.ga/${props.url}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => res.json()),
  })
  if (isLoading) return 'Cargando...'
  if (error) return 'Ha ocurrido un error: ' + error.message
  return JSON.stringify(data);
}