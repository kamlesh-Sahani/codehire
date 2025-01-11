"use client";
import { setUserPreferences, Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import 'tldraw/tldraw.css'
import { useEffect } from 'react'

const Canvas = () => {

    useEffect(() => {
        setUserPreferences({
          id: 'kamlesh',
          colorScheme: 'dark', 
        })
      }, [])
    const handleMount = (editor) => {
		editor.createShape({
			type: 'text',
			x: 200,
			y: 200,
			props: {
				text: '🌟 Unleash Your Creativity! 🌟' 
			},
           
        
		})

		editor.selectAll()

		editor.zoomToSelection({
			animation: { duration: 500 },
		})
	}
  return (
    <div className="tldraw__editor" style={{
        width: '100%',
        height: '80vh',
        borderRadius: '10px',
        overflow: 'hidden', // Ensure no overflow from the drawing canvas
        backgroundColor: '#000000',
        color:"#fff",
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',

      }}>
<Tldraw onMount={handleMount} />
    </div>
    
  )
}

export default Canvas
