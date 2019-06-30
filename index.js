import { useEffect } from 'react'

export default function useClassBasedEventListener(
  elementClass,
  event,
  handler,
  passive = true
) {
  useEffect(() => {
    // Get all the elements to listen on
    let elementArray = document.getElementsByClassName(elementClass)

    // Add the event listener along with the function to run when event is emitted
    for (let i = 0; i < classnameArray.length; i++) {
      elementArray[i].addEventListener(event, handler, passive)
    }

    // this will clean up the eventListener when the component is unmounted
    return function cleanup() {
      for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].removeEventListener(event, handler)
      }
    }
  }, [])
}
