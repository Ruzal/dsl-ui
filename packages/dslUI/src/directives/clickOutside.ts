import { DirectiveBinding, VNode } from "vue";

interface ClickOutsideHandler {
  el: HTMLElement,
  fn: Function,
  id: number
};

var handled: boolean = false;
const handlers: ClickOutsideHandler[] = [];

function windowClickHandler(event: Event) {
  handlers.forEach((handler: ClickOutsideHandler, index: number) => {
    if (event.composedPath().indexOf(handler.el) > -1) return;
    handler.fn.call(null);
  });
}

export default {
  created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode & { _coid: number }): void {
    if (!binding.value) return;

    vnode._coid = Date.now() + Math.random();

    handlers.push({ 
      el: el,
      fn: binding.value,
      id: vnode._coid
    });

    if (!handled) {
      window.addEventListener("click", windowClickHandler);
      handled = true;
    }
  },
  unmounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode & { _coid: number }) {
    const index = handlers.findIndex((handler) => handler.id === vnode._coid);
    if (index > -1) {
      handlers.splice(index, 1);
    }
  }
}