import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import { QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient()

render(
    <QueryClientProvider client={ client }>
        <App />
    </QueryClientProvider>,

    document.getElementById('root'),
)


