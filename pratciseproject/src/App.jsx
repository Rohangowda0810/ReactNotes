import React, { lazy } from 'react'
import Example1 from './Axios/Example1'
import Example2 from './Axios/Example2'
import MainComponent from './LazyLoading/MainComponent'

import { Suspense } from 'react'
import ProductFilter from './FilterData/ProductFilter'
 let LoadedComponent  = lazy(()=>import('./LazyLoading/LoadedComponent'))
function App() {

  return (
    <>
<ProductFilter/>
    </>
  )
}

export default App