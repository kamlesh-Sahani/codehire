"use client";
import { throttle } from 'lodash'

import { setUserPreferences, Tldraw, createTLStore, getSnapshot, loadSnapshot } from "tldraw";
import "tldraw/tldraw.css";
import { useEffect, useLayoutEffect, useState } from "react";





const PERSISTENCE_KEY = 'example-3'


const Canvas = () => {
  const [store] = useState(()=>createTLStore());
  const [loadingState, setLoadingState] = useState<
  { status: 'loading' } | { status: 'ready' } | { status: 'error'; error: string }
>({
  status: 'loading',
});


const [canvasData,setCanvasData] = useState<any>();

  useEffect(() => {
    setUserPreferences({
      id: "kamlesh",
      colorScheme: "dark",
    });
  }, []);


  const handleMount = (editor) => {
    editor.createShape({
      type: "text",
      x: 200,
      y: 200,
      props: {
        text: "🌟 Unleash Your Creativity! 🌟",
      },
    });
    editor.selectAll();

    editor.zoomToSelection({
      animation: { duration: 500 },
    });
  };




  useLayoutEffect(() => {
		setLoadingState({ status: 'loading' })

		// Get persisted data from local storage
		const persistedSnapshot = localStorage.getItem(PERSISTENCE_KEY)

		if (persistedSnapshot) {
			try {
				const snapshot = JSON.parse(persistedSnapshot)
				loadSnapshot(store, snapshot)
				setLoadingState({ status: 'ready' })
			} catch (error: any) {
				setLoadingState({ status: 'error', error: error.message }) // Something went wrong
			}
		} else {
			setLoadingState({ status: 'ready' }) // Nothing persisted, continue with the empty store
		}

		// Each time the store changes, run the (debounced) persist function
		const cleanupFn = store.listen(
			throttle(() => {
				const snapshot = getSnapshot(store)
				// localStorage.setItem(PERSISTENCE_KEY,JSON.pa(`{"document":{"store":{"document:document":{"gridSize":10,"name":"","meta":{},"id":"document:document","typeName":"document"},"page:page":{"meta":{},"id":"page:page","name":"Page 1","index":"a1","typeName":"page"},"shape:xlDlj4JF3jHbfgyl8NwK9":{"x":184.8485107421875,"y":56.565643310546875,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:xlDlj4JF3jHbfgyl8NwK9","type":"text","props":{"color":"black","size":"m","w":8,"text":"🌟 Unleash Your Creativity! 🌟","font":"draw","textAlign":"start","autoSize":true,"scale":1},"parentId":"page:page","index":"a1","typeName":"shape"},"shape:igdzKBFET6QdZCGY8mTCD":{"x":184.8485107421875,"y":56.565643310546875,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:igdzKBFET6QdZCGY8mTCD","type":"text","props":{"color":"black","size":"m","w":8,"text":"🌟 Unleash Your Creativity! 🌟","font":"draw","textAlign":"start","autoSize":true,"scale":1},"parentId":"page:page","index":"a20HP","typeName":"shape"},"shape:leaHiXJy2-eWZfQ7XuMlZ":{"x":347.7117004394531,"y":230.7137451171875,"rotation":0,"isLocked":false,"opacity":1,"meta":{},"id":"shape:leaHiXJy2-eWZfQ7XuMlZ","type":"text","props":{"color":"black","size":"m","w":422.046875,"text":"Kamlesh Kumar \n\n 1. Apple -> this is apple_kamlesh","font":"draw","textAlign":"start","autoSize":true,"scale":1},"parentId":"page:page","index":"a37S0","typeName":"shape"}},"schema":{"schemaVersion":2,"sequences":{"com.tldraw.store":4,"com.tldraw.asset":1,"com.tldraw.camera":1,"com.tldraw.document":2,"com.tldraw.instance":25,"com.tldraw.instance_page_state":5,"com.tldraw.page":1,"com.tldraw.instance_presence":6,"com.tldraw.pointer":1,"com.tldraw.shape":4,"com.tldraw.asset.bookmark":2,"com.tldraw.asset.image":5,"com.tldraw.asset.video":5,"com.tldraw.shape.arrow":5,"com.tldraw.shape.bookmark":2,"com.tldraw.shape.draw":2,"com.tldraw.shape.embed":4,"com.tldraw.shape.frame":0,"com.tldraw.shape.geo":9,"com.tldraw.shape.group":0,"com.tldraw.shape.highlight":1,"com.tldraw.shape.image":4,"com.tldraw.shape.line":5,"com.tldraw.shape.note":8,"com.tldraw.shape.text":2,"com.tldraw.shape.video":2,"com.tldraw.binding.arrow":0}}},"session":{"version":0,"currentPageId":"page:page","exportBackground":true,"isFocusMode":false,"isDebugMode":false,"isToolLocked":false,"isGridMode":false,"pageStates":[{"pageId":"page:page","camera":{"x":-57.5703125,"y":106.9921875,"z":1},"selectedShapeIds":["shape:leaHiXJy2-eWZfQ7XuMlZ"],"focusedGroupId":null}]}}`));

        localStorage.setItem(PERSISTENCE_KEY,JSON.stringify(snapshot));

        console.log(snapshot.document.store,"dataaaa");
        setCanvasData(JSON.parse(JSON.stringify(snapshot.document.store)));
			}, 500)
		)
		return () => {
			cleanupFn()
		}
	}, [store])

  return (
    <div
      className="tldraw__editor"
      style={{
        width: "100%",
        height: "80vh",
        borderRadius: "10px",
        overflow: "hidden", // Ensure no overflow from the drawing canvas
        backgroundColor: "#000000",
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Tldraw onMount={handleMount}   store={store}/>
    </div>
  );
};

export default Canvas;
