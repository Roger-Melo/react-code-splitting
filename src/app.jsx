import { lazy, useState, Suspense } from 'react'

const loadMap = () => import('@/components/map')
const Map = lazy(loadMap)

const App = () => {
  const [showMap, setShowMap] = useState(false)
  const handleChange = () => setShowMap(prev => !prev)
  return (
    <div className="app">
      <label onFocus={loadMap} onMouseEnter={loadMap}>
        <input type="checkbox" checked={showMap} onChange={handleChange} />
        Mostrar mapa
      </label>
      {showMap && (
        <Suspense fallback={<h3>Carregando...</h3>}>
          <Map />
        </Suspense>
      )}
    </div>
  )
}

export { App }
