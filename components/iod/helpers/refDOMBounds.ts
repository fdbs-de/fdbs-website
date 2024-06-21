import { Ref, ref, unref, watch } from "vue"

export interface refDOMBounds {
  height: Ref<number>
  bottom: Ref<number>
  left: Ref<number>
  right: Ref<number>
  top: Ref<number>
  width: Ref<number>
  x: Ref<number>
  y: Ref<number>
  update: () => void
}

export function getEmptyRefDOMBounds(): refDOMBounds {
  return{
    height: ref(0),
    bottom: ref(0),
    left: ref(0),
    right: ref(0),
    top: ref(0),
    width: ref(0),
    x: ref(0),
    y: ref(0),
    update: () => undefined
  }
}

export function useElementBounding(
  target: Ref<Element> | Element,
  refDOMBounds = getEmptyRefDOMBounds(),
) : refDOMBounds{

  //If the element resizes, update the values
  new ResizeObserver(update).observe(unref(target))

  function update() {
    const el = unref(target)

    if (!el) {
      //If we don't have an element, reset the values to 0
      refDOMBounds.height.value = 0
      refDOMBounds.bottom.value = 0
      refDOMBounds.left.value = 0
      refDOMBounds.right.value = 0
      refDOMBounds.top.value = 0
      refDOMBounds.width.value = 0
      refDOMBounds.x.value = 0
      refDOMBounds.y.value = 0
      return
    }

    const rect = el.getBoundingClientRect()

    //update the ref values
    refDOMBounds.height.value = rect.height
    refDOMBounds.bottom.value = rect.bottom
    refDOMBounds.left.value = rect.left
    refDOMBounds.right.value = rect.right
    refDOMBounds.top.value = rect.top
    refDOMBounds.width.value = rect.width
    refDOMBounds.x.value = rect.x
    refDOMBounds.y.value = rect.y
  }



  //If the element is removed from the DOM, force an update
  watch(() => unref(target), ele => !ele && update())

  //Also catch any scroll or resize events
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });

  //Update the values initially
  update()

  return refDOMBounds
}